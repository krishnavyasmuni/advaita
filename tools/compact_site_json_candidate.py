#!/usr/bin/env python3
"""Losslessly compact valid website JSON while retaining every file path and value."""

from __future__ import annotations

import json
from pathlib import Path
from typing import Any

DATA_ROOT = Path("assets/data")
EXCLUDED = {"bhagavatam-sridhara-wfw-canto10.json"}  # Already covered by draft PR #40.


class InvalidJSON(ValueError):
    pass


def unique_object(pairs: list[tuple[str, Any]]) -> dict[str, Any]:
    result: dict[str, Any] = {}
    for key, value in pairs:
        if key in result:
            raise InvalidJSON(f"duplicate JSON key: {key}")
        result[key] = value
    return result


def reject_constant(value: str) -> None:
    raise InvalidJSON(f"non-standard JSON constant: {value}")


def parse_json(text: str) -> Any:
    return json.loads(
        text,
        object_pairs_hook=unique_object,
        parse_constant=reject_constant,
    )


def same_value(left: Any, right: Any) -> bool:
    if type(left) is not type(right):
        return False
    if isinstance(left, dict):
        return list(left.keys()) == list(right.keys()) and all(
            same_value(left[key], right[key]) for key in left
        )
    if isinstance(left, list):
        return len(left) == len(right) and all(
            same_value(a, b) for a, b in zip(left, right)
        )
    return left == right


def line_ending(raw: bytes) -> bytes:
    if raw.endswith(b"\r\n"):
        return b"\r\n"
    if raw.endswith(b"\n"):
        return b"\n"
    if raw.endswith(b"\r"):
        return b"\r"
    return b""


def main() -> None:
    paths = sorted(DATA_ROOT.rglob("*.json"))
    before_total = 0
    after_total = 0
    compacted = 0
    skipped = 0
    excluded_bytes = 0

    for path in paths:
        if path.name in EXCLUDED:
            size = path.stat().st_size
            before_total += size
            after_total += size
            excluded_bytes += size
            continue

        original_bytes = path.read_bytes()
        before_total += len(original_bytes)

        try:
            original_text = original_bytes.decode("utf-8")
            original_value = parse_json(original_text)
            compact_text = json.dumps(
                original_value,
                ensure_ascii=False,
                separators=(",", ":"),
                allow_nan=False,
            )
            compact_bytes = compact_text.encode("utf-8") + line_ending(original_bytes)
            compact_value = parse_json(compact_bytes.decode("utf-8"))
        except (UnicodeDecodeError, UnicodeEncodeError, json.JSONDecodeError, InvalidJSON, ValueError) as error:
            after_total += len(original_bytes)
            skipped += 1
            print(f"SKIP {path}: {error}")
            continue

        if not same_value(original_value, compact_value):
            raise RuntimeError(f"Parsed JSON changed during compaction: {path}")

        if len(compact_bytes) < len(original_bytes):
            path.write_bytes(compact_bytes)
            compacted += 1
            after_total += len(compact_bytes)
        else:
            after_total += len(original_bytes)

    saved = before_total - after_total
    print(
        "RESULT "
        f"files_scanned={len(paths)} "
        f"files_compacted={compacted} "
        f"files_skipped={skipped} "
        f"excluded_existing_pr40_bytes={excluded_bytes} "
        f"bytes_before={before_total} "
        f"bytes_after={after_total} "
        f"bytes_saved={saved}"
    )
    if compacted == 0:
        raise SystemExit("No valid JSON files were compacted; refusing an empty candidate.")


if __name__ == "__main__":
    main()
