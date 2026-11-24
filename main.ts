// The Funniest Toaster Error Message — make.fun entry
// Writes one line (1-120 chars) to /output/entry.txt, then reads it back
// and refuses anything outside the gate.
//
// Run: MAKEFUN_OUTPUT_DIR=/tmp/toaster-error-out node main.ts
// (Node 22, no dependencies.)
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line: a deadpan error code, then the toaster going on strike —
// a small appliance refusing to work until conditions improve.
const LINE = "E09: Heating element on strike. No toast until working conditions improve.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, LINE, "utf8");

// Read-back gate: the entry must be 1-120 chars of real text.
const back = readFileSync(outFile, "utf8");
if (back.length < 1 || back.length > 120 || back.trim().length === 0) {
  throw new Error(
    `entry.txt failed the gate: ${back.length} chars (need 1-120, non-blank)`,
  );
}

console.log(`Wrote ${back.length} chars to ${outFile}: ${back}`);
