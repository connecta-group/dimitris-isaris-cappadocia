/**
 * Editorial content for the page. Copy lives here so config.js stays
 * limited to links, dates and contact details.
 */

export const PROGRAM = [
  {
    day: "01",
    title: "Welcome to Cappadocia",
    tagline: "Arrive slowly. Watch the rock turn gold.",
    image: "arrival",
    blocks: [
      {
        label: "Arrival",
        icon: "car",
        items: [
          "VIP meet & greet at the airport or bus terminal",
          "Private Mercedes Vito & Sprinter transfers",
          "Hotel check-in",
        ],
      },
      {
        label: "Afternoon",
        icon: "leaf",
        items: ["Leisure time and rest before the first evening"],
      },
      {
        label: "Sunset",
        icon: "sun",
        items: [
          "A panoramic viewpoint chosen for the light that evening",
          "Sunset photography with the group",
        ],
      },
      {
        label: "Evening",
        icon: "glass",
        items: ["Welcome dinner", "Overnight at the hotel"],
      },
    ],
  },
  {
    day: "02",
    title: "Discover the magic",
    tagline: "Balloons at first light, clay by afternoon, valleys at dusk.",
    image: "balloons",
    blocks: [
      {
        label: "Morning",
        icon: "balloon",
        items: [
          "Sunrise balloon viewing experience (weather permitting)",
          "Valley walk — sunrise or daytime, depending on conditions",
        ],
      },
      {
        label: "Afternoon",
        icon: "compass",
        items: [
          "Full-day guided Cappadocia tour",
          "Göreme Open Air Museum",
          "Paşabağ (Monks Valley)",
          "Devrent (Imagination Valley)",
          "Avanos on the Kızılırmak river",
        ],
      },
      {
        label: "Culture",
        icon: "pottery",
        items: [
          "Traditional pottery workshop in Avanos",
          "Hands-on session at the kick wheel",
        ],
      },
      {
        label: "Sunset",
        icon: "atv",
        items: ["ATV safari through the valleys as the light drops"],
      },
      {
        label: "Evening",
        icon: "moon",
        items: ["Free time", "Overnight stay"],
      },
    ],
  },
  {
    day: "03",
    title: "Live Performance with Dimitris Isaris",
    tagline: "The evening the journey was built around.",
    image: "concert",
    featured: true,
    blocks: [
      {
        label: "Morning",
        icon: "coffee",
        items: ["Breakfast at the hotel"],
      },
      {
        label: "At leisure",
        icon: "leaf",
        items: [
          "Free time",
          "Relax at the hotel",
          "Optional personal activities on request",
        ],
      },
      {
        label: "Evening highlight",
        icon: "guitar",
        items: [
          "Welcome cocktail",
          "Exclusive acoustic guitar performance by Dimitris Isaris",
          "Full event production and staging",
          "Photo session with the artist",
          "Overnight stay",
        ],
      },
    ],
  },
  {
    day: "04",
    title: "Farewell Cappadocia",
    tagline: "An unhurried morning. Nothing rushed.",
    image: "farewell",
    blocks: [
      {
        label: "Morning",
        icon: "coffee",
        items: [
          "Breakfast at the hotel",
          "Free time",
          "Optional shopping in Göreme",
          "Hotel check-out",
        ],
      },
      {
        label: "Departure",
        icon: "car",
        items: ["Private transfer to the airport or bus terminal"],
      },
    ],
  },
];


export const SERVICES = [
  { icon: "car", title: "Private Mercedes fleet", body: "Vito and Sprinter vehicles at your disposal for the entire programme." },
  { icon: "plane", title: "Airport transfers", body: "Arrival and departure, both airports, both bus terminals." },
  { icon: "guide", title: "Licensed guide", body: "A professional Cappadocia guide with you throughout the touring days." },
  { icon: "bed", title: "3 nights accommodation", body: "Cave suites in Ürgüp with valley-facing terraces." },
  { icon: "coffee", title: "Daily breakfast", body: "Served on the terrace, balloons overhead if the wind agrees." },
  { icon: "glass", title: "Welcome dinner", body: "The first evening, the whole group, one long table." },
  { icon: "pottery", title: "Pottery workshop", body: "Hands-on session with a master potter in Avanos." },
  { icon: "atv", title: "ATV safari", body: "Guided run through the valleys at golden hour." },
  { icon: "balloon", title: "Balloon viewing", body: "Sunrise viewing experience, subject to weather conditions." },
  {
    icon: "guitar",
    title: "Live Performance with Dimitris Isaris",
    body: "An intimate live acoustic performance created exclusively for this journey, accompanied by a cocktail and professional photo session.",
    featured: true,
    badge: "The main event",
  },
  { icon: "camera", title: "Photo session", body: "Professional images from the performance evening." },
  { icon: "star", title: "Event coordination", body: "A dedicated host managing every detail on the ground." },
];

/**
 * The eight photographs in /public/gallery. `focus` is the object-position
 * used when a tile crops the frame — each value was chosen from the actual
 * image so no face or principal subject is cut: the ATV rider, the potter,
 * Dimitris and the church architecture all stay clear of the edges.
 */
export const GALLERY = [
  {
    id: 1,
    src: "/gallery/01-atv-sunset.jpg",
    title: "ATV Sunset Experience",
    alt: "Guided ATV experience through Cappadocia during golden hour",
    focus: "48% 58%",
    span: "wide",
  },
  {
    id: 2,
    src: "/gallery/02-private-transfer.jpg",
    title: "Private Transfers",
    alt: "Private Mercedes transfer outside a Cappadocia cave hotel at sunrise",
    focus: "55% 55%",
  },
  {
    id: 3,
    src: "/gallery/03-pottery-workshop.jpg",
    title: "Pottery Workshop",
    alt: "Traditional Cappadocia pottery artisan working by hand",
    focus: "40% 38%",
  },
  {
    id: 4,
    src: "/gallery/04-cappadocia-church.jpg",
    title: "Cappadocia Heritage",
    alt: "Historic rock-cut church with preserved frescoes in Cappadocia",
    focus: "50% 42%",
  },
  {
    id: 5,
    src: "/gallery/05-balloon-terrace.jpg",
    title: "Balloon Sunrise",
    alt: "Terrace overlooking Cappadocia during a hot-air balloon sunrise",
    focus: "62% 48%",
  },
  {
    id: 6,
    src: "/gallery/06-cave-dinner.jpg",
    title: "Cave Dinner",
    alt: "Elegant candlelit private dinner inside a Cappadocia cave venue",
    focus: "50% 55%",
  },
  {
    id: 7,
    src: "/gallery/07-dimitris-live-performance.jpg",
    title: "Live Performance",
    alt: "Dimitris Isaris performing an intimate candlelit acoustic concert",
    focus: "50% 34%",
    span: "feature",
  },
  {
    id: 8,
    src: "/gallery/08-cappadocia-balloons.jpg",
    title:
      "Epic Cappadocia golden hour sunrise with hundreds of hot air balloons, high depth of field.",
    alt: "Epic Cappadocia golden-hour sunrise with hundreds of hot-air balloons and high depth of field",
    focus: "50% 45%",
  },
];

export const FAQ = [
  {
    q: "Are flights included?",
    a: "No. Flights are not included, allowing you the flexibility to choose the airline, schedule and travel class that best suits your preferences.",
  },
  {
    q: "Is the hot-air balloon ride included?",
    a: "No. The hot-air balloon flight is optional and can be arranged separately, subject to weather conditions and availability.",
  },
  {
    q: "Can I book a private room?",
    a: "Yes. A limited number of private rooms are available for an additional supplement, subject to availability.",
  },
  {
    q: "What happens if I need to cancel?",
    a: "Our cancellation policy is outlined in the Booking Terms & Conditions. If you have any questions before booking, we'll be happy to assist you.",
  },
  {
    q: "Do I need travel insurance?",
    a: "Travel insurance is highly recommended to protect you against unexpected events before or during your journey.",
  },
];

