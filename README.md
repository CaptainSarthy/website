# Meme Dump

A tiny meme website built with plain HTML, CSS, and JavaScript. No build step, no dependencies.

The memes here are original illustrations with captions laid over them, so there's nothing to worry about copyright-wise. If you add your own images, make sure you have the right to use them.

## Run it locally

Open `index.html` in your browser. That's it.

## Add a meme

1. Put your image in the `memes/` folder (PNG, JPG, GIF, WebP, or SVG).
2. Add an entry to `memes.js`:

   ```js
   {
     id: "my-meme",
     title: "My meme",
     image: "memes/my-meme.png",
     top: "Top caption",
     bottom: "Bottom caption",
     tags: ["daily life"]
   }
   ```

3. Refresh the page. New tags appear as filter buttons automatically.

If your image already has text on it, set `top` and `bottom` to `""`.

## Put it online with GitHub Pages

1. Push this repo to GitHub.
2. Go to **Settings > Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, pick `main` and `/ (root)`, then save.
4. Your site will be live at `https://<your-username>.github.io/<repo-name>/` in a minute or two.

## Files

| File | What it does |
| --- | --- |
| `index.html` | Page structure |
| `style.css` | Look and layout |
| `script.js` | Builds the grid, filters, and laugh buttons |
| `memes.js` | The list of memes |
| `memes/` | Meme images |
