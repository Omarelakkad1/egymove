import {
  businessBenefits,
  heroMetrics,
  navItems,
  serviceCards,
  vehicleOptions,
  workflowSteps,
} from "./data.js";
import {
  businessPanel,
  footer,
  header,
  hero,
  safetySection,
  serviceGrid,
  vehicleTable,
  workflow,
} from "./components.js";

const app = document.querySelector("#app");

app.innerHTML = `
  ${header(navItems)}
  <main>
    ${hero(heroMetrics)}
    ${serviceGrid(serviceCards)}
    ${vehicleTable(vehicleOptions)}
    ${workflow(workflowSteps)}
    ${businessPanel(businessBenefits)}
    ${safetySection()}
  </main>
  ${footer()}
`;

const form = document.querySelector("#quote");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const pickup = data.get("pickup") || "your pickup";
  const dropoff = data.get("dropoff") || "your drop-off";
  const itemSize = data.get("item-size");
  const status = form.querySelector(".quote-status");

  status.textContent = `Route saved: ${itemSize} from ${pickup} to ${dropoff}`;
});
