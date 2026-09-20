(function () {
  const grid = document.getElementById("grid");
  const filters = document.getElementById("filters");
  const empty = document.getElementById("empty");
  const STORAGE_KEY = "meme-dump-laughs";

  // Laughs are saved in this browser only.
  function loadLaughs() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch (e) {
      return {};
    }
  }
  function saveLaughs(data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      /* storage unavailable, ignore */
    }
  }
  const laughs = loadLaughs();

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  function buildCard(meme) {
    const li = el("li", "card");
    li.dataset.tags = meme.tags.join("|");

    const figure = el("figure", "meme");
    const img = el("img");
    img.src = meme.image;
    img.alt = [meme.title, meme.top, meme.bottom].filter(Boolean).join(" - ");
    img.loading = "lazy";
    figure.appendChild(img);
    if (meme.top) figure.appendChild(el("span", "cap cap-top", meme.top));
    if (meme.bottom) figure.appendChild(el("span", "cap cap-bottom", meme.bottom));
    li.appendChild(figure);

    const bar = el("div", "bar");
    bar.appendChild(el("h2", "", meme.title));

    const btn = el("button", "laugh");
    btn.type = "button";
    function paint() {
      const on = Boolean(laughs[meme.id]);
      btn.setAttribute("aria-pressed", String(on));
      btn.textContent = on ? "Made me laugh" : "Made me laugh?";
    }
    btn.addEventListener("click", function () {
      laughs[meme.id] = !laughs[meme.id];
      saveLaughs(laughs);
      paint();
    });
    paint();
    bar.appendChild(btn);
    li.appendChild(bar);
    return li;
  }

  const cards = MEMES.map(buildCard);
  cards.forEach(function (c) { grid.appendChild(c); });

  // Filter buttons: "All" plus every tag found in memes.js
  const tags = ["All"].concat(
    Array.from(new Set(MEMES.flatMap(function (m) { return m.tags; }))).sort()
  );

  function applyFilter(tag) {
    let shown = 0;
    cards.forEach(function (card) {
      const match = tag === "All" || card.dataset.tags.split("|").includes(tag);
      card.hidden = !match;
      if (match) shown++;
    });
    empty.hidden = shown > 0;
    Array.from(filters.children).forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.textContent === tag));
    });
  }

  tags.forEach(function (tag) {
    const b = el("button", "chip", tag);
    b.type = "button";
    b.addEventListener("click", function () { applyFilter(tag); });
    filters.appendChild(b);
  });
  applyFilter("All");
})();
