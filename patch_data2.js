import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let data = fs.readFileSync(path.join(__dirname, 'client/src/lib/data.ts'), 'utf8');

data = data.replace(
  /id: "ozone-sauna",[\s\S]*?description: "[^"]+",\s*detailedDescription: "[^"]+",/,
  `id: "ozone-sauna",
    slug: "ozone-sauna-level-one",
    name: "Ozone Sauna (Level One)",
    shortDescription: "A gentle introduction to ozone therapy combined with steam.",
    description: "Experience the detoxifying power of ozone delivered through a comfortable steam sauna. This Level One therapy helps eliminate toxins, boost immunity, and improve circulation by enveloping your body in a warm, soothing steam. As the gentle heat opens your pores, medical-grade ozone is introduced, allowing active oxygen to be absorbed transdermally. This process safely and effectively accelerates the detoxification of heavy metals and chemicals.",
    detailedDescription: "The Level One Ozone Sauna is a specialized steam chamber that infuses medical-grade ozone gas (O3) into the environment while keeping your head exposed to room air. The active oxygen binds to toxins and impurities, allowing your body to sweat them out naturally. This not only stimulates the immune system and white blood cell production but also improves blood circulation, oxygen delivery to tissues, and promotes clear, healthy, radiant skin.",`
);

data = data.replace(
  /id: "infrared",[\s\S]*?description: "[^"]+",\s*detailedDescription: "[^"]+",/,
  `id: "infrared",
    slug: "far-infrared-sauna",
    name: "Far Infrared Sauna",
    shortDescription: "Deep tissue heating for relaxation and sweat.",
    description: "Unlike traditional saunas, our Far Infrared Sauna utilizes light to create heat that penetrates up to an inch and a half deep into your tissues, muscles, and joints. This deep tissue heating mobilizes toxins stored in fat cells, reduces chronic inflammation, and promotes deep parasympathetic relaxation. It provides a highly effective detoxifying sweat at a much lower, more comfortable ambient temperature.",
    detailedDescription: "The Far Infrared Sauna works by heating your body directly from within rather than just heating the surrounding air. As you relax in our custom cedar infrared sauna cabin, the deep heat raises your core temperature, promoting excellent cardiovascular health and circulation. This process not only provides a profound cellular detox but also supports clear, glowing skin through deep pore cleansing.",`
);

data = data.replace(
  /id: "weight-injections",[\s\S]*?description: "[^"]+",\s*detailedDescription: "[^"]+",/,
  `id: "weight-injections",
    slug: "weight-loss-injections",
    name: "Weight Loss Injections",
    shortDescription: "Medically supervised metabolic support.",
    description: "Our medical weight loss injections provide targeted treatments to support metabolic health and assist with your weight management goals. Using clinically proven compounds like GLP-1 agonists or lipotropic blends, these injections help optimize your metabolism, balance blood sugar, and support sustainable, healthy fat loss. They are administered regularly alongside our lifestyle guidance for optimal, long-lasting results.",
    detailedDescription: "Following a comprehensive medical consultation, a customized injection protocol is prescribed for you. The medications work by slowing gastric emptying and regulating insulin, which naturally leads to significantly reduced appetite, diminished cravings, and improved metabolic function. This medically supervised approach ensures a steady, sustainable fat loss while enhancing your overall energy and reducing the risk of obesity-related conditions.",`
);

fs.writeFileSync(path.join(__dirname, 'client/src/lib/data.ts'), data, 'utf8');
console.log('Done 2!');
