function metricList(metrics) {
  return metrics
    .map(
      (metric) => `
        <div class="metric">
          <strong>${metric.value}</strong>
          <span>${metric.label}</span>
        </div>
      `,
    )
    .join("");
}

export function header(navItems) {
  return `
    <header class="site-header">
      <a class="brand" href="#top" aria-label="Egymove home">
        <span class="brand-mark">EG</span>
        <span>Egymove</span>
      </a>
      <nav class="nav-links" aria-label="Primary navigation">
        ${navItems.map((item) => `<a href="${item.href}">${item.label}</a>`).join("")}
      </nav>
      <a class="header-action" href="#quote">Book a move</a>
    </header>
  `;
}

export function dispatchMap(cityNodes, liveMoves) {
  return `
    <aside class="dispatch-visual" aria-label="Egymove live dispatch map">
      <div class="dispatch-map">
        <div class="map-grid"></div>
        <div class="nile-line"></div>
        <div class="route-line route-one"></div>
        <div class="route-line route-two"></div>
        <div class="route-line route-three"></div>
        ${cityNodes
          .map(
            (node) => `
              <div class="city-node ${node.className}">
                <strong>${node.city}</strong>
                <span>${node.detail}</span>
              </div>
            `,
          )
          .join("")}
        <div class="vehicle-token token-bike">Bike</div>
        <div class="vehicle-token token-pickup">Pickup</div>
        <div class="vehicle-token token-truck">Truck</div>
      </div>
      <div class="move-stack">
        ${liveMoves
          .slice(0, 2)
          .map(
            (move) => `
              <article class="mini-move">
                <span>${move.id}</span>
                <strong>${move.from} to ${move.to}</strong>
                <p>${move.item} / ${move.vehicle}</p>
              </article>
            `,
          )
          .join("")}
      </div>
    </aside>
  `;
}

export function hero(metrics, cityNodes, liveMoves) {
  return `
    <section class="hero" id="top">
      <div class="hero-copy">
        <p class="eyebrow">Built for movement in Egypt</p>
        <h1>Egymove</h1>
        <p class="hero-lede">
          A city-to-city dispatch layer for customers, sellers, and drivers moving anything from tiny parcels to full furniture loads.
        </p>
        <form class="booking-dock" id="quote" aria-label="Delivery quote form">
          <div class="field">
            <label for="pickup">Pickup</label>
            <input id="pickup" name="pickup" placeholder="Nasr City" />
          </div>
          <div class="field">
            <label for="dropoff">Drop-off</label>
            <input id="dropoff" name="dropoff" placeholder="Sheikh Zayed" />
          </div>
          <div class="field">
            <label for="item-size">Move type</label>
            <select id="item-size" name="item-size">
              <option>Furniture</option>
              <option>Retail boxes</option>
              <option>Small parcel</option>
              <option>Office move</option>
            </select>
          </div>
          <button type="submit">Estimate</button>
          <p class="quote-status" aria-live="polite"></p>
        </form>
        <div class="metric-row">${metricList(metrics)}</div>
      </div>
      ${dispatchMap(cityNodes, liveMoves)}
    </section>
  `;
}

export function moveGrid(moveTypes) {
  return `
    <section class="section move-section" id="moves">
      <div class="section-heading">
        <p class="eyebrow">Move categories</p>
        <h2>Not just parcels. Not just trucks. The messy middle too.</h2>
      </div>
      <div class="move-grid">
        ${moveTypes
          .map(
            (move) => `
              <article class="move-card ${move.accent}">
                <span>${move.tag}</span>
                <h3>${move.title}</h3>
                <p>${move.description}</p>
              </article>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

export function fleetSection(vehicleOptions) {
  return `
    <section class="section fleet-section" id="fleet">
      <div class="section-heading">
        <p class="eyebrow">Fleet logic</p>
        <h2>Choose the lane. Egymove handles the driver match.</h2>
      </div>
      <div class="fleet-rail" role="list">
        ${vehicleOptions
          .map(
            (vehicle) => `
              <button class="vehicle-card" type="button" data-vehicle="${vehicle.name}">
                <span class="vehicle-code">${vehicle.code}</span>
                <strong>${vehicle.name}</strong>
                <small>${vehicle.load}</small>
                <p>${vehicle.bestFor}</p>
                <em>${vehicle.eta}</em>
              </button>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

export function operationsSection(liveMoves, opsSteps) {
  return `
    <section class="ops-section" id="ops">
      <div class="ops-copy">
        <p class="eyebrow">Live operations</p>
        <h2>A delivery desk, not a brochure.</h2>
        <ol class="ops-steps">
          ${opsSteps.map((step) => `<li>${step}</li>`).join("")}
        </ol>
      </div>
      <div class="ops-board">
        <div class="board-header">
          <span>Active moves</span>
          <strong>Today</strong>
        </div>
        ${liveMoves
          .map(
            (move) => `
              <article class="move-row">
                <span>${move.id}</span>
                <div>
                  <strong>${move.from} to ${move.to}</strong>
                  <p>${move.item}</p>
                </div>
                <em>${move.status}</em>
              </article>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

export function businessPanel(benefits) {
  return `
    <section class="section business-section" id="business">
      <div class="terminal-card">
        <div class="terminal-bar">
          <span></span><span></span><span></span>
        </div>
        <div class="terminal-route">
          <strong>seller route / cairo</strong>
          <p>pickup: supplier gate 3</p>
          <p>drop 01: Heliopolis customer</p>
          <p>drop 02: New Cairo showroom</p>
          <p>driver: pickup lane / verified</p>
        </div>
      </div>
      <div class="business-copy">
        <p class="eyebrow">For operators and sellers</p>
        <h2>Use Egymove like a flexible fleet you do not have to own.</h2>
        <ul class="benefit-list">
          ${benefits.map((benefit) => `<li>${benefit}</li>`).join("")}
        </ul>
      </div>
    </section>
  `;
}

export function footer() {
  return `
    <footer class="site-footer">
      <div>
        <strong>Egymove</strong>
        <p>Customer to driver. Item to destination. Egypt to Egypt.</p>
      </div>
      <a href="#quote">Start a move</a>
    </footer>
  `;
}
