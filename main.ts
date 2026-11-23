import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Real-Life Patch Notes: The Comedy Changelog
// One-line changelog entry for a bug in real life / human biology.
const LINE =
  "v2.4.1: Fixed a bug where the bladder waited until you were horizontal, lights off, and nearly asleep before raising a P0 ticket.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
