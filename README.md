# Dimitris Isaris — A Cappadocia Experience

A production-ready React + Vite landing page for an exclusive four-day travel event in Göreme, Cappadocia.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to /dist
npm run preview  # preview the production build
```

Requires Node 18 or newer.

## Change everything from one file

Open `src/config.js`. Every link, date, price and contact detail lives there:

| Variable | What it controls |
| --- | --- |
| `EVENT_NAME` | Page and social titles |
| `EVENT_DATE` | Date shown in the hero, footer and reservation panel — currently 24–27 September |
| `EVENT_DATE_ISO` | Drives the countdown timer — format `YYYY-MM-DDTHH:mm:ss` |
| `EMAIL` | All `mailto:` links |
| `PHONE` / `PHONE_RAW` | Display number and the `tel:` / WhatsApp links |
| `INSTAGRAM`, `FACEBOOK`, `YOUTUBE`, `WHATSAPP` | Social icons everywhere they appear |
| `GOOGLE_MAPS` | "Open in Google Maps" link |
| `GOOGLE_MAPS_EMBED` | The embedded map iframe |
| `BOOKING_LINK` | Every "Reserve your place" button. Defaults to the on-page form; point it at an external booking system if you prefer |
| `PROGRAMME_IMAGE` | The downloadable JPEG brochure. Replace `/public/programme.jpg` with your own |
| `PROGRAMME_FILENAME` | Filename the guest's browser saves it as |
| `VIDEO_URL` | "Watch the film" button. Paste any YouTube or Vimeo link; opens in a new tab |
| `PRICE` / `PRICE_NOTE` | Price shown in the services bar, reservation panel and mobile booking bar |
| `AVAILABILITY_LABEL` / `AVAILABILITY_NOTE` | The availability badge text. Presented as a phrase, never a count |
| `AIRPORTS`, `HOTELS` | Cards in the Location section |
| `LEGAL_LINKS` | Footer legal links |

Editorial copy — programme days, service list, gallery captions, testimonials — is in `src/data.js`.

## Swapping in your own photography

Two images ship in `/public`:

- `dimitris-hero.png` — used for the hero background, the artist portrait and one gallery tile
- `programme.jpg` — served as the downloadable brochure. Swap this file to change what guests receive; no code change needed

Gallery tiles other than the hero one render as tonal placeholders. To use real photographs, drop files into `/public` and edit `src/components/Gallery.jsx` — replace the `<span className="tile__fill">` branch of the `Frame` component with an `<img>`, and add a `src` field to each entry in `GALLERY` in `src/data.js`.

For a background video in the hero, swap the `<img>` in `src/components/Hero.jsx` for a `<video autoPlay muted loop playsInline poster="/dimitris-hero.png">`. Keep the poster so the first paint stays fast.

### Hero focal point

The hero uses `object-position` rather than a crop, set per breakpoint in `global.css`. Values are tuned so Dimitris' face is never clipped and the balloon band stays in frame at every viewport from 390px to ultrawide. If you replace the hero photograph, retune the three values under `.hero__media img`.

## The reservation form

The form posts to Netlify Forms. It works with no configuration once deployed to Netlify — submissions appear under **Forms** in the site dashboard. A hidden static copy of the form sits in `index.html` so Netlify's build-time crawler can detect it.

Locally the POST fails silently and the confirmation state still renders, so the flow can be tested end to end.

To use a different backend, change `FORM_ACTION` in `src/config.js` and adjust the `submit` handler in `src/components/Reservation.jsx`.

## Deploying

**Netlify** — connect the repo. `netlify.toml` already sets the build command (`npm run build`), the publish directory (`dist`), SPA redirects and cache headers. Or drag the `dist` folder onto the Netlify dashboard.

**Anywhere else** — run `npm run build` and serve `dist` as a static site.

Before going live, replace the `https://dimitrisisaris-cappadocia.netlify.app` URL in `index.html` (canonical, Open Graph, Twitter), `src/config.js`, `public/robots.txt` and `public/sitemap.xml` with your real domain.

## SEO

- Full title, description, canonical, Open Graph and Twitter card tags
- `MusicEvent` JSON-LD structured data with performer, location, dates and offer
- `robots.txt` and `sitemap.xml`
- Semantic landmarks, a skip link, labelled form fields, and alt text on every image

## Structure

```
├── index.html              meta, fonts, JSON-LD, Netlify form stub
├── netlify.toml            build + redirects + headers
├── vite.config.js
├── public/
│   ├── dimitris-hero.png
│   ├── program-brochure.jpg
│   ├── favicon.svg
│   ├── robots.txt
│   ├── sitemap.xml
│   └── _redirects
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── config.js           ← edit links, dates, price here
    ├── data.js             ← edit copy here
    ├── styles/global.css   design tokens + all styling
    ├── hooks/
    │   ├── useReveal.js    scroll-triggered fade-ins
    │   └── useCountdown.js countdown timer
    └── components/
        ├── Icon.jsx        inline SVG set, no icon dependency
        ├── Nav.jsx         sticky nav, scroll-spy, mobile drawer
        ├── Hero.jsx        parallax hero + countdown
        ├── About.jsx       six pillars + marquee strip
        ├── Program.jsx     expandable day-by-day accordion
        ├── Gallery.jsx     masonry grid + keyboard lightbox
        ├── Services.jsx    included services + price bar
        ├── Location.jsx    embedded map, airports, hotels
        ├── Artist.jsx      biography + portrait + socials
        ├── Testimonials.jsx
        ├── Faq.jsx         expandable questions
        ├── Reservation.jsx validated booking form
        ├── Contact.jsx
        ├── Footer.jsx      legal, newsletter, socials
        └── BookBar.jsx     sticky mobile booking bar
```

## Accessibility and motion

Keyboard focus is visible throughout. The lightbox traps Escape and arrow keys. The accordion uses proper `aria-expanded` / `aria-controls` pairs. Everything honours `prefers-reduced-motion` — parallax, marquee and reveals all stop.

## Dependencies

React and React DOM. Nothing else. Icons are hand-drawn inline SVG; type comes from Google Fonts (Fraunces, Archivo, Archivo Narrow).
