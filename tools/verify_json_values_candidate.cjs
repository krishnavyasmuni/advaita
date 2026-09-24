const { execFileSync } = require("node:child_process");
const fs = require("node:fs");

function sameValue(a, b) {
  if (typeof a !== typeof b) return false;
  if (Object.is(a, b)) return true;
  if (Array.isArray(a) || Array.isArray(b)) {
    return Array.isArray(a) && Array.isArray(b) &&
      a.length === b.length && a.every((value, i) => sameValue(value, b[i]));
  }
  if (a && b && typeof a === "object") {
    const ak = Object.keys(a);
    const bk = Object.keys(b);
    return ak.length === bk.length && ak.every((key, i) =>
      key === bk[i] && sameValue(a[key], b[key])
    );
  }
  return false;
}

const names = execFileSync(
  "git",
  ["diff", "--name-only", "origin/main...HEAD", "--", "assets/data"],
  { encoding: "utf8" }
).trim().split("\n").filter(Boolean);

if (names.length === 0) {
  throw new Error("No changed site JSON files found.");
}

for (const name of names) {
  const before = execFileSync("git", ["show", `origin/main:${name}`], { encoding: "utf8" });
  const after = fs.readFileSync(name, "utf8");
  const oldValue = JSON.parse(before);
  const newValue = JSON.parse(after);
  if (!sameValue(oldValue, newValue)) {
    throw new Error(`JavaScript parsed values differ: ${name}`);
  }
}

console.log(`RESULT javascript_json_parse_equal=${names.length} files`);
