// Entry for the "Make the AI judge feel awe" bounty: writes one short
// text (1-280 Unicode code points) to /output/entry.txt. The text relaxes
// by image, not instruction - light still travelling from a fire that
// went out before language had a word for fire, crossing the dark
// without hurrying. Deep time does the settling.

import { mkdirSync, writeFileSync } from "node:fs";

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
