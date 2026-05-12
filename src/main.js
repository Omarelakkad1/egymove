import {
  businessBenefits,
  cityNodes,
  heroMetrics,
  liveMoves,
  moveTypes,
  navItems,
  opsSteps,
  vehicleOptions,
} from "./data.js";
import {
  businessPanel,
  fleetSection,
  footer,
  header,
  hero,
  moveGrid,
  operationsSection,
} from "./components.js";

const app = document.querySelector("#app");

app.innerHTML = `
  ${header(navItems)}
  <main>
    ${hero(heroMetrics, cityNodes, liveMoves)}
    ${moveGrid(moveTypes)}
    ${fleetSection(vehicleOptions)}
    ${operationsSection(liveMoves, opsSteps)}
    ${businessPanel(businessBenefits)}
  </main>
  ${footer()}
`;

const form = document.querySelector("#quote");
const status = form.querySelector(".quote-status");
const vehicleButtons = document.querySelectorAll("[data-vehicle]");

let selectedVehicle = vehicleOptions[2].name;

vehicleButtons.forEach((button) => {
  if (button.dataset.vehicle === selectedVehicle) {
    button.classList.add("is-selected");
  }

  button.addEventListener("click", () => {
    selectedVehicle = button.dataset.vehicle;
    vehicleButtons.forEach((item) => item.classList.toggle("is-selected", item === button));
    status.textContent = `${selectedVehicle} lane selected. Add route details to estimate the move.`;
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const pickup = data.get("pickup") || "your pickup";
  const dropoff = data.get("dropoff") || "your drop-off";
  const itemSize = data.get("item-size");

  status.textContent = `${itemSize} from ${pickup} to ${dropoff} is queued for the ${selectedVehicle} lane.`;
});
