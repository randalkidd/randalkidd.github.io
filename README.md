# randalkidd.github.io — redirect only

The Zoning Hub moved from `https://randalkidd.github.io/MC/` to `https://www.zoning-hub.com`.
This user site sends every old link there:

| Old address | New address |
|---|---|
| `/MC/` (or `/MC/index.html`) | `https://www.zoning-hub.com/` |
| `/MC/<page>?<query>#<hash>` (e.g. `/MC/county.html?apn=…`) | `https://www.zoning-hub.com/hub/<page>?<query>#<hash>` |
| Anything else on randalkidd.github.io | `https://www.zoning-hub.com/` |

`MC/index.html` handles the folder itself; `404.html` (GitHub Pages serves it for every missing path) handles deep links.
Both run `redirect.js`, with a 3-second meta refresh as a fallback when scripts are off.

Source of truth: `tools/github-pages-redirect/` in `randalkidd/zoning-hub`. Contains no site code or data.
