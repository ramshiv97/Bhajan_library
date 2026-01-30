const listEl = document.getElementById("list");
const searchEl = document.getElementById("search");

let allBhajans = [];

// Load configuration from config.json
async function loadConfig() {
  try {
    const response = await fetch('config.json');
    const config = await response.json();
    
    // Flatten all PDFs and their sections into a single list
    allBhajans = [];
    for (const pdf of config.pdfs) {
      for (const section of pdf.sections) {
        allBhajans.push({
          title: section.title,
          pages: section.pages,
          file: pdf.file,
          pdfName: pdf.name
        });
      }
    }
    
    render(allBhajans);
  } catch (error) {
    console.error('Error loading config:', error);
    listEl.innerHTML = '<li style="color: red; padding: 20px;">Error loading configuration file</li>';
  }
}

function render(items) {
  listEl.innerHTML = "";
  for (const b of items) {
    const li = document.createElement("li");
    li.className = "item";

    const a = document.createElement("a");
    
    // Build URL to viewer with parameters
    a.href = `viewer.html?file=${encodeURIComponent(b.file)}&pages=${encodeURIComponent(b.pages)}&title=${encodeURIComponent(b.title)}`;
    a.rel = "noopener";

    const title = document.createElement("div");
    title.className = "title";
    title.textContent = b.title;

    const meta = document.createElement("div");
    meta.className = "meta";
    meta.textContent = `Pages ${b.pages}`;

    a.appendChild(title);
    a.appendChild(meta);
    li.appendChild(a);
    listEl.appendChild(li);
  }
}

searchEl.addEventListener("input", () => {
  const q = searchEl.value.trim().toLowerCase();
  const filtered = allBhajans.filter(x => x.title.toLowerCase().includes(q));
  render(filtered);
});

// Load config when page loads
loadConfig();
