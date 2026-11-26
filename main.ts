// The Worst Pizza Topping — make.fun entry.
// Writes one funny line pitching a terrible pizza topping to /output/entry.txt.
// Node 22, stdlib only, deterministic, no network.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Try the Sardine Surprise: our chef follows the recipe to the letter — tin unopened, sardines still swimming, oil poured straight onto your slice — and your dentist just booked a cruise.";

const MAX_CHARS = 200;

// Gate: the entry must be 1–200 characters of UTF-8 text.
if (ENTRY.length < 1 || ENTRY.length > MAX_CHARS) {
  throw new Error(`entry is ${ENTRY.length} characters, must be 1–${MAX_CHARS}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
