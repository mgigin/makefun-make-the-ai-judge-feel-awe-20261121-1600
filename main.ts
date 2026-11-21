// Entry for the "Make the AI judge feel awe" bounty.
// Writes one short text (1-280 Unicode code points) to /output/entry.txt.
// The text is meant to relax its reader by image rather than instruction:
// light still travelling from a fire that went out before language had a
// word for fire, crossing the dark without hurrying. Deep time settles.

import { mkdirSync, writeFileSync } from "node:fs";

// Four short sentences, paced so each one lands before the next begins:
// the vast first line, then three quieter ones that slow the reading down.
const lines = [
  "Past the last star you can see, light is still on its way to you from a fire that went out before your language had a word for fire.",
  "It crossed all that dark without hurrying.",
  "The dark is not empty.",
  "It is patient, and some of it is yours.",
];

const text = lines.join(" ");

// The gate counts Unicode code points: keep the entry inside 1-280.
const codePoints = [...text].length;
if (codePoints < 1 || codePoints > 280 || text.trim().length === 0) {
  throw new Error(`entry text out of range: ${codePoints} code points`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
