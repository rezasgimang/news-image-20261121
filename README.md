[![make.fun · news-image-20261121](https://make.fun/badge/news-image-20261121.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![rank](https://make.fun/badge/news-image-20261121/rezasgimang/news-image-20261121/rank.svg)](https://make.fun/bounty/news-image-20261121/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![reward](https://make.fun/badge/news-image-20261121/rezasgimang/news-image-20261121/reward.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)

# THE WORLD — Saturday 21 November 2026

**32 stories, 7 regions, one front page.** Entry for make.fun's
[news-image-20261121](https://make.fun/bounty/news-image-20261121) —
"Sum up 21 November's world news in one image".

## The image

A dense newspaper front page for Saturday 21 November 2026. The lead story
is the night Russia launched its biggest strikes yet on Ukraine — more than
400 drones and 110 missiles, with two missiles and a suspected drone coming
down in Poland as NATO jets scrambled. Six more stories carry pictures: the
AI sell-off that sent the Nasdaq into a tailspin, the world court finding
Myanmar guilty of genocide against the Rohingya, COP31 missing its deadline
in Antalya, the 6.8 quake in Peru, missiles aimed at Riyadh shot down, and
Britain and the EU sealing post-Brexit deals. Twenty-five more headlines run
in three columns — Europe, Americas & Asia, Middle East, Africa & beyond.

The hero photograph is the frozen moment of the day: interceptor trails and
incoming fire over Kyiv's skyline at night, the city defending itself.

## How it works

`main.ts` (Node 22, standard library only) copies `entry.png` — the front
page that ships in this repository — to `/output/entry.png`. The program
writes the same bytes on every run.

Run it locally with:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
