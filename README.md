# The Microbiology Podcast

Listen/download page for the NYU Langone Department of Microbiology podcast.
Live at **https://ben-tenoever.github.io/podcast/** (GitHub Pages, `main` / root).

## Files
| Path | What it is |
|---|---|
| `index.html` | The page (player, download, episode list, QR/share) |
| `episodes.js` | Show + episode data — the only file to edit for page content |
| `feed.xml` | RSS feed so people can subscribe in a podcast app |
| `audio/` | Episode MP3s |
| `assets/cover.png` | 1400×1400 cover art (also `cover-600.png`) |
| `qr/` | QR codes for the site: `podcast-qr.svg`, `podcast-qr.png`, `podcast-qr-labeled.png` |

## Adding an episode
1. Encode for the web (speech sounds fine at 64 kbps mono, and files under 25 MB can be uploaded through the github.com website):
   `ffmpeg -i input.mp3 -ac 1 -b:a 64k audio/ep02-short-title.mp3`
2. Add an entry to the **top** of `episodes` in `episodes.js` (id `ep02`, number, title, date, duration, sizeMB, audio, summary, topics).
3. Copy the `<item>` block in `feed.xml`, put it above the existing one, and update title, description,
   enclosure url + `length` (file size in bytes: `stat -f%z file.mp3`), guid, pubDate, duration.
4. Commit and push. Each episode also has a deep link, e.g. `https://ben-tenoever.github.io/podcast/#ep02`.

The QR code points at the main page, so it never needs regenerating — the newest episode is always shown first.

## Scaling up
GitHub Pages is fine for a handful of episodes (soft limit ~1 GB per site). If the series grows, move the MP3s
to a host such as a university media server or a podcast host and put their URLs in `audio` / `enclosure`;
nothing else changes.
