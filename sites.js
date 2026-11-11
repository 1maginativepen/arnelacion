// ---------- Data (edit these to update the page) ----------
// category: "Accident law" | "Motorcycle" | "Spanish-language" | "Other"
const sites = [
  { domain: "bicycleaccidentattorneys.net", url: "https://www.bicycleaccidentattorneys.net", category: "Accident law", updated: "2024-12-13", note: "Converted to a blog site" },
  { domain: "californiabraininjuryattorneys.net", url: "https://www.californiabraininjuryattorneys.net", category: "Accident law", updated: "2024-12-13" },
  { domain: "celebrityinjuries.com", url: "https://www.celebrityinjuries.com", category: "Other", updated: "2024-12-26", note: "Optimized site" },
  { domain: "constructioninjurylawyer.net", url: "https://www.constructioninjurylawyer.net", category: "Accident law", updated: "2024-12-13" },
  { domain: "davidcarondesign.com", url: "https://www.davidcarondesign.com", category: "Other", updated: "2024-12-13", note: "Operation Backlink Revival" },
  { domain: "headoncaraccidents.com", url: "https://www.headoncaraccidents.com", category: "Accident law", updated: "2024-12-13" },
  { domain: "injuries.wiki", url: "https://www.injuries.wiki", category: "Accident law", updated: "2024-12-13" },
  { domain: "motorcardriver.com", url: "https://www.motorcardriver.com", category: "Accident law", updated: "2024-12-13" },
  { domain: "motorcycleaccidentstatistics.com", url: "https://www.motorcycleaccidentstatistics.com", category: "Motorcycle", updated: "2024-12-13" },
  { domain: "motorcycleaccidentstoday.com", url: "https://www.motorcycleaccidentstoday.com", category: "Motorcycle", updated: "2024-12-13" },
  { domain: "newdeaths.com", url: "https://newdeaths.com", category: "Other", updated: "2024-12-18", note: "Operation Backlink Revival" },
  { domain: "orangecountymotorcycleaccidentattorney.com", url: "https://www.orangecountymotorcycleaccidentattorney.com", category: "Motorcycle", updated: "2024-12-13" },
  { domain: "riversidemotorcycleaccidentlawyer.com", url: "https://www.riversidemotorcycleaccidentlawyer.com", category: "Motorcycle", updated: "2025-02-01" },
  { domain: "sanbernardinoautoaccidentlawyer.com", url: "https://www.sanbernardinoautoaccidentlawyer.com", category: "Accident law", updated: "2024-12-13" },
  { domain: "sanbernardinomotorcycleaccidentlawyer.com", url: "https://www.sanbernardinomotorcycleaccidentlawyer.com", category: "Motorcycle", updated: "2024-12-13" },
  { domain: "sanfranciscomotorcycleaccidentlawyer.net", url: "https://www.sanfranciscomotorcycleaccidentlawyer.net", category: "Motorcycle", updated: "2025-02-01" },
  { domain: "scooteraccidentlawfirm.com", url: "https://www.scooteraccidentlawfirm.com", category: "Accident law", updated: "2024-12-13" },
  { domain: "uberaccidentlawyers.net", url: "https://www.uberaccidentlawyers.net", category: "Accident law", updated: "2024-12-13" },
  { domain: "cliffordcycles.com", url: "https://www.cliffordcycles.com/", category: "Other", updated: "2024-12-26" },
  { domain: "the-lemon-law.com", url: "https://www.the-lemon-law.com/", category: "Other", updated: "2024-12-13" },
  { domain: "abogadodeaccidentedecamion.com", url: "https://www.abogadodeaccidentedecamion.com/", category: "Spanish-language", updated: "2024-11-26" },
  { domain: "abogadodelesion.net", url: "https://www.abogadodelesion.net/", category: "Spanish-language", updated: "2024-11-26" },
  { domain: "lemonpro.net", url: "https://www.lemonpro.net", category: "Other", updated: "2024-11-28" },
  { domain: "abogadoparaaccidentes.net", url: "https://www.abogadoparaaccidentes.net/", category: "Spanish-language", updated: "2024-11-30" },
  { domain: "ibikeblog.net", url: "https://www.ibikeblog.net/", category: "Other", updated: "2024-12-05", note: "Operation Backlink Revival · Site not found" },
  { domain: "pedestrianaccidentlawyers.net", url: "https://www.pedestrianaccidentlawyers.net/", category: "Accident law", updated: "2025-02-01" },
  { domain: "sanfranciscoaccidentlawyer.net", url: "http://sanfranciscoaccidentlawyer.net", category: "Accident law", updated: "2025-02-01" },
  { domain: "abogadoparalesiones.net", url: "https://abogadoparalesiones.net", category: "Spanish-language", updated: "2025-02-01" },
  { domain: "accidentadvocator.com", url: "https://accidentadvocator.com", category: "Accident law", updated: "2025-02-01" },
  { domain: "undercover.ink", url: "https://www.undercover.ink/", category: "Other", updated: "2025-02-01" }
];

const CATEGORIES = ["All", "Accident law", "Motorcycle", "Spanish-language", "Other"];

// ---------- Helpers ----------
const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const fmtDate = (iso) => new Date(iso + "T00:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

function play(el, name, { delay = 0, speed = "" } = {}) {
  const cls = ["animate__animated", `animate__${name}`];
  if (speed) cls.push(`animate__${speed}`);
  el.classList.remove(...[...el.classList].filter((c) => c.startsWith("animate__")));
  void el.offsetWidth;
  el.style.animationDelay = delay ? `${delay}ms` : "";
  el.classList.add(...cls);
  el.addEventListener("animationend", () => {
    el.classList.remove(...cls);
    el.style.animationDelay = "";
  }, { once: true });
}

// ---------- State + render ----------
let category = "All";
let query = "";

const list = document.getElementById("sites-list");
const countEl = document.getElementById("site-count");
const emptyEl = document.getElementById("no-results");
const filtersEl = document.getElementById("site-filters");

document.getElementById("total-count").textContent = sites.length;

filtersEl.innerHTML = CATEGORIES.map((c) => {
  const n = c === "All" ? sites.length : sites.filter((s) => s.category === c).length;
  return `<button type="button" class="chip${c === category ? " active" : ""}" data-cat="${esc(c)}">${esc(c)} <span>${n}</span></button>`;
}).join("");

function render(animate = false) {
  const q = query.trim().toLowerCase();
  const rows = sites.filter((s) =>
    (category === "All" || s.category === category) &&
    (!q || s.domain.toLowerCase().includes(q) || (s.note || "").toLowerCase().includes(q)));

  list.innerHTML = rows.map((s) => `
    <a class="site-row" href="${esc(s.url)}" target="_blank" rel="noopener">
      <div class="site-main">
        <h3>${esc(s.domain)}</h3>
        ${s.note ? `<p>${esc(s.note)}</p>` : ""}
      </div>
      <span class="site-cat">${esc(s.category)}</span>
      <span class="site-date">${fmtDate(s.updated)}</span>
      <span class="arrow" aria-hidden="true">↗</span>
    </a>`).join("");

  countEl.textContent = `Showing ${rows.length} of ${sites.length} sites`;
  emptyEl.hidden = rows.length > 0;
  if (animate) [...list.children].slice(0, 12).forEach((el, i) => play(el, "fadeInUp", { delay: i * 30, speed: "faster" }));
}

filtersEl.addEventListener("click", (e) => {
  const b = e.target.closest(".chip");
  if (!b) return;
  category = b.dataset.cat;
  filtersEl.querySelectorAll(".chip").forEach((c) => c.classList.toggle("active", c === b));
  render(true);
});
document.getElementById("site-search").addEventListener("input", (e) => { query = e.target.value; render(); });

render();

// ---------- Footer year ----------
document.getElementById("year").textContent = new Date().getFullYear();

// ---------- Theme (shared with the home page) ----------
const root = document.documentElement;
const saved = (() => { try { return localStorage.getItem("theme"); } catch { return null; } })();
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
root.dataset.theme = saved || (prefersDark ? "dark" : "light");

document.getElementById("theme-toggle").addEventListener("click", (e) => {
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  try { localStorage.setItem("theme", next); } catch {}
  play(e.currentTarget, "rubberBand");
});

// ---------- Nav border on scroll ----------
const nav = document.querySelector(".nav");
const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 8);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// ---------- Reveal on scroll ----------
const io = new IntersectionObserver((entries) => {
  let n = 0;
  entries.forEach((en) => {
    if (!en.isIntersecting) return;
    const el = en.target;
    el.classList.add("visible");
    play(el, el.dataset.anim || "fadeInUp", { delay: Math.min(n++, 6) * 90 });
    io.unobserve(el);
  });
}, { threshold: 0.1 });
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
