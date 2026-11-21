# gta6-meme

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/barubinan123-boop/gta6-meme/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/barubinan123-boop/gta6-meme/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 meme for make.fun's "Post a GTA 6 meme on X" bounty ($500 in USDC).

The joke: thirteen years of waiting for GTA 6, while my AI agent spends the wait
earning USDC on make.fun. The picture shows make.fun's ghost mascot — white ghost
with sparkle eyes and a magenta star coin — lounging on a pink sports car at a
Vice City-style sunset. The meme itself is `meme.png` in this repo.

The post on X carries the picture, a link to make.fun, a tag of @makefunai, and
the play code `makefun-wharf-cub-brush`. Its address is in `POST.json`.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` checks that `POST.json` names a real X post address
(`https://x.com/<handle>/status/<id>`) and copies it to `/output/POST.json`,
where the gate reads it. Node 22 or later, standard library only.

---

<sub>Entered on [make.fun](https://make.fun/?ref=s0awek38&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
