# Echtit

Echtit's independent cybersecurity community website, using the same Space Grotesk, DM Sans, charcoal, and sage visual theme as Thu Rein Oo's portfolio.

## Sections

- About: Echtit's focus on red teaming, digital forensics, OSINT, and shared learning.
- Community updates: three selected Facebook posts with local artwork, English/Burmese summaries, and links to the originals.
- Learning library: Echtit Medium walkthroughs, alongside the existing notes and video links.
- Learning announcements: the September 22, 2025 steganography session is labeled as a past announcement; the separate Steganography & CTF course remains coming soon, with no public price.
- Services: Personal Device Hub private beta with a `3000 THB` one-time payment.
- Contact: Facebook, public LinkedIn, the Echtit GitHub organization, email, and Telegram inquiries through `@zalon123`.

## Content sources

Reviewed on November 3, 2026:

- [Echtit on GitHub](https://github.com/EchTitmm): organization identity, Myanmar location, and public contact email. Its public repository is empty, so no project capabilities or repository statistics are claimed.
- [Ech Tit on LinkedIn](https://www.linkedin.com/company/ech-tit/): organization description and the dated steganography session announcement. Public links use the company page rather than the admin dashboard.
- [QuimaRAT Facebook post](https://www.facebook.com/share/p/18RiFPRKTP/).
- [Security research ethics Facebook post](https://www.facebook.com/share/p/1DadW197BP/).
- [Cybersecurity Telegram bot Facebook post](https://www.facebook.com/share/p/19yNqapbUS/).
- [Ech Tit on Medium](https://medium.com/@echtit): BTLO Piggy, The Sticker Shop, and OSINT geolocation articles, each linked directly from its card.

Facebook summaries and artwork are based on the public previews of the three supplied post links. They are selected posts, not a live feed. The artwork is stored in `img/facebook-*.jpg` so the site does not rely on Facebook embeds or expiring image URLs. Update the cards in `index.html` and both language entries in `scripts.js` when changing the selection. Fonts are self-hosted in `assets/fonts` with their license files.

## Local preview and deployment

The public frontend is buildless HTML, CSS, and JavaScript:

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Open `http://127.0.0.1:4173`. The frontend uses relative asset paths and supports a project subdirectory. Language selection works with or without browser storage. The local static server previews the payment dialog; it does not run the payment API.

The public website is [thurein2003.github.io/Echtit](https://thurein2003.github.io/Echtit/), published from the `main` branch root of [thurein2003/Echtit](https://github.com/thurein2003/Echtit). The root `.nojekyll` file serves the frontend directly, with no build step.

The public files are `index.html`, `styles.css`, `scripts.js`, `.nojekyll`, `assets/`, `img/`, and `downloads/`. Update these files and push to `main` to publish a new version. Do not upload environment files or hosting credentials.

GitHub Pages cannot run the payment API. On the GitHub Pages site, payment slip uploads direct customers to [echtit.vercel.app](https://echtit.vercel.app/#services). Payment processing and installation delivery are handled separately by the Vercel deployment.
