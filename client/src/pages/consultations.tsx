import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Consultations() {
  return (
    <>
      <Section className="pt-24 pb-16 md:pt-32 md:pb-20 bg-muted/30">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h1 className="text-fluid-h1 font-serif mb-4 md:mb-6">Start with clarity.</h1>
          <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed mb-6 md:mb-8">
            Navigating the world of biohacking and regenerative medicine can be overwhelming. Our consultations are designed to map your unique path to vitality.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="rounded-full px-8 w-full sm:w-auto" asChild>
              <a href="https://ohzoneclinics.janeapp.com/" target="_blank" rel="noreferrer">Book a Consultation</a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 w-full sm:w-auto" asChild>
              <a href="#tour">Take a Tour</a>
            </Button>
          </div>
        </div>
      </Section>
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <h2 className="text-fluid-h2 font-serif mb-4 md:mb-6">What to expect</h2>
            <p className="text-muted-foreground mb-6 md:mb-8 text-base md:text-lg">
              During your consultation, our specialists will review your health history, current goals, and lifestyle factors. We take a holistic view of your wellbeing to recommend the most effective protocols.
            </p>
            
            <ul className="space-y-3 md:space-y-4">
              {[
                "Comprehensive health history review",
                "Goal setting (Detox, Weight Loss, Anti-Aging)",
                "Customized treatment plan creation",
                "Supplement & lifestyle recommendations",
                "Q&A about our technologies"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/80 text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-secondary/20 p-6 md:p-8 rounded-2xl border border-secondary/50">
            <h3 className="font-serif text-xl md:text-2xl mb-4">Types of Consultations</h3>
            
            <div className="space-y-4 md:space-y-6">
              <div className="bg-background p-5 md:p-6 rounded-xl shadow-sm">
                <h4 className="font-bold text-base md:text-lg mb-1">Discovery Call</h4>
                <p className="text-xs md:text-sm text-muted-foreground mb-2 md:mb-3">A brief 15-min phone call to answer quick questions.</p>
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-primary">Complimentary</span>
              </div>

              <div className="bg-background p-5 md:p-6 rounded-xl shadow-sm border border-primary/20">
                <h4 className="font-bold text-base md:text-lg mb-1">New Client Consultation</h4>
                <p className="text-xs md:text-sm text-muted-foreground mb-2 md:mb-3">In-depth 45-min session to build your full roadmap.</p>
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-primary">$150 (Applied to packages)</span>
              </div>
            </div>
          </div>
        </div>
      </Section>
      {/* Take a Tour Section */}
      <Section id="tour" className="bg-muted/40">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <h2 className="text-fluid-h2 font-serif mb-4 relative inline-block">
            Take a Tour of Our Clinic
            <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-primary rounded-full opacity-80"></span>
          </h2>
          <p className="text-primary font-medium mb-3 mt-6">See the space where science meets serenity.</p>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            Step inside and see where wellness begins. Our state-of-the-art facility is designed with your comfort and healing in mind.
          </p>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-12">
          {[
            { src: "/tour-lobby.png", title: "Reception Area" },
            { src: "/tour-iv-lounge.png", title: "IV Therapy Lounge" },
            { src: "/tour-sauna.png", title: "HOCATT Sauna Suite" },
            { src: "/tour-treatment.png", title: "Private Treatment Room" }
          ].map((img, idx) => (
            <div key={idx} className="group relative rounded-2xl overflow-hidden aspect-[4/3] shadow-sm hover:shadow-lg transition-all duration-500">
              <img src={img.src} alt={img.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white font-serif text-xl tracking-wide">{img.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="rounded-full px-8 w-full sm:w-auto shadow-md hover:shadow-lg transition-all" asChild>
            <a href="https://ohzoneclinics.janeapp.com/" target="_blank" rel="noreferrer">Book Your In-Person Tour</a>
          </Button>
        </div>
      </Section>
    </>
  );
}
