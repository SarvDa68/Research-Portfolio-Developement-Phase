# Sarvesh Datar Profile Website

Static personal profile website designed for GitHub Pages.

## Edit Your Profile

Most content lives in the `content` block inside `profile-data.js`.

Write normally:

```text
# Process Engineering

## Process Simulation Study
Date: 2026
Kind: Simulation
Link: Report | assets/report.pdf

Write paragraphs normally.

Leave a blank line between paragraphs.

- Lines starting with dash become bullets
- Links written as https://example.com become clickable
```

You do not need to edit `index.html`, `script.js`, or `styles.css` to add new work.

To update the CV, replace:

```text
assets/sarvesh-datar-cv.pdf
```

To add a headshot, place an image such as `assets/profile.jpg`, then set:

```js
portrait: "assets/profile.jpg"
```

## Preview Locally

Open `index.html` in a browser, or run a tiny local server:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish On GitHub Pages

1. Create a GitHub repository named `your-username.github.io`.
2. Upload these files to the repository root.
3. In GitHub, open Settings, then Pages.
4. Set the source to the main branch and root folder.

Your site will be available at:

```text
https://your-username.github.io
```
