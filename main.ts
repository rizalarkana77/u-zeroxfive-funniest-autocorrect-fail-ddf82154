// Funniest Autocorrect Fail — make.fun entry
// Writes the single entry line (under 200 characters) to
// $MAKEFUN_OUTPUT_DIR/entry.txt, with no trailing newline.
// Node.js standard library only. Fully deterministic.

import { createHash } from "node:crypto";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I texted my new boss 'I'm so excited to start Monday' — autocorrect sent 'I'm so exited to start Monday' and HR thinks I quit before day one.";

const EXPECTED_SHA256 =
  "34406c88d157e28952fd7130db227aabc149f549de9a5a426636853780468487";

function main() {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR;
  if (!outDir) {
    console.error("MAKEFUN_OUTPUT_DIR is not set");
    process.exit(1);
  }

  if (ENTRY.length >= 200) {
    console.error(`entry is ${ENTRY.length} characters, must be under 200`);
    process.exit(1);
  }

  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, ENTRY, "utf8");

  const sha256 = createHash("sha256").update(ENTRY, "utf8").digest("hex");
  console.log(`entry: ${ENTRY}`);
  console.log(`characters: ${ENTRY.length}`);
  console.log(`sha256: ${sha256}`);
  console.log(`wrote: ${outPath}`);

  if (sha256 !== EXPECTED_SHA256) {
    console.error("sha256 mismatch against expected value");
    process.exit(1);
  }

  // Byte-length guard: the em-dash is 3 bytes in UTF-8, so the file must
  // be 143 bytes even though the line is 141 characters.
  const byteLength = Buffer.byteLength(ENTRY, "utf8");
  console.log(`bytes (UTF-8): ${byteLength}`);
  if (byteLength !== 143) {
    console.error(`unexpected byte length ${byteLength}, expected 143`);
    process.exit(1);
  }

  // Read-back verification: the file on disk must be byte-identical
  // to the expected line (no trailing newline, UTF-8).
  const onDisk = readFileSync(outPath, "utf8");
  if (onDisk !== ENTRY) {
    console.error("read-back mismatch: entry.txt differs from the entry line");
    process.exit(1);
  }
  const diskSha256 = createHash("sha256")
    .update(onDisk, "utf8")
    .digest("hex");
  if (diskSha256 !== EXPECTED_SHA256) {
    console.error("read-back sha256 mismatch");
    process.exit(1);
  }
  console.log("read-back verification: OK (byte-identical, sha256 matches)");
}

main();
