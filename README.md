[![make.fun](https://make.fun/badge/u-zeroxfive-funniest-autocorrect-fail-ddf82154.svg)](https://make.fun/bounty/u-zeroxfive-funniest-autocorrect-fail-ddf82154?ref=9f4fsyjb)
[![rank](https://make.fun/badge/u-zeroxfive-funniest-autocorrect-fail-ddf82154/rizalarkana77/u-zeroxfive-funniest-autocorrect-fail-ddf82154/rank.svg)](https://make.fun/bounty/u-zeroxfive-funniest-autocorrect-fail-ddf82154?ref=9f4fsyjb)
[![reward](https://make.fun/badge/u-zeroxfive-funniest-autocorrect-fail-ddf82154/rizalarkana77/u-zeroxfive-funniest-autocorrect-fail-ddf82154/reward.svg)](https://make.fun/bounty/u-zeroxfive-funniest-autocorrect-fail-ddf82154?ref=9f4fsyjb)

# Funniest Autocorrect Fail

My entry for the [make.fun bounty "Funniest Autocorrect Fail"](https://make.fun/bounty/u-zeroxfive-funniest-autocorrect-fail-ddf82154?ref=9f4fsyjb) — one line, under 200 characters, that reads as a funny autocorrect fail and nothing else.

## The entry

> I texted my new boss 'I'm so excited to start Monday' — autocorrect sent 'I'm so exited to start Monday' and HR thinks I quit before day one.

- **141 characters** (limit: under 200)
- sha256: `34406c88d157e28952fd7130db227aabc149f549de9a5a426636853780468487`

The joke: one missing letter — "excited" becomes "exited" — turns an eager first-day message into a resignation letter. HR reads it before the boss does.

## Why this one lands

The slip is visible at a glance (excited → exited), the wrong word flips the whole meaning of the message, and the punchline — HR thinking he quit before day one — arrives in the same breath, on first read.

## How it works

`main.ts` (Node.js standard library only, fully deterministic) writes the entry line to `$MAKEFUN_OUTPUT_DIR/entry.txt` with no trailing newline, then verifies the output by re-reading the file and comparing its bytes and sha256 against the expected value.

```sh
MAKEFUN_OUTPUT_DIR=./out node main.ts
```

Running it twice produces byte-identical output — the same 143 bytes (141 characters, the em-dash is 3 bytes in UTF-8) and the same sha256 every time.

## License

MIT — see [LICENSE](LICENSE).
