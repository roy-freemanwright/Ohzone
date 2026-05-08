export type ServiceCategory = "Medical" | "Non-Medical";

export interface Service {
  id: string;
  slug: string;
  name: string;
  description: string;
  shortDescription: string;
  detailedDescription?: string;
  howItWorks?: string[];
  benefits?: string[];
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
  { id: "detox", title: "Detox & Reset", description: "e.g., Ozone Sauna, HOCATT, Lymphatic LET", slug: "detox-reset", relatedTags: ["Detox", "Cleanse", "Lymphatic", "Sauna"] },
  { id: "pain", title: "Pain Relief & Recovery", description: "e.g., Prolozone, Infrared Sauna", slug: "pain-relief", relatedTags: ["Pain", "Recovery", "Joints", "Muscle"] },
  { id: "energy", title: "Energy & Performance", description: "e.g., Vitamin IV, NAD+ Injections", slug: "energy-performance", relatedTags: ["Energy", "Brain", "Oxygen", "Performance"] },
  { id: "longevity", title: "Longevity & Optimization", description: "e.g., EBO2 Therapy, Ozone IV", slug: "longevity", relatedTags: ["Longevity", "Anti-aging", "Cellular"] },
  { id: "skin", title: "Skin & Aesthetics", description: "e.g., Microneedling, Exosomes, Plasma Pen", slug: "skin-aesthetics", relatedTags: ["Skin", "Beauty", "Face", "Collagen"] },
  { id: "weight", title: "Weight & Metabolic", description: "e.g., Weight Loss Injections", slug: "weight-metabolic", relatedTags: ["Weight Loss", "Metabolism", "Fat Loss"] },
];

export const services: Service[] = [
  {
    id: "ozone-sauna",
    slug: "ozone-sauna-level-one",
    name: "Ozone Sauna (Level One)",
    shortDescription: "A gentle introduction to ozone therapy combined with steam.",
    description: "Experience the detoxifying power of ozone delivered through a comfortable steam sauna. This Level One therapy helps eliminate toxins, boost immunity, and improve circulation.",
    detailedDescription: "The Level One Ozone Sauna is a specialized steam chamber that infuses medical-grade ozone gas (O3) into the environment. As the gentle steam opens your pores, the ozone is absorbed transdermally, introducing active oxygen directly into your system.",
    howItWorks: [
      "You sit comfortably in the sauna cabinet with your head exposed to room air.",
      "Gentle steam raises your core body temperature and opens your pores.",
      "Ozone gas is introduced into the chamber and absorbed through the skin.",
      "The active oxygen binds to toxins and impurities, allowing your body to sweat them out naturally."
    ],
    benefits: [
      "Accelerates the detoxification of heavy metals and chemicals",
      "Stimulates the immune system and white blood cell production",
      "Improves blood circulation and oxygen delivery to tissues",
      "Promotes clear, healthy, and radiant skin",
      "Aids in deep relaxation and stress reduction"
    ],
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
    detailedDescription: "The HOCATT (Hyperthermic Ozone and Carbonic Acid Transdermal Technology) is our premier bio-chamber. It simultaneously delivers up to 10 potent modalities, including ozone, carbonic acid, PEMF, and far infrared, for a comprehensive full-body reset.",
    howItWorks: [
      "Carbonic acid is first introduced to sedate the nervous system and dilate blood vessels.",
      "The chamber fills with medical-grade ozone, which is rapidly absorbed into the highly oxygenated tissues.",
      "Simultaneously, pulsed electromagnetic fields (PEMF) and photon light therapies run to enhance cellular energy.",
      "The entire process works synergistically to drastically improve cellular function and detox pathways in just 30 minutes."
    ],
    benefits: [
      "Massively boosts cellular energy and mitochondrial function",
      "Provides profound, deep-tissue detoxification",
      "Dramatically reduces systemic inflammation and pain",
      "Accelerates recovery from intense physical activity or injury",
      "Stimulates metabolism to assist in weight management"
    ],
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
    detailedDescription: "Our Far Infrared Sauna utilizes light to create heat that penetrates deeply into your tissues, muscles, and joints. Unlike traditional saunas that heat the air, infrared heats your body directly, providing a more comfortable and highly effective detoxifying sweat.",
    howItWorks: [
      "You relax in our custom cedar infrared sauna cabin.",
      "Infrared light waves penetrate up to an inch and a half into your skin.",
      "This deep heat raises your core temperature from within, mobilizing toxins stored in fat cells.",
      "Your body produces a profuse, detoxifying sweat at a much lower, more comfortable ambient temperature."
    ],
    benefits: [
      "Provides a deep, highly effective cellular detox",
      "Relieves chronic muscle and joint pain",
      "Improves cardiovascular health and circulation",
      "Supports clear, glowing skin through deep pore cleansing",
      "Promotes parasympathetic relaxation and improved sleep"
    ],
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
    detailedDescription: "The Theta Chamber is a breakthrough in neurological wellness. It uses precisely synchronized light, sound, and micro-currents to guide your brain into the Theta state—the deeply relaxed state normally achieved just before sleep or in deep meditation.",
    howItWorks: [
      "You rest comfortably in the specialized chamber.",
      "Binaural beats and cranial electrical stimulation are applied to harmonize brain waves.",
      "Visual light patterns encourage the brain to shift from active (Beta) to deeply relaxed (Theta) states.",
      "This process helps rewire neural pathways, reducing cortisol and stress responses."
    ],
    benefits: [
      "Significantly reduces anxiety, stress, and symptoms of PTSD",
      "Improves overall sleep quality and helps combat insomnia",
      "Enhances mental clarity, focus, and cognitive function",
      "Promotes deep, restorative relaxation",
      "Aids in balancing mood and emotional regulation"
    ],
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
    detailedDescription: "Lymphatic Enhancement Technology (LET) is an advanced therapy that uses acoustic and light energy to gently stimulate the lymphatic system. This encourages the drainage of congested fluids and the removal of cellular waste.",
    howItWorks: [
      "A specialized wand emitting low-frequency acoustic and light energy is glided over the skin.",
      "The energy gently breaks down congested proteins and blockages within the lymphatic vessels.",
      "This stimulates the natural flow of lymph fluid toward the lymph nodes.",
      "Cellular waste and toxins are then naturally flushed out of the body."
    ],
    benefits: [
      "Dramatically reduces swelling, edema, and fluid retention",
      "Enhances immune system function by clearing lymphatic pathways",
      "Accelerates recovery post-surgery or post-injury",
      "Improves skin tone and reduces the appearance of cellulite",
      "Provides a deeply soothing, massage-like experience"
    ],
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
    detailedDescription: "Flowpresso is a uniquely integrated sensory treatment that combines deep pressure compression, thermodynamic heat, and targeted relaxation techniques to optimize lymphatic flow and calm the nervous system.",
    howItWorks: [
      "You are wrapped in a specialized suit with multiple compression chambers.",
      "The suit sequentially inflates and deflates, mimicking the body's natural lymphatic pumping.",
      "Gentle thermodynamic heat is applied to further relax tissues and enhance blood flow.",
      "The combined sensory input shifts the body into a profound state of rest and digest."
    ],
    benefits: [
      "Promotes excellent lymphatic drainage and reduces swelling",
      "Forces the nervous system into a deep state of relaxation",
      "Enhances overall sleep quality and recovery",
      "Relieves muscular tension and fatigue",
      "Improves circulation and cardiovascular function"
    ],
    category: "Non-Medical",
    duration: "45 min",
    intensity: "Gentle",
    tags: ["Lymphatic", "Relaxation", "Recovery"],
  },
  {
    id: "iv-vitamin",
    slug: "vitamin-iv-treatments",
    name: "Vitamin IV Treatments",
    shortDescription: "Direct nutrient infusion for maximum absorption.",
    description: "Customized IV drips to replenish hydration, vitamins, and minerals instantly, bypassing the digestive system.",
    detailedDescription: "Our Vitamin IV Treatments deliver high-quality vitamins, minerals, and amino acids directly into your bloodstream. This bypasses the digestive tract, ensuring 100% absorption for immediate cellular utilization and hydration.",
    howItWorks: [
      "A medical professional customizes an IV drip based on your specific health goals.",
      "The nutrient-rich solution is administered intravenously over 45-60 minutes.",
      "Nutrients instantly flood your cells, bypassing digestive malabsorption issues.",
      "Your body immediately utilizes the vitamins for energy production, immunity, and repair."
    ],
    benefits: [
      "Provides instant, profound hydration",
      "Dramatically boosts energy levels and combats fatigue",
      "Strengthens the immune system to fight off illness",
      "Replenishes essential nutrient deficiencies quickly",
      "Accelerates recovery from illness, jet lag, or physical exertion"
    ],
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
    detailedDescription: "Ozone IV Therapy, also known as Major Autohemotherapy (MAH), is a powerful treatment where your blood is enriched with medical-grade ozone. This highly active form of oxygen modulates the immune system and destroys pathogens.",
    howItWorks: [
      "A small amount of your blood is safely drawn into a sterile, closed system.",
      "Medical-grade ozone gas is precisely mixed with the blood.",
      "The ozonated, highly oxygenated blood is then safely reinfused back into your body.",
      "The ozone triggers a cascade of positive immune and healing responses systemicly."
    ],
    benefits: [
      "Potent anti-viral, anti-bacterial, and anti-fungal properties",
      "Significantly reduces systemic, chronic inflammation",
      "Stimulates oxygen metabolism and cellular energy production",
      "Enhances overall immune system function and resilience",
      "Supports healthy aging and longevity protocols"
    ],
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
    detailedDescription: "EBO2 (Extracorporeal Blood Oxygenation and Ozonation) is an advanced blood filtration protocol. It removes cellular debris, heavy metals, and toxins while intensely oxygenating and ozonating the blood, acting as a massive systemic reset.",
    howItWorks: [
      "Blood is drawn and passed through a specialized, high-tech filtration membrane.",
      "The filter removes inflammatory proteins, cellular waste, and environmental toxins.",
      "The cleaned blood is then enriched with medical-grade ozone and pure oxygen.",
      "The highly purified, oxygen-rich blood is returned to your circulatory system."
    ],
    benefits: [
      "Provides unparalleled systemic detoxification and blood purification",
      "Massively improves cardiovascular function and blood flow",
      "Reduces high levels of systemic inflammation and autoimmune flare-ups",
      "Supercharges cellular energy and mitochondrial health",
      "Optimizes cognitive function and clears brain fog"
    ],
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
    detailedDescription: "Our medical weight loss injections utilize clinically proven compounds (such as GLP-1 agonists or lipotropic blends) to optimize metabolism, balance blood sugar, and support sustainable, healthy fat loss.",
    howItWorks: [
      "Following a medical consultation, a customized injection protocol is prescribed.",
      "The medications work by slowing gastric emptying and regulating insulin.",
      "This leads to reduced appetite, diminished cravings, and improved metabolic function.",
      "Administered regularly alongside lifestyle guidance for optimal results."
    ],
    benefits: [
      "Effectively suppresses appetite and reduces food cravings",
      "Improves insulin sensitivity and blood sugar regulation",
      "Promotes steady, sustainable weight and fat loss",
      "Enhances overall metabolic function and energy",
      "Reduces the risk of obesity-related health conditions"
    ],
    category: "Medical",
    duration: "15 min",
    intensity: "Gentle",
    tags: ["Weight Loss", "Metabolism"],
  },
  {
    id: "plasma-pen",
    slug: "plasma-skin-rejuvenation",
    name: "Plasma Skin Rejuvenation",
    shortDescription: "Non-surgical skin tightening and resurfacing.",
    description: "Uses plasma energy to tighten skin, reduce wrinkles, and improve texture without invasive surgery.",
    detailedDescription: "Plasma Skin Rejuvenation uses a specialized pen to create a micro-electrical discharge (plasma arc) on the skin's surface. This stimulates an immediate tightening effect and triggers intense long-term collagen production.",
    howItWorks: [
      "A topical numbing cream is applied to ensure comfort.",
      "The Plasma Pen creates a tiny arc of ionized gas just above the skin without touching it.",
      "This micro-trauma causes immediate tissue contraction and tightening.",
      "Over the following weeks, the body naturally produces new collagen and elastin."
    ],
    benefits: [
      "Provides non-surgical skin tightening and lifting",
      "Significantly reduces fine lines, wrinkles, and crow's feet",
      "Improves overall skin texture and tone",
      "Helps diminish the appearance of acne scars and stretch marks",
      "Offers long-lasting results compared to traditional surface treatments"
    ],
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
    detailedDescription: "Microneedling, or Collagen Induction Therapy, involves the use of tiny, sterile needles to create micro-punctures in the skin. This natural healing process beautifully improves skin texture, tone, and firmness.",
    howItWorks: [
      "A topical anesthetic is applied for maximum comfort.",
      "A medical-grade device creates thousands of controlled micro-channels in the skin.",
      "These micro-injuries trigger the skin's natural healing cascade.",
      "The body responds by producing high levels of fresh collagen and elastin."
    ],
    benefits: [
      "Naturally stimulates robust collagen and elastin production",
      "Dramatically improves the appearance of acne scars and enlarged pores",
      "Reduces fine lines, wrinkles, and hyperpigmentation",
      "Enhances the absorption and efficacy of topical skincare products",
      "Results in a smoother, firmer, and more radiant complexion"
    ],
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
    detailedDescription: "Exosome therapy is the frontier of cellular regeneration. Exosomes are powerful signaling vesicles derived from stem cells that instruct your older, damaged skin or hair cells to repair and act youthful again.",
    howItWorks: [
      "Highly concentrated, purified exosomes are applied topically or injected.",
      "They are often paired with microneedling to ensure deep penetration.",
      "The exosomes deliver growth factors, proteins, and mRNA directly to target cells.",
      "They 'reprogram' older cells, instructing them to regenerate and heal rapidly."
    ],
    benefits: [
      "Provides exponentially faster healing than traditional treatments alone",
      "Massively boosts collagen and elastin production for anti-aging",
      "Significantly reduces inflammation and redness post-procedure",
      "Repairs severely sun-damaged or aging skin at a cellular level",
      "Stimulates dormant hair follicles in hair restoration protocols"
    ],
    category: "Non-Medical",
    duration: "30 min",
    intensity: "Gentle",
    tags: ["Skin", "Regeneration", "Anti-aging"],
  },
  {
    id: "prolozone",
    slug: "prolozone-pain-relief",
    name: "Prolozone Pain Relief",
    shortDescription: "Ozone injection therapy for joint pain.",
    description: "Combines ozone and nutrients injected into joints to reduce inflammation and stimulate healing.",
    detailedDescription: "Prolozone Pain Relief is a highly effective, non-surgical injection therapy. It combines ozone gas with healing nutrients to regenerate damaged joints, ligaments, and tendons, resolving chronic pain at its source.",
    howItWorks: [
      "A mixture of vitamins, minerals, and anesthetics is injected into the painful joint or tissue.",
      "This reduces immediate pain and provides raw materials for healing.",
      "Medical-grade ozone gas is then injected into the exact same area.",
      "The ozone stimulates circulation, reduces inflammation, and triggers profound tissue regeneration."
    ],
    benefits: [
      "Provides rapid, lasting relief from chronic joint and muscle pain",
      "Stimulates the actual regeneration of cartilage and connective tissues",
      "Often helps patients avoid invasive joint replacement surgeries",
      "Reduces targeted inflammation and swelling instantly",
      "Improves overall joint mobility and physical function"
    ],
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
    detailedDescription: "NAD+ (Nicotinamide Adenine Dinucleotide) is a critical coenzyme found in every cell. Our NAD+ injections directly replenish these levels, acting as ultimate fuel to restore mitochondrial function, energy, and brain health.",
    howItWorks: [
      "Pure, potent NAD+ is administered via a quick intramuscular injection or IV.",
      "The coenzyme immediately enters your systemic circulation.",
      "It is rapidly taken up by your cells' mitochondria (the powerhouses).",
      "It facilitates massive cellular repair, DNA protection, and ATP (energy) production."
    ],
    benefits: [
      "Dramatically improves mental clarity, focus, and cognitive function",
      "Significantly boosts physical and cellular energy levels",
      "Supports DNA repair and promotes anti-aging at the cellular level",
      "Aids in addiction recovery and reducing cravings",
      "Helps combat chronic fatigue and systemic exhaustion"
    ],
    category: "Non-Medical",
    duration: "15 min",
    intensity: "Gentle",
    tags: ["Energy", "Brain", "Longevity"],
  },
  {
    id: "vitamin-injections",
    slug: "vitamin-injections",
    name: "Vitamin Injections",
    shortDescription: "Quick nutrient boost for optimal health.",
    description: "Targeted intramuscular injections delivering essential vitamins and minerals directly into your system for quick absorption and immediate benefits.",
    detailedDescription: "Vitamin injections provide a rapid, highly effective way to deliver essential nutrients like B12, Vitamin D, or Glutathione directly into the muscle, ensuring total absorption for a quick wellness boost.",
    howItWorks: [
      "A specific vitamin or nutrient blend is selected based on your needs.",
      "It is quickly and relatively painlessly injected into the muscle.",
      "The nutrients bypass the digestive system entirely.",
      "They enter the bloodstream for immediate, maximum cellular absorption."
    ],
    benefits: [
      "Ensures 100% absorption of vital nutrients",
      "Quickly corrects vitamin deficiencies (like B12 or D3)",
      "Provides an immediate, noticeable boost in energy",
      "Supports a strong, responsive immune system",
      "Enhances mood, metabolism, and overall vitality"
    ],
    category: "Medical",
    duration: "10 min",
    intensity: "Gentle",
    tags: ["Energy", "Immunity", "Recovery"],
  },
  {
    id: "peptide-injections",
    slug: "peptide-injections",
    name: "Peptide Injections",
    shortDescription: "Advanced cellular signaling molecules.",
    description: "Targeted peptide therapies designed to naturally stimulate cellular repair, promote anti-aging, enhance recovery, and optimize overall metabolic function.",
    detailedDescription: "Peptides are short chains of amino acids that act as specific signaling molecules in the body. Our peptide therapies (like BPC-157) instruct your body to accelerate healing, burn fat, or build muscle naturally.",
    howItWorks: [
      "A specific peptide is chosen to target your unique health goal (e.g., healing, weight loss).",
      "The peptide is administered via a small subcutaneous injection.",
      "It travels to specific receptors in the body, sending targeted signals.",
      "These signals trigger your body's own natural processes for repair, hormone release, or metabolism."
    ],
    benefits: [
      "Accelerates the healing of stubborn injuries, tendons, and gut issues",
      "Promotes healthy, sustainable weight loss and fat burning",
      "Enhances natural growth hormone production for anti-aging",
      "Improves muscle recovery and physical performance",
      "Supports optimal sleep quality and cognitive function"
    ],
    category: "Medical",
    duration: "15 min",
    intensity: "Gentle",
    tags: ["Anti-aging", "Recovery", "Weight Loss", "Longevity"],
  },
  {
    id: "luma-elite-iv",
    slug: "luma-elite-iv",
    name: "Luma Elite IV",
    shortDescription: "Our premier comprehensive IV therapy.",
    description: "The ultimate intravenous cocktail loaded with premium vitamins, minerals, and antioxidants to profoundly revitalize, hydrate, and support immune function.",
    detailedDescription: "The Luma Elite IV is our most comprehensive, premium intravenous therapy. It features a robust, carefully balanced cocktail of essential vitamins, minerals, amino acids, and high-dose antioxidants for ultimate revitalization.",
    howItWorks: [
      "A thorough consultation determines if this premier IV is right for you.",
      "The specialized, highly concentrated nutrient blend is prepared.",
      "It is infused intravenously over 60 minutes for maximum systemic distribution.",
      "The comprehensive blend addresses multiple wellness vectors simultaneously."
    ],
    benefits: [
      "Provides ultimate, whole-body hydration and nutrient replenishment",
      "Massively boosts immune defense and recovery capabilities",
      "Promotes deep cellular detoxification and antioxidant protection",
      "Enhances skin radiance and overall physical vitality",
      "Combats extreme fatigue, stress, and systemic burnout"
    ],
    category: "Medical",
    duration: "60 min",
    intensity: "Moderate",
    tags: ["Energy", "Immunity", "Detox", "Longevity"],
  },
  {
    id: "functional-medical-testing",
    slug: "functional-medical-testing",
    name: "Functional Medical Testing",
    shortDescription: "Comprehensive biomarker and health analysis.",
    description: "In-depth functional lab testing to identify root causes of symptoms, uncover nutritional deficiencies, and guide your personalized wellness protocol.",
    detailedDescription: "Functional Medical Testing goes beyond standard blood work to uncover the root causes of symptoms. We analyze detailed biomarkers, hormones, gut health, and nutrient levels to create a truly personalized healing protocol.",
    howItWorks: [
      "We discuss your health history, symptoms, and wellness goals.",
      "Specific functional tests (blood, saliva, urine, or stool) are ordered.",
      "The comprehensive results are thoroughly analyzed by our medical team.",
      "We build a targeted, actionable treatment plan based precisely on your unique biology."
    ],
    benefits: [
      "Identifies the actual root cause of chronic, unresolved symptoms",
      "Reveals hidden nutritional deficiencies and hormonal imbalances",
      "Assesses gut microbiome health and hidden food sensitivities",
      "Removes the guesswork from your wellness and supplement routine",
      "Empowers you with accurate data to optimize your health"
    ],
    category: "Medical",
    duration: "30 min",
    intensity: "Gentle",
    tags: ["Testing", "Wellness", "Detox"],
  },
  {
    id: "curewave-laser",
    slug: "curewave-laser-treatments",
    name: "Curewave Laser Treatments",
    shortDescription: "Advanced laser therapy for pain relief.",
    description: "Cutting-edge laser technology that penetrates deep into tissues to reduce inflammation, accelerate cellular repair, and provide effective pain relief.",
    detailedDescription: "Curewave Laser Therapy is a breakthrough in pain management. This high-intensity, continuous wave laser penetrates deeply into tissues to rapidly reduce inflammation and accelerate cellular repair without any discomfort.",
    howItWorks: [
      "The specialized Curewave laser wand is applied to the area of pain or injury.",
      "Light energy penetrates deeply into muscles, tendons, and joints.",
      "The energy stimulates the mitochondria, massively increasing ATP (cellular energy) production.",
      "This cascade rapidly reduces inflammation and forces accelerated tissue healing."
    ],
    benefits: [
      "Provides rapid, non-invasive relief from acute and chronic pain",
      "Significantly reduces local inflammation and deep tissue swelling",
      "Accelerates the healing of sports injuries, strains, and sprains",
      "Improves range of motion and joint flexibility",
      "Completely painless therapy with zero required downtime"
    ],
    category: "Medical",
    duration: "30 min",
    intensity: "Gentle",
    tags: ["Pain", "Recovery", "Joints"],
  },
  {
    id: "methylene-blue",
    slug: "methylene-blue",
    name: "Methylene Blue",
    shortDescription: "Mitochondrial optimization and brain health.",
    description: "A potent cognitive enhancer and metabolic optimizer that supports mitochondrial function, increases cellular energy, and provides neuroprotective benefits.",
    detailedDescription: "Methylene Blue is a potent, medical-grade compound known for its incredible ability to optimize mitochondrial function. It acts as an electron donor, supercharging cellular energy and providing immense neuroprotection.",
    howItWorks: [
      "Methylene Blue is administered via IV or specialized oral protocols.",
      "It rapidly concentrates in energy-demanding tissues, particularly the brain and heart.",
      "It directly donates electrons to the mitochondrial electron transport chain.",
      "This dramatically increases ATP (energy) production while acting as a powerful antioxidant."
    ],
    benefits: [
      "Sharply enhances cognitive function, memory, and mental focus",
      "Provides robust neuroprotection against age-related decline",
      "Supercharges overall physical and cellular energy levels",
      "Acts as a potent, deep-tissue antioxidant",
      "Aids in overcoming chronic fatigue and mitochondrial dysfunction"
    ],
    category: "Medical",
    duration: "45 min",
    intensity: "Gentle",
    tags: ["Brain", "Energy", "Longevity"],
  },
  {
    id: "ez-gel",
    slug: "ez-gel",
    name: "EZ Gel",
    shortDescription: "100% natural, regenerative bio-filler.",
    description: "An innovative, all-natural autologous filler made from your own blood proteins and growth factors to restore volume and rejuvenate the skin.",
    detailedDescription: "EZ Gel is the ultimate natural bio-filler. By utilizing your body's own Platelet-Rich Fibrin (PRF) and albumin, we create a 100% natural, autologous gel that restores volume and powerfully rejuvenates the skin without synthetic chemicals.",
    howItWorks: [
      "A small sample of your blood is drawn.",
      "It is spun in a specialized centrifuge to isolate potent growth factors and albumin.",
      "These natural components are gently heated and cooled to form a smooth, injectable gel.",
      "The EZ Gel is strategically injected to restore volume and stimulate collagen."
    ],
    benefits: [
      "100% natural and autologous, eliminating the risk of allergic reactions",
      "Provides immediate, beautiful volume restoration to the face",
      "Continuously releases growth factors to drastically improve skin quality over time",
      "Perfect for delicate areas like the under-eyes and tear troughs",
      "Promotes long-term collagen and elastin regeneration"
    ],
    category: "Non-Medical",
    duration: "45 min",
    intensity: "Moderate",
    tags: ["Skin", "Beauty", "Anti-aging", "Regeneration"],
  },
  {
    id: "collagen-stimulation",
    slug: "collagen-stimulation-treatments",
    name: "Collagen Stimulation",
    shortDescription: "Treatments to boost natural collagen.",
    description: "Targeted therapies designed to trigger your body's natural collagen production, resulting in firmer, smoother, and more youthful-looking skin.",
    detailedDescription: "Our Collagen Stimulation treatments (using bio-stimulators like Sculptra or Radiesse) go beyond merely filling wrinkles. They act as a catalyst, triggering your body to produce its own robust, natural collagen for long-lasting, structural facial rejuvenation.",
    howItWorks: [
      "A specialized bio-stimulating compound is expertly injected deep into the dermal layers.",
      "The micro-particles provide an immediate scaffolding effect.",
      "Over the following months, the particles stimulate your body's natural collagen production.",
      "The compound safely absorbs, leaving behind a strong network of your own new collagen."
    ],
    benefits: [
      "Restores deep underlying facial volume and structural support",
      "Results in highly natural-looking, gradual rejuvenation",
      "Effects are exceptionally long-lasting, often up to two years",
      "Significantly improves overall skin firmness and elasticity",
      "Treats the root cause of facial aging (collagen loss) rather than just the symptoms"
    ],
    category: "Non-Medical",
    duration: "45 min",
    intensity: "Moderate",
    tags: ["Skin", "Beauty", "Anti-aging"],
  },
  {
    id: "glutathione",
    slug: "glutathione",
    name: "Glutathione Treatments",
    shortDescription: "The master antioxidant for skin and detox.",
    description: "Powerful antioxidant therapies that promote cellular detoxification, boost immune function, and provide a radiant, glowing complexion.",
    detailedDescription: "Known as the body's 'Master Antioxidant,' Glutathione is vital for cellular health and detoxification. Our high-dose Glutathione treatments rapidly neutralize free radicals, clear toxins, and promote a brilliantly radiant complexion.",
    howItWorks: [
      "Pure, high-dose Glutathione is administered directly via IV push or drip.",
      "It bypasses the digestive system (where oral glutathione is often destroyed).",
      "It immediately begins binding to heavy metals, free radicals, and toxins.",
      "The neutralized toxins are safely processed by the liver and excreted."
    ],
    benefits: [
      "Provides supreme, full-body cellular detoxification",
      "Promotes a bright, glowing, and more even skin tone",
      "Potently supports and protects liver health and function",
      "Dramatically reduces oxidative stress and cellular damage",
      "Bolsters the immune system against illness and environmental stressors"
    ],
    category: "Non-Medical",
    duration: "30 min",
    intensity: "Gentle",
    tags: ["Skin", "Detox", "Immunity", "Beauty"],
  },
  {
    id: "fillers-botox",
    slug: "fillers",
    name: "Botox & Fillers",
    shortDescription: "Expert injectable aesthetic treatments.",
    description: "Expertly administered neurotoxins and dermal fillers to smooth wrinkles, restore lost volume, and beautifully enhance your natural facial contours.",
    detailedDescription: "Our expert aesthetic injectables include premium neuromodulators (like Botox) and hyaluronic acid dermal fillers. These treatments are artfully customized to smooth dynamic wrinkles, restore lost facial volume, and beautifully balance your natural features.",
    howItWorks: [
      "A comprehensive facial assessment determines the precise treatment plan.",
      "Neuromodulators are used to gently relax the specific muscles causing dynamic wrinkles.",
      "Dermal fillers are strategically placed to restore volume, contour, and lift.",
      "The result is a refreshed, rested, and naturally youthful appearance."
    ],
    benefits: [
      "Effectively smooths fine lines, crow's feet, and deep forehead wrinkles",
      "Restores youthful volume to cheeks, lips, and the mid-face",
      "Enhances natural facial contours and symmetry",
      "Provides immediate, highly satisfying aesthetic results",
      "Requires little to no downtime, allowing a quick return to daily activities"
    ],
    category: "Non-Medical",
    duration: "30 min",
    intensity: "Moderate",
    tags: ["Skin", "Beauty", "Anti-aging"],
  },
  {
    id: "red-light-therapy",
    slug: "red-light-therapy",
    name: "Red Light & Skin Rejuvenation",
    shortDescription: "Photobiomodulation for cellular health.",
    description: "Clinically proven red and near-infrared light therapy to reduce inflammation, accelerate healing, and stimulate collagen production for healthier skin.",
    detailedDescription: "Red Light Therapy (Photobiomodulation) utilizes specific, clinically proven wavelengths of red and near-infrared light. This deeply penetrating light supercharges your cells' mitochondria, promoting rapid healing, reduced inflammation, and vibrant skin.",
    howItWorks: [
      "You relax in front of our medical-grade LED light panels.",
      "Red and near-infrared light waves penetrate the skin and underlying tissues.",
      "The light is absorbed by the mitochondria, boosting ATP (energy) production.",
      "This surge in cellular energy accelerates repair, collagen production, and reduces inflammation."
    ],
    benefits: [
      "Stimulates robust collagen production for anti-aging and skin rejuvenation",
      "Significantly reduces systemic inflammation and joint pain",
      "Accelerates muscle recovery and wound healing",
      "Improves overall blood circulation and tissue oxygenation",
      "Enhances mood, energy levels, and promotes better sleep"
    ],
    category: "Non-Medical",
    duration: "20 min",
    intensity: "Gentle",
    tags: ["Skin", "Recovery", "Energy", "Anti-aging"],
  },
  {
    id: "hair-restoration",
    slug: "hair-restoration",
    name: "Hair Restoration",
    shortDescription: "Natural regeneration for thicker, fuller hair.",
    description: "Personalized treatments utilizing regenerative techniques to stimulate dormant hair follicles and naturally enhance hair growth and thickness.",
    detailedDescription: "Our advanced Hair Restoration protocols utilize the profound regenerative power of your own body (via PRP) or concentrated Exosomes. These treatments reawaken dormant hair follicles, increase blood flow, and naturally stimulate thicker, fuller hair growth.",
    howItWorks: [
      "Potent growth factors (from your blood or purified exosomes) are prepared.",
      "The scalp is prepped, often utilizing microneedling to ensure deep penetration.",
      "The regenerative serums are applied or gently injected into the areas of thinning hair.",
      "The growth factors signal dormant follicles to enter the active growth (anagen) phase."
    ],
    benefits: [
      "Naturally stimulates new hair growth without surgery or daily chemicals",
      "Significantly increases hair density, thickness, and strand strength",
      "Prolongs the active growth phase of the hair cycle",
      "Improves overall scalp health and local blood circulation",
      "Provides a safe, highly effective solution for both men and women"
    ],
    category: "Non-Medical",
    duration: "45 min",
    intensity: "Moderate",
    tags: ["Hair", "Beauty", "Regeneration"],
  },
  {
    id: "joint-regeneration",
    slug: "joint-regeneration",
    name: "Joint Regeneration",
    shortDescription: "Advanced therapies for joint health.",
    description: "Comprehensive regenerative treatments aimed at repairing damaged cartilage, reducing chronic joint pain, and restoring optimal mobility.",
    detailedDescription: "Joint Regeneration therapies utilize cutting-edge orthobiologics (like PRP, Exosomes, or stem cells) to repair damaged cartilage, tendons, and ligaments. We focus on healing the structural cause of joint pain rather than merely masking it.",
    howItWorks: [
      "A comprehensive assessment pinpoints the exact source of joint dysfunction.",
      "Highly concentrated regenerative cells or growth factors are prepared.",
      "They are precisely injected directly into the damaged joint or connective tissue.",
      "These biologics aggressively reduce inflammation and signal the body to rebuild healthy tissue."
    ],
    benefits: [
      "Provides profound, long-lasting relief from chronic joint pain and arthritis",
      "Actively repairs and regenerates damaged cartilage and connective tissue",
      "Often serves as a highly successful alternative to invasive joint surgery",
      "Dramatically improves joint mobility, flexibility, and physical function",
      "Utilizes natural, biological healing mechanisms for optimal safety"
    ],
    category: "Non-Medical",
    duration: "45 min",
    intensity: "Moderate",
    tags: ["Pain", "Joints", "Recovery", "Regeneration"],
  },
  {
    id: "v-sel-cellular",
    slug: "v-sel-cellular-regeneration",
    name: "V-SEL Cellular Regeneration",
    shortDescription: "Cutting-edge stem cell therapy.",
    description: "Very Small Embryonic-Like (V-SEL) stem cell treatments utilizing your body's own potent regenerative cells to repair tissues and promote profound healing.",
    detailedDescription: "V-SEL (Very Small Embryonic-Like) Cellular Regeneration is the pinnacle of autologous stem cell therapy. These potent, pluripotent-like cells exist naturally in your blood and can be activated to promote unparalleled, profound healing and anti-aging across the entire body.",
    howItWorks: [
      "Your blood is drawn and processed using a highly specialized protocol.",
      "The dormant V-SEL cells are isolated, concentrated, and activated via specific light or laser frequencies.",
      "The activated, highly potent cells are then reinfused or injected into target areas.",
      "They migrate to areas of inflammation and damage, initiating profound cellular repair."
    ],
    benefits: [
      "Offers the most advanced, natural regenerative healing available today",
      "Promotes systemic anti-aging and total cellular rejuvenation",
      "Dramatically accelerates the repair of severely damaged tissues or organs",
      "Modulates and balances the immune system effectively",
      "Utilizes your own cells, ensuring absolute safety and zero risk of rejection"
    ],
    category: "Non-Medical",
    duration: "60 min",
    intensity: "Moderate",
    tags: ["Regeneration", "Longevity", "Healing"],
  }
];
