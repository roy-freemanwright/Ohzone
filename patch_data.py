import re

with open('client/src/lib/data.ts', 'r') as f:
    content = f.read()

def replace_service(service_id, new_desc, new_detailed):
    pattern = r'(id:\s*"' + service_id + r'".*?description:\s*")[^"]+(",\s*detailedDescription:\s*")[^"]+(",)'
    global content
    content = re.sub(pattern, r'\g<1>' + new_desc + r'\g<2>' + new_detailed + r'\g<3>', content, flags=re.DOTALL)


replace_service('theta',
    "We are thrilled to introduce the groundbreaking Theta Chamber. This innovative service is specifically designed to tap into the incredible power of your mind, providing profound relaxation and healing. It is an innovative solution aimed at inducing your brainwave activity into the Theta State, a deeply relaxed state akin to the moments before falling asleep. This advanced technology facilitates a process of mental 'reprogramming' or 'remapping,' allowing for significant positive changes in your mental and emotional well-being.",
    "The Theta Chamber is ingeniously crafted to usher the mind into the restorative Theta State, heralding a wide array of benefits for mental, emotional, and physical health. It utilizes Vestibular Motion inspired by NASA research to create a unique sense of floating. It also incorporates Cranial Electrotherapy Stimulation (CES) to help recalibrate your brain's neurotransmitter levels, fostering a sense of calm and balance. Finally, Binaural Audio Beats and Visual Pattern Light Stimulation synchronize your brainwaves to the Theta State, promoting unparalleled relaxation and mental clarity."
)

replace_service('hocatt',
    "Elevate your wellness journey with HOCATT Premium Saunas – the ultimate in holistic health and detoxification. HOCATT (Hyperthermic Ozone and Carbonic Acid Transdermal Therapy) is not just a sauna; it's a multifunctional wellness device that combines the power of ozone, carbonic acid, and a multitude of other treatments to rejuvenate your body from the inside out. It seamlessly merges carbonic acid therapy, hyperthermia, and electrotherapy for holistic rejuvenation.",
    "The HOCATT provides a comprehensive full-body reset by simultaneously delivering up to 10 potent modalities. Benefit from ultrasonic cavitation's lymphatic support, photon light therapy's skin revival, and the calming allure of aromatherapy. Inhale vitality with oxygen-rich air and synchronize with PEMF's cellular harmony. With HOCATT, you experience massive boosts to cellular energy, profound deep-tissue detoxification, and a drastic reduction in systemic inflammation."
)

replace_service('ozone-sauna',
    "Experience the detoxifying power of ozone delivered through a comfortable steam sauna. This Level One therapy helps eliminate toxins, boost immunity, and improve circulation by enveloping your body in a warm, soothing steam. As the gentle heat opens your pores, medical-grade ozone is introduced, allowing active oxygen to be absorbed transdermally. This process safely and effectively accelerates the detoxification of heavy metals and chemicals.",
    "The Level One Ozone Sauna is a specialized steam chamber that infuses medical-grade ozone gas (O3) into the environment while keeping your head exposed to room air. The active oxygen binds to toxins and impurities, allowing your body to sweat them out naturally. This not only stimulates the immune system and white blood cell production but also improves blood circulation, oxygen delivery to tissues, and promotes clear, healthy, radiant skin."
)

replace_service('infrared',
    "Unlike traditional saunas, our Far Infrared Sauna utilizes light to create heat that penetrates up to an inch and a half deep into your tissues, muscles, and joints. This deep tissue heating mobilizes toxins stored in fat cells, reduces chronic inflammation, and promotes deep parasympathetic relaxation. It provides a highly effective detoxifying sweat at a much lower, more comfortable ambient temperature.",
    "The Far Infrared Sauna works by heating your body directly from within rather than just heating the surrounding air. As you relax in our custom cedar infrared sauna cabin, the deep heat raises your core temperature, promoting excellent cardiovascular health and circulation. This process not only provides a profound cellular detox but also supports clear, glowing skin through deep pore cleansing."
)

replace_service('hair-restoration',
    "Our personalized hair restoration treatments utilize the incredible healing abilities of your own cells to naturally enhance and revitalize your hair. By stimulating dormant hair follicles and promoting scalp health, we tailor our approach to your unique needs to ensure optimal results. Don't settle for less—rejuvenate your hair and regain your youthful, confident appearance with our advanced regenerative techniques.",
    "Hair Restoration at OhZone Clinics harnesses the power of cellular regeneration to combat hair thinning and loss. The treatment involves targeted applications, often utilizing components like exosomes or specialized growth factors, which are introduced to the scalp. These potent signaling molecules instruct aging or dormant hair follicle cells to repair and start producing thicker, healthier hair. It offers a non-surgical, natural solution that massively boosts cellular activity for long-lasting results."
)

replace_service('fillers-botox',
    "Introducing our exclusive Botox and Fillers treatments designed to give your appearance a natural, youthful lift. Our Aesthetic Services are dedicated to helping you achieve the radiant look you desire with minimally invasive, non-surgical options tailored to your individual facial structure. Rejuvenate your skin, diminish signs of aging, and boost your self-confidence with the care and expertise of our top medical professionals.",
    "Botox and dermal fillers are specialized aesthetic treatments aimed at reducing wrinkles and restoring lost volume. Botox works by temporarily relaxing the underlying facial muscles that cause fine lines and wrinkles, particularly around the eyes and forehead. Dermal fillers, on the other hand, use hyaluronic acid or other bio-compatible substances to plump up areas that have lost volume, such as cheeks and lips. Together, they provide a comprehensive approach to anti-aging, offering immediate and long-lasting improvements to your overall skin texture and tone."
)

new_service = """
  {
    id: "hormone-therapy",
    slug: "hormone-replacement-therapy",
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
  },"""
content = re.sub(r'(export const services: Service\[\] = \[)', r'\g<1>' + new_service, content)


with open('client/src/lib/data.ts', 'w') as f:
    f.write(content)

print("Updated data.ts")
