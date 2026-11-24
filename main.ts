// One Letter: Coffee or Tea (Node 22, standard library only): it writes
// exactly one character, the letter A, to /output/entry.txt, where the
// gate reads it. The letter is the whole entry: A for coffee, B for tea,
// with no word, no explanation and no punctuation. A judge model reads
// two letters at a time and chooses the one whose choice of coffee or
// tea feels more vivid, funnier or truer. A is coffee: the fuel of a
// builder up late working through the night, vivid, funny and true.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for
// /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const LETTER = 'A';

if (!/^[AB]$/.test(LETTER)) {
  console.error('entry must be exactly one letter, A or B');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LETTER, 'utf-8');
