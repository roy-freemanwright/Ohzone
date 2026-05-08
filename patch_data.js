import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let data = fs.readFileSync(path.join(__dirname, 'client/src/lib/data.ts'), 'utf8');

// Update Theta Chamber
data = data.replace(
  /id: "theta",[\s\S]*?description: "[^"]+",\s*detailedDescription: "[^"]+",/,
  `id: "theta",
    slug: "theta-chamber",
    name: "Theta Chamber",
    shortDescription: "Neurological balance and stress reduction.",
    description: "We are thrilled to introduce the groundbreaking Theta Chamber. This innovative service is specifically designed to tap into the incredible power of your mind, providing profound relaxation and healing. It is an innovative solution aimed at inducing your brainwave activity into the Theta State, a deeply relaxed state akin to the moments before falling asleep. This advanced technology facilitates a process of mental 'reprogramming' or 'remapping,' allowing for significant positive changes in your mental and emotional well-being.",
    detailedDescription: "The Theta Chamber is ingeniously crafted to usher the mind into the restorative Theta State, heralding a wide array of benefits for mental, emotional, and physical health. It utilizes Vestibular Motion inspired by NASA research to create a unique sense of floating. It also incorporates Cranial Electrotherapy Stimulation (CES) to help recalibrate your brain's neurotransmitter levels, fostering a sense of calm and balance. Finally, Binaural Audio Beats and Visual Pattern Light Stimulation synchronize your brainwaves to the Theta State, promoting unparalleled relaxation and mental clarity.",`
);

// Update HOCATT
data = data.replace(
  /id: "hocatt",[\s\S]*?description: "[^"]+",\s*detailedDescription: "[^"]+",/,
  `id: "hocatt",
    slug: "hocatt-sauna-level-two",
    name: "HOCATT Sauna (Level Two)",
    shortDescription: "The ultimate bio-chamber for detoxification and energy.",
    description: "Elevate your wellness journey with HOCATT Premium Saunas – the ultimate in holistic health and detoxification. HOCATT (Hyperthermic Ozone and Carbonic Acid Transdermal Therapy) is not just a sauna; it's a multifunctional wellness device that combines the power of ozone, carbonic acid, and a multitude of other treatments to rejuvenate your body from the inside out. It seamlessly merges carbonic acid therapy, hyperthermia, and electrotherapy for holistic rejuvenation.",
    detailedDescription: "The HOCATT provides a comprehensive full-body reset by simultaneously delivering up to 10 potent modalities. Benefit from ultrasonic cavitation's lymphatic support, photon light therapy's skin revival, and the calming allure of aromatherapy. Inhale vitality with oxygen-rich air and synchronize with PEMF's cellular harmony. With HOCATT, you experience massive boosts to cellular energy, profound deep-tissue detoxification, and a drastic reduction in systemic inflammation.",`
);

// Update Hormone
data = data.replace(
  /export const services: Service\[\] = \[/,
  `export const services: Service[] = [
  {
    id: "hormone-therapy",
    slug: "hormone-treatments",
    name: "Hormone Replacement Therapy",
    shortDescription: "Bioidentical hormone treatments for optimal balance.",
    description: "Tired of feeling off? Our bioidentical hormone treatments help you restore balance, boost vitality, and feel like yourself again—naturally. Hormone imbalances can impact various aspects of health, from energy levels to cognitive function. Our membership-based Hormone Replacement Therapy is designed to support individuals experiencing symptoms related to perimenopause, menopause, or low testosterone. It restores optimal function with no guesswork, just real results.",
    detailedDescription: "Hormone Replacement Therapy (HRT) at OhZone Clinics begins with a comprehensive 90-minute evaluation, including hormone testing and a personalized treatment plan tailored to your body’s unique needs. We utilize bioidentical hormones, which closely mimic your body's natural hormones, to aid in thyroid and metabolic support, regulate energy levels, and improve mood. Regular follow-ups ensure continuous hormone optimization, helping you experience sustained energy, mental clarity, and overall well-being.",
    howItWorks: [
      "You start with a 90-minute comprehensive hormone evaluation and testing.",
      "Our specialists assess your hormonal balance and outline a personalized treatment plan.",
      "Bioidentical hormones are administered to restore optimal levels in your body.",
      "Regular follow-up visits monitor your progress and fine-tune your therapy."
    ],
    benefits: [
      "Restores energy levels and combats chronic fatigue",
      "Improves mental clarity, focus, and cognitive function",
      "Aids in metabolic support and regulates body temperature",
      "Enhances mood stability and reduces anxiety or irritability",
      "Supports bone density and joint comfort"
    ],
    category: "Medical",
    duration: "90 min",
    intensity: "Gentle",
    tags: ["Hormones", "Energy", "Anti-aging", "Wellness"],
  },`
);

// Update Hair Restoration
data = data.replace(
  /id: "hair-restoration",[\s\S]*?description: "[^"]+",\s*detailedDescription: "[^"]+",/,
  `id: "hair-restoration",
    slug: "hair-restoration",
    name: "Hair Restoration",
    shortDescription: "Natural regeneration for thicker, fuller hair.",
    description: "Our personalized hair restoration treatments utilize the incredible healing abilities of your own cells to naturally enhance and revitalize your hair. By stimulating dormant hair follicles and promoting scalp health, we tailor our approach to your unique needs to ensure optimal results. Don't settle for less—rejuvenate your hair and regain your youthful, confident appearance with our advanced regenerative techniques.",
    detailedDescription: "Hair Restoration at OhZone Clinics harnesses the power of cellular regeneration to combat hair thinning and loss. The treatment involves targeted applications, often utilizing components like exosomes or specialized growth factors, which are introduced to the scalp. These potent signaling molecules instruct aging or dormant hair follicle cells to repair and start producing thicker, healthier hair. It offers a non-surgical, natural solution that massively boosts cellular activity for long-lasting results.",`
);

// Update Botox and Fillers
data = data.replace(
  /id: "fillers-botox",[\s\S]*?description: "[^"]+",\s*detailedDescription: "[^"]+",/,
  `id: "fillers-botox",
    slug: "fillers",
    name: "Botox & Fillers",
    shortDescription: "Expert injectable aesthetic treatments.",
    description: "Introducing our exclusive Botox and Fillers treatments designed to give your appearance a natural, youthful lift. Our Aesthetic Services are dedicated to helping you achieve the radiant look you desire with minimally invasive, non-surgical options tailored to your individual facial structure. Rejuvenate your skin, diminish signs of aging, and boost your self-confidence with the care and expertise of our top medical professionals.",
    detailedDescription: "Botox and dermal fillers are specialized aesthetic treatments aimed at reducing wrinkles and restoring lost volume. Botox works by temporarily relaxing the underlying facial muscles that cause fine lines and wrinkles, particularly around the eyes and forehead. Dermal fillers, on the other hand, use hyaluronic acid or other bio-compatible substances to plump up areas that have lost volume, such as cheeks and lips. Together, they provide a comprehensive approach to anti-aging, offering immediate and long-lasting improvements to your overall skin texture and tone.",`
);

fs.writeFileSync(path.join(__dirname, 'client/src/lib/data.ts'), data, 'utf8');
console.log('Done!');
