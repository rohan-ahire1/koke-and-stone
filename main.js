// Koke & Stone — season row, rail, hanging scroll and framed views.
(() => {
  const root = document.documentElement;
  root.classList.add("js");

  const calm = matchMedia("(prefers-reduced-motion: reduce)");
  const wide = matchMedia("(min-width: 1024px)");
  const hover = matchMedia("(hover: hover) and (pointer: fine)");

  /* ---------- Season now: the 24 sekki ---------- */

  // [month (1-12), day it begins, name, season]
  const SEKKI = [
    [1, 5, "Minor Cold", "winter"], [1, 20, "Major Cold", "winter"],
    [2, 4, "Start of Spring", "spring"], [2, 19, "Rain Water", "spring"],
    [3, 5, "Insects Awaken", "spring"], [3, 20, "Spring Equinox", "spring"],
    [4, 4, "Clear and Bright", "spring"], [4, 20, "Grain Rain", "spring"],
    [5, 5, "Start of Summer", "summer"], [5, 21, "Grain Buds", "summer"],
    [6, 5, "Grain in Ear", "summer"], [6, 21, "Summer Solstice", "summer"],
    [7, 7, "Minor Heat", "summer"], [7, 22, "Major Heat", "summer"],
    [8, 7, "Start of Autumn", "autumn"], [8, 23, "End of Heat", "autumn"],
    [9, 7, "White Dew", "autumn"], [9, 23, "Autumn Equinox", "autumn"],
    [10, 8, "Cold Dew", "autumn"], [10, 23, "Frost Descends", "autumn"],
    [11, 7, "Start of Winter", "winter"], [11, 22, "Minor Snow", "winter"],
    [12, 7, "Major Snow", "winter"], [12, 21, "Winter Solstice", "winter"],
  ];
  const MONTHS = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];

  const now = new Date();
  const key = (m, d) => m * 100 + d;
  const today = key(now.getMonth() + 1, now.getDate());
  let i = SEKKI.length - 1;
  SEKKI.forEach((s, n) => { if (key(s[0], s[1]) <= today) i = n; });
  const cur = SEKKI[i];
  const next = SEKKI[(i + 1) % SEKKI.length];
  const end = new Date(now.getFullYear(), next[0] - 1, next[1] - 1);
  const sekki = document.getElementById("sekki");
  const dates = document.getElementById("sekki-dates");
  if (sekki && dates) {
    sekki.textContent = cur[2];
    const from = `${cur[1]} ${MONTHS[cur[0] - 1]}`;
    const to = `${end.getDate()} ${MONTHS[end.getMonth()]}`;
    dates.textContent = cur[0] - 1 === end.getMonth() ? `${cur[1]} to ${to}` : `${from} to ${to}`;
  }

  /* ---------- The alcove through the year ---------- */

  // Only autumn ships in the HTML; the other seasons are added here and fetched once the page settles.
  const stage = document.querySelector(".alcove-photos");
  const first = stage.querySelector("img");
  ["spring", "summer", "winter"].forEach((season) => {
    const img = first.cloneNode(false);
    img.classList.remove("is-on");
    img.removeAttribute("src");
    img.removeAttribute("fetchpriority");
    img.dataset.season = season;
    img.dataset.src = `assets/alcove-${season}.webp`;
    stage.append(img);
  });
  const photos = [...stage.querySelectorAll("img")];
  const buttons = [...document.querySelectorAll(".seasons button")];
  const notes = [...document.querySelectorAll(".season-note [data-note]")];

  const load = (img) => {
    if (img.dataset.src && !img.getAttribute("src")) img.src = img.dataset.src;
    if (img.complete && img.naturalWidth) return Promise.resolve();
    return new Promise((done) => {
      img.addEventListener("load", done, { once: true });
      img.addEventListener("error", done, { once: true });
    });
  };

  let wanted = "autumn";
  const show = (season) => {
    wanted = season;
    buttons.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.season === season)));
    notes.forEach((n) => { n.hidden = n.dataset.note !== season; });
    const img = photos.find((p) => p.dataset.season === season);
    if (!img) return;
    load(img).then(() => {
      if (wanted !== season) return;
      photos.forEach((p) => p.classList.toggle("is-on", p === img));
    });
  };

  buttons.forEach((b) => b.addEventListener("click", () => show(b.dataset.season)));
  if (cur[3] !== "autumn") show(cur[3]);

  // Fetch the other seasons once the page has settled, so a switch is instant.
  addEventListener("load", () => {
    const later = window.requestIdleCallback || ((f) => setTimeout(f, 1500));
    later(() => photos.forEach((p) => { if (p.dataset.src && !p.getAttribute("src")) p.src = p.dataset.src; }));
  });

  /* ---------- Rail: menu and where you are ---------- */

  const rail = document.querySelector(".rail");
  const menu = document.querySelector(".menu-btn");
  const setMenu = (open) => {
    rail.classList.toggle("is-open", open);
    menu.setAttribute("aria-expanded", String(open));
  };
  menu.addEventListener("click", () => setMenu(menu.getAttribute("aria-expanded") !== "true"));
  rail.querySelectorAll(".nav a").forEach((a) => a.addEventListener("click", () => setMenu(false)));
  addEventListener("keydown", (e) => {
    if (e.key === "Escape" && rail.classList.contains("is-open")) { setMenu(false); menu.focus(); }
  });

  const links = [...document.querySelectorAll(".nav a[data-spy]")];
  const spied = links.map((a) => document.getElementById(a.dataset.spy)).filter(Boolean);
  const here = (id) => links.forEach((a) => {
    if (a.dataset.spy === id) a.setAttribute("aria-current", "location");
    else a.removeAttribute("aria-current");
  });
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) here(e.target.id); });
    }, { rootMargin: "-45% 0px -50% 0px" });
    spied.forEach((s) => io.observe(s));
  }

  /* ---------- The hanging scroll unrolls ---------- */

  const wrap = document.querySelector(".scroll-wrap");
  const scroll = document.querySelector(".kakejiku");
  const steps = [...document.querySelectorAll(".step")];
  let ticking = false;

  const frame = () => {
    ticking = false;
    const vh = innerHeight;
    steps.forEach((s) => {
      if (s.getBoundingClientRect().top < vh * 0.62) s.classList.add("is-lit");
    });
    if (!scroll) return;
    if (calm.matches || !wide.matches) { scroll.style.removeProperty("--unroll"); return; }
    const r = wrap.getBoundingClientRect();
    const span = Math.max(1, r.height - vh * 0.5);
    const p = Math.min(1, Math.max(0, (vh * 0.7 - r.top) / span));
    scroll.style.setProperty("--unroll", (0.08 + 0.92 * p).toFixed(4));
  };
  const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(frame); } };
  addEventListener("scroll", onScroll, { passive: true });
  addEventListener("resize", onScroll);
  calm.addEventListener?.("change", onScroll);
  frame();

  /* ---------- Framed views lean with the pointer ---------- */

  document.querySelectorAll(".window").forEach((w) => {
    const img = w.querySelector("img");
    w.addEventListener("pointermove", (e) => {
      if (calm.matches || !hover.matches) return;
      const r = w.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      img.style.transform = `scale(1.05) translate3d(${(-x * 2.2).toFixed(2)}%, ${(-y * 2.2).toFixed(2)}%, 0)`;
    });
    w.addEventListener("pointerleave", () => { img.style.transform = ""; });
  });
})();
