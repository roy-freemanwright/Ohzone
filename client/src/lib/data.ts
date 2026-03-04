export type ServiceCategory = "Medical" | "Non-Medical";

export interface Service {
  id: string;
  slug: string;
  name: string;
  description: string;
  shortDescription: string;
  category: ServiceCategory;
  duration: string;
  intensity: "Gentle" | "Moderate" | "Intense";
  tags: string[];
  imageUrl?: string;
}

export interface Goal {
  id: string;
  title: string;
  description: string;
  slug: string;
  relatedTags: string[];
}

export const goals: Goal[] = [
  {
    id: "detox",
    title: "Detox & Reset",
    description: "e.g., Ozone Sauna, HOCATT, Lymphatic LET",
    slug: "detox-reset",
    relatedTags: ["Detox", "Cleanse", "Lymphatic", "Sauna"],
  },
  {
    id: "pain",
    title: "Pain Relief & Recovery",
    description: "e.g., Prolozone, Infrared Sauna",
    slug: "pain-relief",
    relatedTags: ["Pain", "Recovery", "Joints", "Muscle"],
  },
  {
    id: "energy",
    title: "Energy & Performance",
    description: "e.g., Vitamin IV, NAD+ Injections",
    slug: "energy-performance",
    relatedTags: ["Energy", "Brain", "Oxygen", "Performance"],
  },
  {
    id: "longevity",
    title: "Longevity & Optimization",
    description: "e.g., EBO2 Therapy, Ozone IV",
    slug: "longevity",
    relatedTags: ["Longevity", "Anti-aging", "Cellular"],
  },
  {
    id: "skin",
    title: "Skin & Aesthetics",
    description: "e.g., Microneedling, Exosomes, Plasma Pen",
    slug: "skin-aesthetics",
    relatedTags: ["Skin", "Beauty", "Face", "Collagen"],
  },
  {
    id: "weight",
    title: "Weight & Metabolic",
    description: "e.g., Weight Loss Injections",
    slug: "weight-metabolic",
    relatedTags: ["Weight Loss", "Metabolism", "Fat Loss"],
  },
];

export const services: Service[] = [
  // Clinic
  {
    id: "ozone-sauna",
    slug: "ozone-sauna-level-one",
    name: "Ozone Sauna (Level One)",
    shortDescription: "A gentle introduction to ozone therapy combined with steam.",
    description: "Experience the detoxifying power of ozone delivered through a comfortable steam sauna. This Level One therapy helps eliminate toxins, boost immunity, and improve circulation.",
    category: "Non-Medical",
    duration: "30 min",
    intensity: "Moderate",
    tags: ["Detox", "Sauna", "Immunity", "Skin"],
  },
  {
    id: "hocatt",
    slug: "hocatt-sauna-level-two",
    name: "HOCATT Sauna (Level Two)",
    shortDescription: "The ultimate bio-chamber for detoxification and energy.",
    description: "HOCATT stands for Hyperthermic Ozone and Carbonic Acid Transdermal Technology. It delivers 10 modalities in one session for profound detoxification and cellular regeneration.",
    category: "Non-Medical",
    duration: "30 min",
    intensity: "Intense",
    tags: ["Detox", "Sauna", "Energy", "Recovery", "Weight Loss"],
  },
  {
    id: "infrared",
    slug: "far-infrared-sauna",
    name: "Far Infrared Sauna",
    shortDescription: "Deep tissue heating for relaxation and sweat.",
    description: "Unlike traditional saunas, infrared heat penetrates deep into tissues to mobilize toxins, reduce inflammation, and promote deep relaxation.",
    category: "Non-Medical",
    duration: "45 min",
    intensity: "Gentle",
    tags: ["Detox", "Relaxation", "Pain"],
  },
  {
    id: "theta",
    slug: "theta-chamber",
    name: "Theta Chamber",
    shortDescription: "Neurological balance and stress reduction.",
    description: "Using light, sound, and motion to induce a Theta brainwave state, helping to rewire neural pathways and reduce stress and anxiety.",
    category: "Non-Medical",
    duration: "30 min",
    intensity: "Gentle",
    tags: ["Brain", "Mental Health", "Relaxation"],
  },
  {
    id: "lymph",
    slug: "lymphatic-let-therapy",
    name: "Lymphatic LET Therapy",
    shortDescription: "Targeted lymphatic drainage using light and energy.",
    description: "Lymphatic Enhancement Technology (LET) uses electronic and light energy to clear lymphatic congestion and improve fluid flow.",
    category: "Non-Medical",
    duration: "60 min",
    intensity: "Gentle",
    tags: ["Lymphatic", "Detox", "Recovery"],
  },
  {
    id: "flowpresso",
    slug: "flowpresso",
    name: "Flowpresso Lymphatic Compression",
    shortDescription: "3-in-1 sensory treatment for flow and relaxation.",
    description: "Combines compression, thermodynamic heat, and deep pressure to encourage lymph flow and calm the nervous system.",
    category: "Non-Medical",
    duration: "45 min",
    intensity: "Gentle",
    tags: ["Lymphatic", "Relaxation", "Recovery"],
  },
  
  // Medical
  {
    id: "iv-vitamin",
    slug: "vitamin-iv-treatments",
    name: "Vitamin IV Treatments",
    shortDescription: "Direct nutrient infusion for maximum absorption.",
    description: "Customized IV drips to replenish hydration, vitamins, and minerals instantly, bypassing the digestive system.",
    category: "Medical",
    duration: "45-60 min",
    intensity: "Gentle",
    tags: ["Energy", "Immunity", "Hydration", "Recovery"],
  },
  {
    id: "iv-ozone",
    slug: "ozone-iv-treatments",
    name: "Ozone IV Treatments",
    shortDescription: "Systemic oxygenation and immune modulation.",
    description: "Medical-grade ozone therapy administered intravenously to combat pathogens and reduce systemic inflammation.",
    category: "Medical",
    duration: "60 min",
    intensity: "Moderate",
    tags: ["Immunity", "Detox", "Longevity"],
  },
  {
    id: "eb02",
    slug: "eb02-therapy",
    name: "EBO2 Therapy",
    shortDescription: "Advanced blood filtration and oxygenation.",
    description: "Extracorporeal Blood Oxygenation and Ozonation. A sophisticated filtration process that removes debris and oxygenates the blood.",
    category: "Medical",
    duration: "90 min",
    intensity: "Intense",
    tags: ["Longevity", "Detox", "Heart Health"],
  },
  {
    id: "weight-injections",
    slug: "weight-loss-injections",
    name: "Weight Loss Injections",
    shortDescription: "Medically supervised metabolic support.",
    description: "Targeted treatments to support metabolic health and assist with weight management goals.",
    category: "Medical",
    duration: "15 min",
    intensity: "Gentle",
    tags: ["Weight Loss", "Metabolism"],
  },

  // Aesthetics
  {
    id: "plasma-pen",
    slug: "plasma-skin-rejuvenation",
    name: "Plasma Skin Rejuvenation",
    shortDescription: "Non-surgical skin tightening and resurfacing.",
    description: "Uses plasma energy to tighten skin, reduce wrinkles, and improve texture without invasive surgery.",
    category: "Non-Medical",
    duration: "60 min",
    intensity: "Moderate",
    tags: ["Skin", "Anti-aging", "Beauty"],
  },
  {
    id: "microneedling",
    slug: "microneedling-treatments",
    name: "Microneedling",
    shortDescription: "Collagen induction therapy for smoother skin.",
    description: "Stimulates natural collagen production to treat scars, fine lines, and texture issues.",
    category: "Non-Medical",
    duration: "45 min",
    intensity: "Moderate",
    tags: ["Skin", "Collagen", "Beauty"],
  },
  {
    id: "exosomes",
    slug: "exosome-treatments",
    name: "Exosome Treatments",
    shortDescription: "Cellular signaling for potent regeneration.",
    description: "Topical or injectable exosomes that signal your skin cells to repair and regenerate.",
    category: "Non-Medical",
    duration: "30 min",
    intensity: "Gentle",
    tags: ["Skin", "Regeneration", "Anti-aging"],
  },

  // Regenerative
  {
    id: "prolozone",
    slug: "prolozone-pain-relief",
    name: "Prolozone Pain Relief",
    shortDescription: "Ozone injection therapy for joint pain.",
    description: "Combines ozone and nutrients injected into joints to reduce inflammation and stimulate healing.",
    category: "Non-Medical",
    duration: "30 min",
    intensity: "Moderate",
    tags: ["Pain", "Joints", "Recovery"],
  },
  {
    id: "nad",
    slug: "nad-injection-program",
    name: "NAD+ Injection Program",
    shortDescription: "Cellular energy restoration.",
    description: "NAD+ is crucial for mitochondrial health. Injections help restore levels for better energy and cognitive function.",
    category: "Non-Medical",
    duration: "15 min",
    intensity: "Gentle",
    tags: ["Energy", "Brain", "Longevity"],
  },
];
