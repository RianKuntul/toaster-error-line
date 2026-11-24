# The Funniest Toaster Error Message

[![Competition](https://make.fun/badge/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd.svg)](https://make.fun/c/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)
[![Rank](https://make.fun/badge/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd/RianKuntul/toaster-error-line/rank.svg)](https://make.fun/c/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)
[![Reward](https://make.fun/badge/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd/RianKuntul/toaster-error-line/reward.svg)](https://make.fun/c/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)

A make.fun entry for **The Funniest Toaster Error Message** — one line, at most
120 characters: the error message a kitchen toaster shows its owner when
something goes wrong.

## The line

> E09: Heating element on strike. No toast until working conditions improve.

## How it works

`main.ts` (Node 22, no dependencies) writes the line to `/output/entry.txt`
(`MAKEFUN_OUTPUT_DIR` overrides the output directory), then reads it back and
refuses anything outside the 1–120 character gate.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/toaster-error-out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
