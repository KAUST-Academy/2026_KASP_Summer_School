/**
 * Shared site layout — header/nav and footer.
 *
 * This is the ONE place to edit the navigation. To add a day, page, or whole
 * new week, update the `weeks` array below; every page picks it up automatically.
 *
 * Each page just needs:
 *   <div id="site-header"></div>  ... <div id="site-footer"></div>
 * and to load this script BEFORE main.js (it injects the nav that main.js wires up).
 */
(function () {
  "use strict";

  // ---- Edit navigation here -------------------------------------------------
  // hrefs are written relative to the SITE ROOT (where index.html lives).
  const weeks = [
    {
      id: "week1",
      label: "Week 1",
      pages: [
        { label: "Day 1: Convolutional Neural Networks", href: "pages/Week1/w1d1.html" },
        { label: "Day 2: Sequential Models — RNNs, LSTM &amp; Attention", href: "pages/Week1/w1d2.html" },
        { label: "Day 3: Transformers", href: "pages/Week1/w1d3.html" },
        { label: "Day 4: Vision Transformers", href: "pages/Week1/w1d4.html" },
        { label: "Day 5: Video Handling", href: "pages/Week1/w1d5.html" },
        { label: "Afternoon Sessions: AI at the Edge", href: "pages/Week1/afternoon.html" },
        { label: "Extra", href: "pages/Week1/extras.html" },
      ],
    },
    {
      id: "week2",
      label: "Week 2",
      pages: [
        { label: "Day 6: Representation Learning — SSL", href: "pages/Week2/w2d6.html" },
        { label: "Day 7: Contrastive Learning", href: "pages/Week2/w2d7.html" },
        { label: "Day 8: Advanced SSL &amp; JEPA", href: "pages/Week2/w2d8.html" },
        { label: "Day 9: Foundation Models", href: "pages/Week2/w2d9.html" },
        { label: "Day 10: World Models", href: "pages/Week2/w2d10.html" },
        { label: "Extra", href: "pages/Week2/extras.html" },
      ],
    },
    {
      id: "week3",
      label: "Week 3",
      pages: [
        { label: "Day 11: Autoencoders &amp; VAEs", href: "pages/Week3/w3d11.html" },
        { label: "Day 12: GANs", href: "pages/Week3/w3d12.html" },
        { label: "Day 13: Diffusion Models", href: "pages/Week3/w3d13.html" },
        { label: "Day 14: Stable Diffusion", href: "pages/Week3/w3d14.html" },
        { label: "Day 15: Normalizing Flows", href: "pages/Week3/w3d15.html" },
        { label: "Extra", href: "pages/Week3/extras.html" },
      ],
    },
    {
      id: "week4",
      label: "Week 4",
      pages: [
        { label: "Day 16: Reinforcement Learning Foundations", href: "pages/Week4/w4d16.html" },
        { label: "Day 17: Value-Based Methods", href: "pages/Week4/w4d17.html" },
        { label: "Day 18: Vanilla Policy Gradient", href: "pages/Week4/w4d18.html" },
        { label: "Day 19: Policy Optimization", href: "pages/Week4/w4d19.html" },
        { label: "Day 20: Continuous Control 1", href: "pages/Week4/w4d20.html" },
        { label: "Afternoon Sessions: Building Reliable Agents", href: "pages/Week4/afternoon.html" },
        { label: "Extra", href: "pages/Week4/extras.html" },
      ],
    },
  ];
  // ---------------------------------------------------------------------------

  // Prefix to get back to the site root. Pages under /pages/ sit two levels deep.
  const root = location.pathname.includes("/pages/") ? "../../" : "";

  // Normalized current path (treat a directory URL as index.html). We match on the
  // full root-relative href suffix so pages that share a filename across weeks
  // (e.g. every week's extras.html) don't all light up as active.
  const norm = location.pathname.endsWith("/")
    ? location.pathname + "index.html"
    : location.pathname;
  const isCurrent = (href) => norm.endsWith("/" + href.split("#")[0]);

  const onHome = isCurrent("index.html");

  const weeksMarkup = weeks
    .map((week) => {
      const weekActive = week.pages.some((p) => isCurrent(p.href)) ? "active" : "";
      const items = week.pages
        .map((p) => {
          const active = isCurrent(p.href) ? "active" : "";
          return `<li><a class="${active}" href="${root}${p.href}">${p.label}</a></li>`;
        })
        .join("\n              ");
      return (
        `<li class="dropdown"><a class="${weekActive}" href="${root}index.html#${week.id}">` +
        `<span>${week.label}</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>\n` +
        `            <ul>\n              ${items}\n            </ul>\n          </li>`
      );
    })
    .join("\n          ");

  const headerMarkup =
    `<header id="header" class="fixed-top">\n` +
    `    <div class="container d-flex align-items-center justify-content-between">\n` +
    `      <div class="logo">\n` +
    `        <a href="${root}index.html">\n` +
    `          <img src="${root}assets/img/kaust-academy-logo.png" alt="KAUST Academy">\n` +
    `        </a>\n` +
    `      </div>\n` +
    `      <nav id="navbar" class="navbar">\n` +
    `        <ul>\n` +
    `          <li><a class="${onHome ? "active" : ""}" href="${root}index.html">Home</a></li>\n` +
    `          ${weeksMarkup}\n` +
    `        </ul>\n` +
    `        <i class="bi bi-list mobile-nav-toggle"></i>\n` +
    `      </nav>\n` +
    `    </div>\n` +
    `  </header>`;

  const footerMarkup =
    `<footer id="footer">\n` +
    `    <div class="container d-md-flex py-4">\n` +
    `      <div class="me-md-auto text-center w-100">\n` +
    `        <div class="copyright">\n` +
    `          &copy; Copyright <strong><span>KAUST Academy</span></strong>. All Rights Reserved\n` +
    `        </div>\n` +
    `        <div class="license" style="font-size: 13px; margin-top: 8px; color: #555;">\n` +
    `          Recording and uploading lectures online is not permitted.\n` +
    `        </div>\n` +
    `        <div class="credits" style="font-size: 14px; margin-top: 5px; color: #555;">\n` +
    `          Website created by <strong>Ali Habibullah</strong>.\n` +
    `        </div>\n` +
    `      </div>\n` +
    `    </div>\n` +
    `  </footer>`;

  const headerSlot = document.getElementById("site-header");
  const footerSlot = document.getElementById("site-footer");
  if (headerSlot) headerSlot.outerHTML = headerMarkup;
  if (footerSlot) footerSlot.outerHTML = footerMarkup;
})();
