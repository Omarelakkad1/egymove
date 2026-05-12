export const navItems = [
  { label: "Moves", href: "#moves" },
  { label: "Fleet", href: "#fleet" },
  { label: "Live Ops", href: "#ops" },
  { label: "Business", href: "#business" },
];

export const heroMetrics = [
  { value: "4", label: "vehicle lanes" },
  { value: "18", label: "city zones" },
  { value: "24/7", label: "move desk" },
];

export const cityNodes = [
  { city: "Alex", detail: "coastal runs", className: "node-alex" },
  { city: "Cairo", detail: "dense city moves", className: "node-cairo" },
  { city: "Giza", detail: "furniture routes", className: "node-giza" },
  { city: "New Cairo", detail: "retail drops", className: "node-new-cairo" },
  { city: "October", detail: "warehouse lanes", className: "node-october" },
];

export const moveTypes = [
  {
    title: "Apartment pieces",
    tag: "Sofa, fridge, bed",
    description: "Bulky home items matched with pickup trucks, helpers, and clear delivery windows.",
    accent: "brick",
  },
  {
    title: "Shop orders",
    tag: "Stock, bags, boxes",
    description: "Retail sellers can move inventory from stores, suppliers, and small warehouses.",
    accent: "nile",
  },
  {
    title: "Quick errands",
    tag: "Docs, gifts, parcels",
    description: "Bike and car drivers handle light city movement without turning every delivery into a project.",
    accent: "taxi",
  },
  {
    title: "Planned routes",
    tag: "Multi-stop days",
    description: "Schedule repeated transport for teams that need predictable routes without owning vehicles.",
    accent: "palm",
  },
];

export const vehicleOptions = [
  {
    code: "01",
    name: "Bike",
    load: "10 kg",
    bestFor: "documents, pharmacy runs, small bags",
    eta: "12-20 min",
  },
  {
    code: "02",
    name: "Car",
    load: "80 kg",
    bestFor: "boxes, fragile items, shopping bags",
    eta: "20-35 min",
  },
  {
    code: "03",
    name: "Pickup",
    load: "700 kg",
    bestFor: "appliances, shop stock, furniture",
    eta: "35-55 min",
  },
  {
    code: "04",
    name: "Truck",
    load: "1T+",
    bestFor: "room moves, office moves, heavy loads",
    eta: "scheduled",
  },
];

export const liveMoves = [
  {
    id: "EGM-2048",
    from: "Nasr City",
    to: "Sheikh Zayed",
    item: "3-seat sofa",
    vehicle: "Pickup",
    status: "driver matched",
  },
  {
    id: "EGM-2051",
    from: "Maadi",
    to: "Zamalek",
    item: "retail boxes",
    vehicle: "Car",
    status: "pickup confirmed",
  },
  {
    id: "EGM-2057",
    from: "Alexandria",
    to: "Cairo",
    item: "office desks",
    vehicle: "Truck",
    status: "scheduled",
  },
];

export const opsSteps = [
  "Quote the load",
  "Match the vehicle",
  "Watch the route",
  "Close the delivery",
];

export const businessBenefits = [
  "Seller pickups from store, home, or warehouse",
  "Driver categories for bikes, cars, pickups, and trucks",
  "Status updates customers can understand",
  "Recurring routes for teams that move every week",
];
