import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Info } from "lucide-react";
import heroImage from "@/assets/images/consultations-hero.jpg";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Consultations() {
  return (
    <>
      <div className="relative min-h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden bg-black/60">
        <img src={heroImage} alt="Modern wellness clinic" className="absolute inset-0 w-full h-full object-cover opacity-50" />
        <div className="container relative z-10 text-center px-4 pt-16">
          <h1 className="text-fluid-h1 font-serif text-white mb-4 md:mb-6">Start with clarity.</h1>
          <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed mb-6 md:mb-8 max-w-3xl mx-auto">
            Navigating the world of biohacking and regenerative medicine can be overwhelming. Our consultations are designed to map your unique path to vitality.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="rounded-full px-8 w-full sm:w-auto shadow-lg" asChild>
              <a href="https://ohzoneclinics.janeapp.com/" target="_blank" rel="noreferrer">Book a Consultation</a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 w-full sm:w-auto bg-white/10 text-white border-white/20 hover:bg-white/20 hover:text-white backdrop-blur-sm" asChild>
              <a href="#tour">Take a Tour</a>
            </Button>
          </div>
        </div>
      </div>
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
          <div className="bg-secondary/20 p-6 md:p-8 rounded-2xl border border-secondary/50 flex flex-col h-full">
            <h3 className="font-serif text-xl md:text-2xl mb-4">Types of Consultations</h3>
            
            <div className="space-y-4 md:space-y-6 flex-grow">
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

            <div className="mt-6 bg-primary/10 border border-primary/20 rounded-xl p-4 flex items-start gap-3">
              <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div className="text-sm text-foreground/80 leading-relaxed">
                <strong className="block text-foreground mb-1">Medical Consultations Note</strong>
                Any consultation leading to medical services requires a 
                <Dialog>
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <DialogTrigger asChild>
                        <button className="inline-flex items-center gap-1 font-semibold text-primary hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-1 mx-1 transition-colors underline decoration-primary/30 underline-offset-4 cursor-help">
                          Good Faith Exam (GFE) - $65
                        </button>
                      </DialogTrigger>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80 p-4" side="top" align="center">
                      <div className="flex justify-between space-x-4">
                        <div className="space-y-2">
                          <h4 className="text-sm font-bold flex items-center gap-2">
                            <Info className="w-4 h-4 text-primary" />
                            What is a Good Faith Exam? ($65)
                          </h4>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            A mandatory evaluation by a licensed medical professional prior to receiving medical services. Click to read the full details.
                          </p>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>

                  <DialogContent className="sm:max-w-[500px]">
                    <DialogHeader>
                      <DialogTitle className="font-serif text-2xl flex items-center gap-2">
                        <Info className="w-6 h-6 text-primary" />
                        Good Faith Exam (GFE) - $65
                      </DialogTitle>
                      <DialogDescription className="text-base pt-4 space-y-4 text-foreground/80">
                        <p>
                          A Good Faith Exam (GFE) is a thorough medical evaluation required by law before a patient can receive certain medical treatments or prescription-grade therapies (such as IV therapies, specialized injections, and advanced blood treatments).
                        </p>
                        <p>
                          During this exam, a licensed medical professional will:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-sm">
                          <li>Review your comprehensive medical history</li>
                          <li>Assess your current health status and specific goals</li>
                          <li>Determine if the requested medical treatments are safe and appropriate for you</li>
                          <li>Establish a formal provider-patient relationship</li>
                        </ul>
                        <p className="text-sm font-medium text-foreground bg-primary/5 p-3 rounded-lg border border-primary/10 mt-4">
                          This ensures the highest standard of safety and care, tailoring our medical services strictly to what your body needs and can safely process.
                        </p>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
                prior to treatment.
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      {/* New CTA Section */}
      <Section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-fluid-h2 font-serif mb-4 md:mb-6 text-white">Ready to optimize your health?</h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 font-light mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
            Take the first step towards a revitalized you. Our team is ready to help you build a personalized roadmap to optimal wellness.
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full px-10 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all" asChild>
            <a href="https://ohzoneclinics.janeapp.com/" target="_blank" rel="noreferrer">
              Schedule Your Consultation
            </a>
          </Button>
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
