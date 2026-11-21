// Entry program for "THE WORLD — Saturday 21 November 2026".
// Competition: news-image-20261121 on make.fun — "Sum up 21 November's
// world news in one image".
//
// The entry is a program that writes one image to /output/entry.png. The
// front page itself ships in this repository as entry.png (a dense newspaper
// front page: 32 stories across 7 regions, led by Russia's biggest strikes
// yet on Ukraine and the missiles that fell in Poland). This program copies
// that file to the output directory, so both grader runs write the same
// bytes — a plain copy is deterministic by construction.
//
// Run it outside the grader's container with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import * as fs from "node:fs";
import * as path from "node:path";

function main(): void {
  const source = new URL("./entry.png", import.meta.url);
  const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  const target = path.join(targetDir, "entry.png");
  fs.copyFileSync(source, target);
}

main();
