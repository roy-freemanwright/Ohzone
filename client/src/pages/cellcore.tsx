import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import waterTexture from "@assets/generated_images/abstract_clean_fresh_water_texture.png";

export default function CellCore() {
  return (
    <>
      <div className="relative min-h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden bg-primary/90">
        <img src={waterTexture} alt="Water" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50" />
        <div className="container relative z-10 text-center px-4 md:px-6 py-20">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white text-[10px] md:text-xs font-bold tracking-widest uppercase mb-4 md:mb-6">Foundational Medicine</span>
          <h1 className="text-fluid-h1 font-serif text-white mb-4 md:mb-6">CellCore Detox Protocol</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            A comprehensive, phased approach to detoxification that goes upstream to the root cause.
          </p>
        </div>
      </div>

      <Section>
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-16">
          <h2 className="text-fluid-h2 font-serif mb-4 md:mb-6">Why CellCore?</h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Standard detoxes often fail because they don't address drainage pathways first. CellCore's Carbon Technology helps bind and remove toxins while supporting the mitochondria for sustained energy.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {[
            { phase: "Phase 1", title: "Energy & Drainage", desc: "Open the pathways so toxins have a way out." },
            { phase: "Phase 2", title: "Gut & Immune", desc: "Address the gut microbiome and immune support." },
            { phase: "Phase 3", title: "Whole Body Immune", desc: "Systemic detoxification of deeper tissues." },
            { phase: "Phase 4", title: "Systemic Detox", desc: "Targeting specific toxins like heavy metals." }
          ].map((item, i) => (
            <div key={i} className="bg-card border border-border p-5 md:p-6 rounded-xl text-center group hover:border-primary/50 transition-colors">
              <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-primary mb-2">{item.phase}</div>
              <h3 className="font-serif text-lg md:text-xl mb-2 md:mb-3">{item.title}</h3>
              <p className="text-xs md:text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-muted/30">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-fluid-h2 font-serif mb-4 md:mb-6">Start your protocol</h2>
            <p className="text-muted-foreground mb-6 text-sm md:text-base">
              We recommend working with our practitioners to tailor the CellCore protocol to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
               <Button className="w-full sm:w-auto rounded-full" asChild>
                 <a href="/consultations">Consult with Us</a>
               </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-border/50">
             <h3 className="font-bold text-base md:text-lg mb-4">Common Benefits</h3>
             <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 text-sm text-muted-foreground">
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
