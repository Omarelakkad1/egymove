function metrics(items) {
  return items
    .map(
      (item) => `
        <div class="metric">
          <strong>${item.value}</strong>
          <span>${item.label}</span>
        </div>
      `,
    )
    .join("");
}

export function header(navItems) {
  return `
    <header class="site-header">
      <a class="brand" href="#top" aria-label="Egymove home">
        <span class="brand-mark">E</span>
        <span>Egymove</span>
      </a>
      <nav class="nav-links" aria-label="Primary navigation">
        ${navItems.map((item) => `<a href="${item.href}">${item.label}</a>`).join("")}
      </nav>
      <a class="header-action" href="#start">Launch move</a>
    </header>
  `;
}

export function hero(heroMetrics) {
  return `
    <section class="hero reveal" id="top">
      <div class="hero-copy">
        <p class="eyebrow">Kinetic logistics for Egypt</p>
        <h1>Move Egypt Forward.</h1>
        <p class="hero-lede">
          Egymove connects customers, sellers, and drivers through a calm dispatch experience for anything from a gift box to a living-room move.
        </p>
        <div class="hero-actions">
          <a class="primary-action" href="#start">Start a move</a>
          <a class="secondary-action" href="#showcase">Explore flow</a>
        </div>
        <div class="metric-row">${metrics(heroMetrics)}</div>
      </div>

      <div class="hero-visual" data-parallax>
        <div class="visual-shell">
          <svg class="route-sculpture" viewBox="0 0 620 620" role="img" aria-label="Abstract Egymove route sculpture">
            <defs>
              <linearGradient id="routeA" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stop-color="#4F8CFF" />
                <stop offset="56%" stop-color="#9C5CFF" />
                <stop offset="100%" stop-color="#FF5EA8" />
              </linearGradient>
              <linearGradient id="routeB" x1="1" x2="0" y1="0" y2="1">
                <stop offset="0%" stop-color="#FF5EA8" />
                <stop offset="100%" stop-color="#4F8CFF" />
              </linearGradient>
            </defs>
            <path class="trace trace-one" d="M76 390 C168 176, 300 520, 540 178" />
            <path class="trace trace-two" d="M92 260 C230 90, 410 118, 526 360" />
            <path class="trace trace-three" d="M164 492 C240 350, 350 330, 460 122" />
            <rect class="glass-prism prism-one" x="214" y="184" width="176" height="176" rx="28" />
            <rect class="glass-prism prism-two" x="272" y="250" width="132" height="132" rx="24" />
            <circle class="route-dot dot-one" cx="76" cy="390" r="10" />
            <circle class="route-dot dot-two" cx="540" cy="178" r="10" />
            <circle class="route-dot dot-three" cx="526" cy="360" r="10" />
          </svg>
          <article class="floating-card card-route">
            <span>Live route</span>
            <strong>Nasr City to Zayed</strong>
            <p>Pickup lane selected</p>
          </article>
          <article class="floating-card card-price">
            <span>Estimated</span>
            <strong>EGP 420</strong>
            <p>Furniture move</p>
          </article>
          <div class="scan-line"></div>
        </div>
      </div>
    </section>
  `;
}

export function servicesSection(services) {
  return `
    <section class="section services-section reveal" id="services">
      <div class="section-heading">
        <p class="eyebrow">What Egymove does</p>
        <h2>Simple enough for one box. Strong enough for the heavy stuff.</h2>
      </div>
      <div class="service-grid">
        ${services
          .map(
            (service, index) => `
              <article class="service-card">
                <span class="service-number">${String(index + 1).padStart(2, "0")}</span>
                <small>${service.kicker}</small>
                <h3>${service.title}</h3>
                <p>${service.description}</p>
              </article>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

export function showcaseSection(showcaseModes) {
  const active = showcaseModes[0];

  return `
    <section class="showcase-section reveal" id="showcase">
      <div class="showcase-copy">
        <p class="eyebrow">Interactive showcase</p>
        <h2>One interface. Different movement moods.</h2>
        <p>
          Tap a lane and the dispatch surface adapts around the item, vehicle, and route. The brand becomes memorable because the product behavior is visible.
        </p>
        <div class="mode-buttons">
          ${showcaseModes
            .map(
              (mode, index) => `
                <button class="mode-button ${index === 0 ? "is-active" : ""}" type="button" data-mode="${index}">
                  ${mode.vehicle}
                </button>
              `,
            )
            .join("")}
        </div>
      </div>
      <div class="phone-stage" data-parallax>
        <div class="phone-frame">
          <div class="phone-top">
            <span>Egymove</span>
            <strong data-showcase="eta">${active.eta}</strong>
          </div>
          <div class="phone-map">
            <span class="pin pickup"></span>
            <span class="pin dropoff"></span>
            <div class="phone-route"></div>
          </div>
          <div class="move-ticket">
            <span data-showcase="label">${active.label}</span>
            <strong data-showcase="route">${active.route}</strong>
            <p data-showcase="load">${active.load}</p>
          </div>
          <div class="driver-strip">
            <span></span>
            <div>
              <strong data-showcase="vehicle">${active.vehicle}</strong>
              <p>Verified driver lane</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function testimonialsSection(testimonials) {
  return `
    <section class="section testimonials-section reveal" id="stories">
      <div class="section-heading">
        <p class="eyebrow">Proof of feel</p>
        <h2>Premium does not mean cold. It means clear, trusted, and easy to remember.</h2>
      </div>
      <div class="testimonial-grid">
        ${testimonials
          .map(
            (item) => `
              <article class="testimonial-card">
                <p>"${item.quote}"</p>
                <strong>${item.name}</strong>
                <span>${item.role}</span>
              </article>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

export function ctaSection() {
  return `
    <section class="cta-section reveal" id="start">
      <div>
        <p class="eyebrow">Ready when the city moves</p>
        <h2>Design that moves.</h2>
        <p>
          A cleaner, stranger, more ownable face for a logistics company that wants to be remembered.
        </p>
      </div>
      <form class="booking-panel" id="quote" aria-label="Delivery quote form">
        <div class="field">
          <label for="pickup">Pickup</label>
          <input id="pickup" name="pickup" placeholder="Nasr City" />
        </div>
        <div class="field">
          <label for="dropoff">Drop-off</label>
          <input id="dropoff" name="dropoff" placeholder="Sheikh Zayed" />
        </div>
        <div class="field">
          <label for="item-size">Item</label>
          <select id="item-size" name="item-size">
            <option>Furniture</option>
            <option>Retail boxes</option>
            <option>Small parcel</option>
            <option>Office move</option>
          </select>
        </div>
        <button type="submit">Estimate move</button>
        <p class="quote-status" aria-live="polite"></p>
      </form>
    </section>
  `;
}

export function footer(footerLinks) {
  return `
    <footer class="site-footer">
      <div>
        <a class="brand footer-brand" href="#top" aria-label="Egymove home">
          <span class="brand-mark">E</span>
          <span>Egymove</span>
        </a>
        <p>Movement infrastructure for modern Egypt.</p>
      </div>
      <div class="footer-links">
        ${footerLinks.map((link) => `<span>${link}</span>`).join("")}
      </div>
    </footer>
  `;
}
