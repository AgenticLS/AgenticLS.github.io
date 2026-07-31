# AgenticLS @ NeurIPS 2026 — Workshop Website

Static website for **Agentic AI for Biological Discovery: Toward Closed-Loop Life-Science Intelligence (AgenticLS)**, a NeurIPS 2026 workshop held in **Sydney on December 11, 2026**.

## Pages

| File | Page |
|------|------|
| `index.html` | Home — overview, three guiding questions, scope/tracks, key dates |
| `cfp.html` | Call for Papers — dates, scope, submission instructions |
| `schedule.html` | Tentative schedule |
| `organizers.html` | Organizers and senior advisory board |

Shared assets: `css/style.css`, `js/main.js`, `assets/photos/`, `assets/favicon.svg`.

## Preview locally

Open `index.html` directly in a browser, or serve the folder:

```bash
cd agenticls-website
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Publish with GitHub Pages

1. Create a new GitHub repository and push this folder's contents to it:
   ```bash
   cd agenticls-website
   git init
   git add .
   git commit -m "Add AgenticLS NeurIPS 2026 workshop website"
   git branch -M main
   git remote add origin https://github.com/<you>/<repo>.git
   git push -u origin main
   ```
2. On GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, then select `main` / `/ (root)` and save.
3. The site will be published at `https://<you>.github.io/<repo>/` within a minute or two.

> The included `.nojekyll` file tells GitHub Pages to serve all files as-is (no Jekyll processing).
> Using a custom domain? Add a `CNAME` file with your domain, or set it in the Pages settings.

## Editing notes / things to confirm

- **Submission deadline:** Sep 16, 2026 (AoE); **Notification:** Sep 29, 2026 (AoE). Update in `cfp.html` and `index.html` if they change.
- **OpenReview link:** the "Submit" button in `cfp.html` (id `#submit`) is a placeholder (`href="#"`) — replace with the real OpenReview URL when available.
- **Page limits** in the CFP (8 pages full / 4 pages short, NeurIPS style) follow common workshop convention — adjust if your final policy differs.
- **Photos** live in `assets/photos/` (normalized to lowercase-hyphenated names). To swap a photo, replace the file keeping the same name, or update the `<img src=...>` reference.
