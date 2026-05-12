import {
  footerLinks,
  heroMetrics,
  navItems,
  services,
  showcaseModes,
  testimonials,
} from "./data.js";
import {
  ctaSection,
  footer,
  header,
  hero,
  servicesSection,
  showcaseSection,
  testimonialsSection,
} from "./components.js";

const app = document.querySelector("#app");

app.innerHTML = `
  ${header(navItems)}
  <main>
    ${hero(heroMetrics)}
    ${servicesSection(services)}
    ${showcaseSection(showcaseModes)}
    ${testimonialsSection(testimonials)}
    ${ctaSection()}
  </main>
  ${footer(footerLinks)}
`;

const form = document.querySelector("#quote");
const status = form.querySelector(".quote-status");
const modeButtons = document.querySelectorAll("[data-mode]");
const showcaseTargets = document.querySelectorAll("[data-showcase]");
const parallaxItems = document.querySelectorAll("[data-parallax]");
const revealItems = document.querySelectorAll(".reveal");

let selectedMode = showcaseModes[0];

modeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedMode = showcaseModes[Number(button.dataset.mode)];
    modeButtons.forEach((item) => item.classList.toggle("is-active", item === button));

    showcaseTargets.forEach((target) => {
      target.textContent = selectedMode[target.dataset.showcase];
    });
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const pickup = data.get("pickup") || "your pickup";
  const dropoff = data.get("dropoff") || "your drop-off";
  const itemSize = data.get("item-size");

  status.textContent = `${itemSize} from ${pickup} to ${dropoff} is ready for the ${selectedMode.vehicle} lane.`;
});

window.addEventListener("pointermove", (event) => {
  const x = (event.clientX / window.innerWidth - 0.5) * 18;
  const y = (event.clientY / window.innerHeight - 0.5) * 18;

  parallaxItems.forEach((item) => {
    item.style.setProperty("--parallax-x", `${x}px`);
    item.style.setProperty("--parallax-y", `${y}px`);
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { threshold: 0.18 },
);

revealItems.forEach((item) => revealObserver.observe(item));
