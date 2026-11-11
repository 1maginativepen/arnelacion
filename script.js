// ---------- Data (edit these to update the site) ----------
const projects = [
  {
    title: "Akra Counselling Booking Plugin",
    role: "WordPress Developer",
    desc: "Custom WordPress plugin: bookings saved to a private post type with a status lifecycle, email automation, and an admin settings panel.",
    details: "A custom booking plugin built for a Sydney-based counselling practice. Booking requests are stored as records in a private WordPress Custom Post Type, so nothing is exposed publicly and everything is manageable from the dashboard.",
    highlights: [
      "Private Custom Post Type for booking records",
      "Full status lifecycle for each booking",
      "Email automation for clients and the practice",
      "Dedicated admin settings panel"
    ],
    tags: ["WordPress", "PHP", "Elementor"],
    images: 3,
    url: "https://github.com/1maginativepen/Booking-Plugin-for-Akra-Counselling/tree/main/"
  },
  {
    title: "North America Moving Services",
    exp: "exp-canadian",
    role: "WordPress Developer",
    desc: "Moving platform connecting customers with vetted movers for local, long-distance, and cross-border Canada–USA relocations.",
    details: "A lead-generation website for a moving platform that connects customers with vetted, licensed movers. It covers local and long-distance moves, cross-border Canada–USA relocations, auto transport, freight, and storage.",
    highlights: [
      "Conversion-focused landing pages and service pages",
      "Responsive layouts built from supplied designs",
      "Custom functionality for quote and lead capture"
    ],
    tags: ["WordPress", "HTML", "CSS", "JS"],
    images: 3,
    url: "https://northamericamovingservices.com/"
  },
  {
    title: "LXS Custom Elementor Plugin",
    exp: "exp-canadian",
    role: "Plugin Developer",
    desc: "Elementor widget with API integrations, database management, and email connections for a moving company.",
    details: "A custom Elementor widget plugin for the LXS moving company group. It lets the team drop custom-designed, functional components into pages while handling data and communication behind the scenes.",
    highlights: [
      "Custom Elementor widget for bespoke designs and functions",
      "Third-party API integrations",
      "Database management with MySQL",
      "Email connections for lead handling"
    ],
    tags: ["PHP", "MySQL", "API"],
    images: 3,
    url: null
  },
  {
    title: "Mere Benefits Website",
    exp: "exp-mere",
    role: "Senior Web Content Manager",
    desc: "GoHighLevel website for an insurance agency covering Medicare, health insurance, and more.",
    details: "A GoHighLevel (GHL) website for a Florida insurance agency offering Medicare, health insurance, and related products. I converted written content into landing pages, blog posts, and news pages, and handled on-page SEO and content planning.",
    highlights: [
      "Landing pages, blog posts, and news pages in GoHighLevel",
      "On-page SEO for lead-generation pages",
      "Ongoing content operations planning"
    ],
    tags: ["GoHighLevel", "SEO"],
    images: 3,
    url: "https://www.merebenefits.com/"
  },
  {
    title: "Caravea Elementor Widgets",
    role: "WordPress Developer",
    desc: "Caravan retail website with a custom 3D model display page, interactive listings, and floorplan plugins.",
    details: "A dynamic website for a caravan retailer. It features a custom 3D model display page, interactive listings, and bespoke floorplan plugins built as Elementor widgets.",
    highlights: [
      "Custom 3D model display page",
      "Interactive caravan listings",
      "Bespoke floorplan plugins"
    ],
    tags: ["PHP", "WordPress", "JS"],
    images: 1,
    nda: true, // shows the NDA notice instead of screenshots
    logo: "images/caravea.png",
    url: "https://caraveacreative.au/"
  },
  {
    title: "DakotaQ API Integration Plugin",
    exp: "exp-dakotaq",
    role: "Website Developer",
    desc: "WordPress plugin that fetches and displays real-time health data from the US Health API.",
    details: "A custom WordPress plugin that connects to the US Health API, pulls in real-time health data, and displays it on the website in a clean, readable format.",
    highlights: [
      "Live data from the US Health API",
      "Custom PHP plugin with MySQL storage",
      "Output designed to match the site"
    ],
    tags: ["PHP", "MySQL", "WordPress"],
    images: 3,
    logo: "images/dakotaq.png",
    url: "https://www.dakotaq.com/"
  }
];

// Personal tools: things I built for myself and use every day
const tools = [
  {
    icon: "⏱",
    title: "Manual Time Tracker",
    desc: "Chrome extension to log time manually and export the data to CSV.",
    tags: ["Chrome Extension", "JS"],
    url: "https://github.com/1maginativepen/manual-time-tracker-app/"
  },
  {
    icon: "📖",
    title: "Frontend Cheatsheet",
    desc: "A single-file reference for layouts, flexbox, grid, selectors, and animations. No frameworks, no build step.",
    tags: ["HTML", "CSS", "JS"],
    url: "https://frontend-cheatsheet-m7byz8gnb-arn-elacions-projects.vercel.app/"
  },
  {
    icon: "📄",
    title: "Merge PDFs",
    desc: "Browser-based tool to combine several PDFs into one. Drag in files, reorder them, and save. Everything runs locally, so nothing is uploaded.",
    tags: ["HTML", "JS", "Privacy-first"],
    url: "https://mergemypdf-kohl.vercel.app/"
  }
];

const experience = [
  {
    date: "April 2020 — Present",
    role: "Freelance Website Developer",
    org: "Canadian Client · Remote",
    id: "exp-canadian",
    desc: "Built WordPress landing pages and custom plugins and internal tools for client-specific workflows."
  },
  {
    date: "Feb 2025 — Feb 2026",
    role: "Senior Web Content Manager",
    org: "Mere Benefits · Florida, USA",
    id: "exp-mere",
    desc: "Built and maintained a GoHighLevel website; managed on-page SEO and content operations for lead-generation pages."
  },
  {
    date: "Aug 2024 — Jul 2025",
    role: "Senior Website Developer",
    org: "Law Office of Arash Khorsandi · California, USA",
    id: "exp-arash",
    logo: "images/arash-law.png",
    desc: "Converted brand designs into responsive WordPress pages and developed custom plugins for firm-specific needs."
  },
  {
    date: "Feb 2024 — Aug 2024",
    role: "Website Developer",
    org: "DakotaQ Internet Services · USA",
    id: "exp-dakotaq",
    logo: "images/dakotaq.png",
    desc: "Developed WordPress web applications, UI designs, and custom plugins."
  },
  {
    date: "Jan 2023 — Jun 2023",
    role: "Full-Stack Front-End Developer",
    org: "SmartView Media · Australia",
    id: "exp-smartview",
    desc: "Built WordPress applications, converted UI designs to pages, and developed custom plugins."
  }
];

// ---------- Render ----------
const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

document.getElementById("projects").innerHTML = projects.map((p, i) => `
  <button class="project reveal" data-anim="${i % 2 ? 'fadeInRight' : 'fadeInLeft'}" type="button" data-index="${i}" aria-haspopup="dialog">
    ${p.logo ? `<img class="logo" src="${esc(p.logo)}" alt="${esc(p.title)} logo" loading="lazy">` : ""}
    <h3>${esc(p.title)}</h3>
    <p>${esc(p.desc)}</p>
    <div class="tags">${p.tags.map((t) => `<span>${esc(t)}</span>`).join("")}</div>
    <span class="arrow" aria-hidden="true">+</span>
  </button>`).join("");

document.getElementById("tools-grid").innerHTML = tools.map((t) => {
  const inner = `
    <span class="tool-icon" aria-hidden="true">${t.icon}</span>
    <h3>${esc(t.title)}</h3>
    <p>${esc(t.desc)}</p>
    <div class="tags">${t.tags.map((x) => `<span>${esc(x)}</span>`).join("")}</div>`;
  return t.url
    ? `<a class="tool reveal" data-anim="zoomIn" href="${esc(t.url)}" target="_blank" rel="noopener">${inner}</a>`
    : `<div class="tool reveal" data-anim="zoomIn">${inner}</div>`;
}).join("");

document.getElementById("timeline").innerHTML = experience.map((e) => `
  <li class="reveal" id="${e.id}">
    <span class="date">${esc(e.date)}</span>
    <div>
      <h3>${esc(e.role)}</h3>
      <div class="org">${esc(e.org)}</div>
      <p class="desc">${esc(e.desc)}</p>
    </div>
    ${e.logo ? `<img class="logo" src="${esc(e.logo)}" alt="${esc(e.org.split(" · ")[0])} logo" loading="lazy">` : ""}
  </li>`).join("");

document.getElementById("year").textContent = new Date().getFullYear();

// ---------- Theme ----------
const root = document.documentElement;
const saved = (() => { try { return localStorage.getItem("theme"); } catch { return null; } })();
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
root.dataset.theme = saved || (prefersDark ? "dark" : "light");

document.getElementById("theme-toggle").addEventListener("click", () => {
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  try { localStorage.setItem("theme", next); } catch {}
});

// ---------- Nav border on scroll ----------
const nav = document.querySelector(".nav");
const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 8);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// ---------- Animations (Animate.css) ----------
// Plays an Animate.css animation on an element, then cleans up so hover
// transforms (e.g. card lift) work normally afterwards.
function play(el, name, { delay = 0, speed = "" } = {}) {
  const cls = ["animate__animated", `animate__${name}`];
  if (speed) cls.push(`animate__${speed}`);
  el.classList.remove(...[...el.classList].filter((c) => c.startsWith("animate__")));
  void el.offsetWidth; // restart if already played
  el.style.animationDelay = delay ? `${delay}ms` : "";
  el.classList.add(...cls);
  el.addEventListener("animationend", () => {
    el.classList.remove(...cls);
    el.style.animationDelay = "";
  }, { once: true });
}

document.querySelectorAll("h2").forEach((h) => { h.classList.add("reveal"); h.dataset.anim = "fadeInLeft"; });
document.querySelectorAll(".skills li").forEach((li) => li.classList.add("reveal"));

const io = new IntersectionObserver((entries) => {
  let n = 0;
  entries.forEach((en) => {
    if (!en.isIntersecting) return;
    const el = en.target;
    el.classList.add("visible");
    play(el, el.dataset.anim || "fadeInUp", { delay: Math.min(n++, 8) * 90 });
    io.unobserve(el);
  });
}, { threshold: 0.1 });
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

// Little flourish when switching theme
document.getElementById("theme-toggle").addEventListener("click", (e) => play(e.currentTarget, "rubberBand"));

// ---------- Project modal ----------
// Placeholder image (inline SVG). Replace with real paths, e.g. "images/akra-1.jpg"
const NDA_TEXT = ["Project Images/screenshot is not available", "due to NDA and company privacy"];
const placeholder = (p, n) => {
  const label = p.title;
  if (p.nda) {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750">
      <rect width="1200" height="750" fill="#e9e9e4"/>
      <g fill="none" stroke="#6b6b66" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
        <rect x="560" y="270" width="80" height="62" rx="10"/>
        <path d="M578 270v-22a22 22 0 0 1 44 0v22"/>
      </g>
      <circle cx="600" cy="301" r="6" fill="#6b6b66"/>
      <text x="600" y="400" text-anchor="middle" font-family="sans-serif" font-size="32" fill="#141414">${NDA_TEXT[0]}</text>
      <text x="600" y="446" text-anchor="middle" font-family="sans-serif" font-size="32" fill="#141414">${NDA_TEXT[1]}</text>
    </svg>`;
    return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
  }
  const tones = ["#e9e9e4", "#dcdcd5", "#f1f1ed"];
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 750">
    <rect width="1200" height="750" fill="${tones[n % tones.length]}"/>
    <g fill="none" stroke="#9a9a93" stroke-width="3" opacity=".7">
      <rect x="450" y="255" width="300" height="200" rx="14"/>
      <circle cx="530" cy="325" r="26"/>
      <path d="M450 430l90-80 70 60 50-40 90 70"/>
    </g>
    <text x="600" y="520" text-anchor="middle" font-family="sans-serif" font-size="30" fill="#6b6b66">${label} · Image ${n + 1}</text>
  </svg>`;
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
};

const modal = document.getElementById("project-modal");
const els = {
  title: document.getElementById("modal-title"),
  role: document.getElementById("modal-role"),
  logo: document.getElementById("modal-logo"),
  details: document.getElementById("modal-details"),
  list: document.getElementById("modal-highlights"),
  tags: document.getElementById("modal-tags"),
  link: document.getElementById("modal-link"),
  exp: document.getElementById("modal-exp"),
  main: document.getElementById("gallery-main"),
  thumbs: document.getElementById("gallery-thumbs"),
  count: document.getElementById("gallery-count"),
};
let current = null, slide = 0, lastTrigger = null;

function showSlide(n, animate = true) {
  const total = current.images;
  slide = (n + total) % total;
  els.main.src = placeholder(current, slide);
  els.main.alt = current.nda ? NDA_TEXT.join(" ") : `${current.title} screenshot ${slide + 1} of ${total} (placeholder)`;
  els.count.textContent = `${slide + 1} / ${total}`;
  els.thumbs.querySelectorAll("button").forEach((b, i) => b.classList.toggle("active", i === slide));
  if (animate) play(els.main, "fadeIn", { speed: "faster" });
}

function openProject(i, trigger) {
  current = projects[i];
  lastTrigger = trigger;
  els.title.textContent = current.title;
  els.role.textContent = current.role;
  els.logo.hidden = !current.logo;
  if (current.logo) { els.logo.src = current.logo; els.logo.alt = `${current.title} logo`; }
  els.details.textContent = current.details;
  els.list.innerHTML = current.highlights.map((h) => `<li>${esc(h)}</li>`).join("");
  els.tags.innerHTML = current.tags.map((t) => `<span>${esc(t)}</span>`).join("");
  els.thumbs.innerHTML = Array.from({ length: current.images }, (_, n) =>
    `<button type="button" aria-label="Show image ${n + 1}"><img src="${placeholder(current, n)}" alt=""></button>`).join("");
  els.exp.hidden = !current.exp;
  els.exp.dataset.target = current.exp || "";
  els.link.hidden = !current.url;
  if (current.url) els.link.href = current.url;
  document.querySelector(".gallery").classList.toggle("single", current.images < 2);
  showSlide(0, false);
  modal.showModal();
  play(modal.querySelector(".modal-inner"), "zoomIn", { speed: "faster" });
  [...modal.querySelector(".modal-text").children].forEach((c, k) => play(c, "fadeInUp", { delay: 120 + k * 60, speed: "faster" }));
  document.body.classList.add("modal-open");
  modal.querySelector(".modal-body").scrollTop = 0;
}

function closeProject() { modal.close(); }

document.getElementById("projects").addEventListener("click", (e) => {
  const btn = e.target.closest(".project");
  if (btn) openProject(Number(btn.dataset.index), btn);
});
els.thumbs.addEventListener("click", (e) => {
  const b = e.target.closest("button");
  if (b) showSlide([...els.thumbs.children].indexOf(b));
});
document.getElementById("gallery-prev").addEventListener("click", () => showSlide(slide - 1));
document.getElementById("gallery-next").addEventListener("click", () => showSlide(slide + 1));
document.getElementById("modal-close").addEventListener("click", closeProject);
modal.addEventListener("click", (e) => { if (e.target === modal) closeProject(); });
modal.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") showSlide(slide - 1);
  if (e.key === "ArrowRight") showSlide(slide + 1);
});
modal.addEventListener("close", () => {
  document.body.classList.remove("modal-open");
  if (lastTrigger) lastTrigger.focus();
});

// "View related experience" button: close the modal and jump to that job
els.exp.addEventListener("click", () => {
  const target = document.getElementById(els.exp.dataset.target);
  closeProject();
  if (!target) return;
  requestAnimationFrame(() => {
    target.scrollIntoView({ behavior: "smooth", block: "center" });
    target.classList.remove("flash");
    void target.offsetWidth;
    target.classList.add("flash");
    setTimeout(() => target.classList.remove("flash"), 2200);
  });
});
