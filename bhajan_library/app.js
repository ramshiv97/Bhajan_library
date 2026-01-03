// ✅ Add your bhajans here
// title = what users see
// file  = exact PDF filename inside /pdfs
const BHAJANS = [
  { title: "Hanuman Chalisa", file: "hanuman-chalisa.pdf" },
  { title: "Vishnu Sahasranamam", file: "vishnu-sahasranamam.pdf" },
  // Add more like:
  // { title: "Shiva Tandava Stotram", file: "shiva-tandava-stotram.pdf" },
];

const listEl = document.getElementById("list");
const searchEl = document.getElementById("search");

function render(items) {
  listEl.innerHTML = "";
  for (const b of items) {
    const li = document.createElement("li");
    li.className = "item";

    const a = document.createElement("a");
    a.href = `pdfs/${encodeURIComponent(b.file)}`;
    a.target = "_blank";
    a.rel = "noopener";

    const title = document.createElement("div");
    title.className = "title";
    title.textContent = b.title;

    const meta = document.createElement("div");
    meta.className = "meta";
    meta.textContent = "Open PDF";

    a.appendChild(title);
    a.appendChild(meta);
    li.appendChild(a);
    listEl.appendChild(li);
  }
}

render(BHAJANS);

searchEl.addEventListener("input", () => {
  const q = searchEl.value.trim().toLowerCase();
  const filtered = BHAJANS.filter(x => x.title.toLowerCase().includes(q));
  render(filtered);
});
