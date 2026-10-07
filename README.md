# Personal site

A minimal personal website: a short bio, a list of things I've made, and contact details. Plain HTML, CSS and JavaScript with no build step.

## Files

| File | What it's for |
| --- | --- |
| `index.html` | Page content: name, About text, contact links |
| `posts.js` | The list of work shown on the page |
| `style.css` | Styling |
| `script.js` | Renders the posts list |

## Editing

- **Name, bio, contact:** edit the sections marked `EDIT` in `index.html`.
- **Add a post:** add an entry to the list in `posts.js`:

  ```js
  {
    date: "2026-10-07",
    title: "Project name",
    text: "One line about it.",
    link: "https://example.com"
  },
  ```

## Viewing locally

Open `index.html` in your browser. No server or install needed.

## Publishing with GitHub Pages

1. Push these files to the root of a GitHub repository.
2. In the repository, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to *Deploy from a branch*, pick the `main` branch and the `/ (root)` folder, then save.
4. After a minute the site is live at `https://<your-username>.github.io/<repo-name>/`.

Tip: name the repository `<your-username>.github.io` and the site will be live at `https://<your-username>.github.io/` instead.
