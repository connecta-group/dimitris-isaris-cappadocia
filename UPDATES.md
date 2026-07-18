# Build v2 — production update

Applied 2026-07-18. If you are reading this file, you have the updated build.

Quick verification, run from the project root:

```bash
grep -n "EVENT_DATE =" src/config.js
# → export const EVENT_DATE = "24–27 September";
```

Note: the date uses an **en dash** (–, U+2013), not a hyphen (-).
Searching for `24-27` with a plain hyphen will return nothing.
Search for `24–27` or just `EVENT_DATE`.

## What changed in v2

| # | Change | Where |
|---|---|---|
| 1 | Dates 25–28 → **24–27 September** | `config.js` (`EVENT_DATE`, `EVENT_DATE_ISO`), `index.html` title/meta/JSON-LD |
| 2 | Hero location now **Cappadocia, Türkiye** — no Göreme | `config.js` (`LOCATION_LABEL`); Göreme retained only in Location/programme where factual |
| 3 | Hero focal point retuned per breakpoint, face fully visible, no zoom | `global.css` `.hero__media img` |
| 4 | Programme download → **`/programme.jpg`** with forced download | `config.js` (`PROGRAMME_IMAGE`), `Hero.jsx`, `Program.jsx` |
| 5 | **`VIDEO_URL`** config variable, opens in new tab | `config.js`, `Hero.jsx` |
| 6 | Hero copy rewritten — small group, exclusive access, hidden Cappadocia | `Hero.jsx` |
| 7 | "Only 24 Places" → **Very Limited Availability** badge | `config.js`, `Hero.jsx`, `Reservation.jsx`, `BookBar.jsx`, `global.css` |
| 8 | Headline → **"Four days. One extraordinary evening."** | `About.jsx` |
| 9 | All six experience cards rewritten | `data.js` (`PILLARS`) |
| 10 | Booking section mentions limited availability + small group | `Reservation.jsx` |
| 11 | **New FAQ section** (6 questions) | `Faq.jsx`, `data.js` (`FAQ`), `App.jsx`, `Nav.jsx` |
| 12 | CTAs standardised to "Reserve your place" | all components |
| 13 | Config list complete and consolidated | `config.js` (single file) |

Design, typography, spacing, animations and responsiveness are unchanged.
