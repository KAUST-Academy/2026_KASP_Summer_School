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
  ];
  // ---------------------------------------------------------------------------

  // Prefix to get back to the site root. Pages under /pages/ sit two levels deep.
  const root = location.pathname.includes("/pages/") ? "../../" : "";

  // Current page filename (treat a directory URL as index.html).
  const current = location.pathname.split("/").pop() || "index.html";
  const fileOf = (href) => href.split("#")[0].split("/").pop();

  const onHome = current === "index.html";

  const weeksMarkup = weeks
    .map((week) => {
      const weekActive = week.pages.some((p) => fileOf(p.href) === current) ? "active" : "";
      const items = week.pages
        .map((p) => {
          const active = fileOf(p.href) === current ? "active" : "";
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
