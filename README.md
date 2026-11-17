# Natasha Najib | Portfolio

Static portfolio site (HTML, CSS, JavaScript). No build step.

## Deploy on GitHub Pages (free)

1. On GitHub, create a **public** repository named exactly `natashanajib.github.io`.
2. Upload everything in this folder to the repo root (`index.html` must sit at the top level).
3. Go to **Settings → Pages**, set **Source** to "Deploy from a branch", choose `main` and `/ (root)`, then Save.
4. Wait a minute or two. The site will be live at `https://natashanajib.github.io`.

Using git instead:

```bash
git init
git add .
git commit -m "Add portfolio"
git branch -M main
git remote add origin https://github.com/natashanajib/natashanajib.github.io.git
git push -u origin main
```

## Edit later

- **Project links:** in `index.html`, find the commented `<div class="links">` line inside each project card, fill in the URL and remove the `<!--` and `-->` markers.
- **Colours and fonts:** change the tokens at the top of `assets/css/style.css`.

## Preview locally

Open `index.html` in a browser, or run `python3 -m http.server` in this folder and visit `http://localhost:8000`.
