const iconPaths = {
  package:
    '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>',
  store:
    '<path d="m2 7 1.8-4h16.4L22 7"/><path d="M2 7h20"/><path d="M5 7v13h14V7"/><path d="M9 20v-6h6v6"/><path d="M6 10h12"/>',
  sofa:
    '<path d="M5 11V8a3 3 0 0 1 6 0v3"/><path d="M13 11V8a3 3 0 0 1 6 0v3"/><path d="M4 12h16a2 2 0 0 1 2 2v5H2v-5a2 2 0 0 1 2-2Z"/><path d="M4 19v2"/><path d="M20 19v2"/>',
  calendar:
    '<path d="M8 2v4"/><path d="M16 2v4"/><path d="M3 10h18"/><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/>',
};

export function icon(name) {
  return `
    <svg class="icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      ${iconPaths[name] ?? iconPaths.package}
    </svg>
  `;
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
      <a class="header-action" href="#quote">Get a quote</a>
    </header>
  `;
}

export function hero(metrics) {
  return `
    <section class="hero" id="top">
      <div class="hero-media" role="img" aria-label="Delivery driver loading boxes into a vehicle"></div>
      <div class="hero-content">
        <p class="eyebrow">Egypt-first logistics marketplace</p>
        <h1>Egymove</h1>
        <p class="hero-copy">
          Move anything across Egypt by matching with trusted drivers, bikes, cars, pickups, and trucks in one simple flow.
        </p>
        <form class="quote-panel" id="quote" aria-label="Delivery quote form">
          <div class="field">
            <label for="pickup">Pickup</label>
            <input id="pickup" name="pickup" placeholder="Nasr City, Cairo" />
          </div>
          <div class="field">
            <label for="dropoff">Drop-off</label>
            <input id="dropoff" name="dropoff" placeholder="Smouha, Alexandria" />
          </div>
          <div class="field">
            <label for="item-size">Item size</label>
            <select id="item-size" name="item-size">
              <option>Small parcel</option>
              <option>Boxes</option>
              <option>Furniture</option>
              <option>Full move</option>
            </select>
          </div>
          <button type="submit">Estimate move</button>
          <p class="quote-status" aria-live="polite"></p>
        </form>
        <div class="metric-row">
          ${metrics
            .map(
              (metric) => `
                <div>
                  <strong>${metric.value}</strong>
                  <span>${metric.label}</span>
                </div>
              `,
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

export function serviceGrid(cards) {
  return `
    <section class="section" id="services">
      <div class="section-heading">
        <p class="eyebrow">What Egymove carries</p>
        <h2>One network for daily deliveries and heavy moves.</h2>
      </div>
      <div class="service-grid">
        ${cards
          .map(
            (card) => `
              <article class="service-card">
                ${icon(card.icon)}
                <h3>${card.title}</h3>
                <p>${card.description}</p>
              </article>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

export function vehicleTable(options) {
  return `
    <section class="section split-section" id="vehicles">
      <div>
        <p class="eyebrow">Vehicle matching</p>
        <h2>The right vehicle for the item, route, and timing.</h2>
        <p>
          Egymove can recommend the best driver category after the customer describes the load, then keep the move visible from pickup to drop-off.
        </p>
      </div>
      <div class="vehicle-list">
        ${options
          .map(
            (vehicle) => `
              <article class="vehicle-row">
                <strong>${vehicle.name}</strong>
                <span>${vehicle.load}</span>
                <p>${vehicle.bestFor}</p>
              </article>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

export function workflow(steps) {
  return `
    <section class="workflow-band">
      <div class="section-heading">
        <p class="eyebrow">How it works</p>
        <h2>Book, match, track, and deliver.</h2>
      </div>
      <ol class="workflow-list">
        ${steps.map((step) => `<li><span>${step}</span></li>`).join("")}
      </ol>
    </section>
  `;
}

export function businessPanel(benefits) {
  return `
    <section class="section business-section" id="business">
      <div class="business-image" role="img" aria-label="Boxes prepared for delivery in a warehouse"></div>
      <div class="business-copy">
        <p class="eyebrow">For Egyptian businesses</p>
        <h2>Flexible logistics without running your own fleet.</h2>
        <p>
          Shops, marketplaces, furniture sellers, and operations teams can use Egymove as a third-party delivery layer for one-off or repeat transport.
        </p>
        <ul class="benefit-list">
          ${benefits.map((benefit) => `<li>${benefit}</li>`).join("")}
        </ul>
      </div>
    </section>
  `;
}

export function safetySection() {
  return `
    <section class="section safety-section" id="safety">
      <div>
        <p class="eyebrow">Trust and control</p>
        <h2>Built around visibility, accountability, and local support.</h2>
      </div>
      <div class="safety-grid">
        <article>
          <strong>Verified drivers</strong>
          <p>Driver profiles, vehicle details, and delivery history help customers choose confidently.</p>
        </article>
        <article>
          <strong>Live status</strong>
          <p>Customers and businesses can follow each move from pickup confirmation to proof of delivery.</p>
        </article>
        <article>
          <strong>Egypt coverage</strong>
          <p>Designed for dense city routes, intercity movement, and the practical realities of local logistics.</p>
        </article>
      </div>
    </section>
  `;
}

export function footer() {
  return `
    <footer class="site-footer">
      <div>
        <strong>Egymove</strong>
        <p>Move anything. Match with the right driver.</p>
      </div>
      <a href="#quote">Start a move</a>
    </footer>
  `;
}
