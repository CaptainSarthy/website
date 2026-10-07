const escapeHTML = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

const formatDate = (d) =>
  new Date(d + "T00:00:00").toLocaleDateString("en-GB", { month: "short", year: "numeric" });

document.getElementById("posts").innerHTML = POSTS
  .slice()
  .sort((a, b) => b.date.localeCompare(a.date))
  .map((p) => {
    const title = p.link
      ? `<a href="${escapeHTML(p.link)}" target="_blank" rel="noopener">${escapeHTML(p.title)}</a>`
      : escapeHTML(p.title);
    const text = p.text ? `<p>${escapeHTML(p.text)}</p>` : "";
    return `<li class="post">
      <time datetime="${escapeHTML(p.date)}">${formatDate(p.date)}</time>
      <div>${title}${text}</div>
    </li>`;
  })
  .join("");

document.getElementById("year").textContent = new Date().getFullYear();
