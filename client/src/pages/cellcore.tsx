import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import waterTexture from "@assets/generated_images/abstract_clean_fresh_water_texture.png";

export default function CellCore() {
  return (
    <>
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-primary/90">
        <img src={waterTexture} alt="Water" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50" />
        <div className="container relative z-10 text-center px-6">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold tracking-widest uppercase mb-6">Foundational Medicine</span>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">CellCore Detox Protocol</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            A comprehensive, phased approach to detoxification that goes upstream to the root cause.
          </p>
        </div>
      </div>

      <Section>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-serif mb-6">Why CellCore?</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Standard detoxes often fail because they don't address drainage pathways first. CellCore's Carbon Technology helps bind and remove toxins while supporting the mitochondria for sustained energy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { phase: "Phase 1", title: "Energy & Drainage", desc: "Open the pathways so toxins have a way out." },
            { phase: "Phase 2", title: "Gut & Immune", desc: "Address the gut microbiome and immune support." },
            { phase: "Phase 3", title: "Whole Body Immune", desc: "Systemic detoxification of deeper tissues." },
            { phase: "Phase 4", title: "Systemic Detox", desc: "Targeting specific toxins like heavy metals." }
          ].map((item, i) => (
            <div key={i} className="bg-card border border-border p-6 rounded-xl text-center group hover:border-primary/50 transition-colors">
              <div className="text-xs font-bold uppercase tracking-widest text-primary mb-2">{item.phase}</div>
              <h3 className="font-serif text-xl mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-muted/30">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-serif mb-6">Start your protocol</h2>
            <p className="text-muted-foreground mb-6">
              We recommend working with our practitioners to tailor the CellCore protocol to your specific needs. However, you can also browse our supplements store.
            </p>
            <div className="flex gap-4">
               <Button asChild>
                 <a href="/consultations">Consult with Us</a>
               </Button>
               <Button variant="outline" asChild>
                 <a href="https://www.ohzoneclinics.com/cellcore-supplements" target="_blank" rel="noreferrer">Shop Supplements</a>
               </Button>
            </div>
          </div>
          <div className="md:w-1/2 bg-white p-8 rounded-2xl shadow-sm border border-border/50">
             <h3 className="font-bold text-lg mb-4">Common Benefits</h3>
             <ul className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
               <li className="flex items-center gap-2">✔ Increased Energy</li>
               <li className="flex items-center gap-2">✔ Mental Clarity</li>
               <li className="flex items-center gap-2">✔ Better Digestion</li>
               <li className="flex items-center gap-2">✔ Reduced Bloating</li>
               <li className="flex items-center gap-2">✔ Skin Health</li>
               <li className="flex items-center gap-2">✔ Immune Support</li>
             </ul>
          </div>
        </div>
      </Section>
    </>
  );
}
