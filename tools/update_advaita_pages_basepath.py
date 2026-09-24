#!/usr/bin/env python3
"""Update this static site's GitHub Pages base path after the repository rename."""

from __future__ import annotations

import subprocess
from pathlib import Path

OLD_PATH = "/vivekadrishti"
NEW_PATH = "/advaita"
OLD_ABSOLUTE = "https://krishnavyasmuni.github.io/vivekadrishti"
NEW_ABSOLUTE = "https://krishnavyasmuni.github.io/advaita"
TEXT_SUFFIXES = {
    ".html", ".htm", ".css", ".js", ".mjs", ".cjs",
    ".xml", ".svg", ".json", ".webmanifest", ".txt",
}
SITE_DIRS = {"assets", "articles", "pages"}
ROOT_SUFFIXES = {".html", ".htm", ".css", ".js", ".mjs", ".cjs", ".xml", ".json", ".webmanifest"}


def tracked_paths() -> list[Path]:
    raw = subprocess.check_output(["git", "ls-files", "-z"])
    return [Path(name.decode("utf-8")) for name in raw.split(b"\0") if name]


def in_site_scope(path: Path) -> bool:
    suffix = path.suffix.lower()
    if suffix not in TEXT_SUFFIXES:
        return False
    if path.parts[0] in SITE_DIRS:
        return True
    return len(path.parts) == 1 and suffix in ROOT_SUFFIXES


def main() -> None:
    changed_files: list[str] = []
    replacements = 0

    for path in tracked_paths():
        if not in_site_scope(path):
            continue

        raw = path.read_bytes()
        try:
            text = raw.decode("utf-8")
        except UnicodeDecodeError:
            continue

        absolute_count = text.count(OLD_ABSOLUTE)
        path_count = text.count(OLD_PATH)
        if not absolute_count and not path_count:
            continue

        updated = text.replace(OLD_ABSOLUTE, NEW_ABSOLUTE).replace(OLD_PATH, NEW_PATH)
        if OLD_PATH in updated:
            raise RuntimeError(f"Old Pages path remains after replacement: {path}")

        path.write_bytes(updated.encode("utf-8"))
        replacements += absolute_count + path_count
        changed_files.append(path.as_posix())

    if not changed_files:
        raise SystemExit("No old Pages paths found in website files.")

    root_index = Path("index.html").read_text(encoding="utf-8")
    site_loader = Path("assets/js/site.js").read_text(encoding="utf-8")
    if OLD_PATH in root_index or OLD_PATH in site_loader:
        raise RuntimeError("The home page or site loader still references the old base path.")

    for required in ("assets/css/site.css", "assets/css/hindupedia-site.css"):
        if not Path(required).is_file():
            raise RuntimeError(f"Required site stylesheet is missing: {required}")

    # Ensure no old-base references remain in any scanned website text file.
    remaining: list[str] = []
    for path in tracked_paths():
        if not in_site_scope(path):
            continue
        try:
            content = path.read_text(encoding="utf-8")
        except (UnicodeDecodeError, OSError):
            continue
        if OLD_PATH in content or OLD_ABSOLUTE in content:
            remaining.append(path.as_posix())
    if remaining:
        raise RuntimeError("Old base path remains in: " + ", ".join(remaining))

    print(
        f"RESULT changed_files={len(changed_files)} "
        f"base_path_replacements={replacements}"
    )
    for name in changed_files:
        print(f"UPDATED {name}")


if __name__ == "__main__":
    main()
