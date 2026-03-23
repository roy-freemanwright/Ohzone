import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { ServiceCard } from "@/components/service-card";
import { goals, services } from "@/lib/data";
import { ArrowRight, Sparkles, Activity, ShieldCheck, Heart, Zap } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import heroImage from "@assets/generated_images/serene_modern_wellness_clinic_lobby_hero.png";
import waterTexture from "@assets/generated_images/abstract_clean_fresh_water_texture.png";

export default function Home() {
  const featuredServices = services.filter(s => ["ozone-sauna", "iv-vitamin", "cryotherapy", "red-light"].includes(s.id)).slice(0, 4);
  const displayServices = featuredServices.length > 0 ? featuredServices : services.slice(0, 4);

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-[100svh] md:min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Wellness Clinic Lobby" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/30" />
        </div>

        {/* Content */}
        <div className="container relative z-10 px-4 md:px-6 pt-24 text-center md:text-left md:flex md:items-end md:justify-between h-full pb-20 md:pb-32">
          <div className="max-w-3xl space-y-6 mx-auto md:mx-0">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block py-1.5 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold tracking-widest uppercase mb-2 md:mb-4"
            >
              Welcome to the OhZone
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-fluid-h1 font-serif font-medium text-white tracking-tight"
            >
              Wellness made <br className="hidden md:block" />
              <span className="italic font-light">simple.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-xl text-white/90 font-light max-w-xl mx-auto md:mx-0 leading-relaxed"
            >
              Advanced therapies for detox, recovery, and optimization. 
              Reconnect with your body's natural potential.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start"
            >
              <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-8 text-base h-12 w-full sm:w-auto" asChild>
                <a href="https://ohzoneclinics.janeapp.com/" target="_blank" rel="noreferrer">
                  Book Appointment
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 hover:text-white rounded-full px-8 text-base h-12 w-full sm:w-auto" asChild>
                <Link href="/services">Explore Services</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      {/* GOAL SELECTION */}
      <Section className="bg-background relative z-20 -mt-10 md:-mt-20 pt-16 pb-16 md:pt-20 md:pb-20 rounded-t-[2rem] md:rounded-t-[3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-xs md:text-sm font-sans font-bold tracking-widest uppercase text-muted-foreground mb-2 md:mb-3">Your Journey Starts Here</h2>
          <h3 className="text-fluid-h2 font-serif text-foreground">Choose your goal</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {goals.map((goal, i) => (
            <Link key={goal.id} href={`/services?goal=${goal.id}`}>
              <a className="group text-center">
                <div className="aspect-square rounded-2xl bg-muted/30 border border-border/50 flex flex-col items-center justify-center p-3 md:p-4 transition-all duration-300 hover:bg-primary/5 hover:border-primary/20 hover:shadow-md cursor-pointer group-hover:-translate-y-1">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-background border border-border flex items-center justify-center mb-3 md:mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
                    {i === 0 && <Sparkles className="w-4 h-4 md:w-5 md:h-5" />}
                    {i === 1 && <Activity className="w-4 h-4 md:w-5 md:h-5" />}
                    {i === 2 && <Zap className="w-4 h-4 md:w-5 md:h-5" />}
                    {i === 3 && <ShieldCheck className="w-4 h-4 md:w-5 md:h-5" />}
                    {i === 4 && <Heart className="w-4 h-4 md:w-5 md:h-5" />}
                    {i === 5 && <Activity className="w-4 h-4 md:w-5 md:h-5" />}
                  </div>
                  <h4 className="font-serif font-medium text-base md:text-lg leading-tight mb-1 md:mb-2">{goal.title.split(" & ")[0]} <br/> <span className="text-muted-foreground font-sans text-[10px] md:text-xs font-normal">& {goal.title.split(" & ")[1]}</span></h4>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </Section>
      {/* FEATURED SERVICES */}
      <Section className="bg-muted/30">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-12">
          <div className="text-center md:text-left w-full md:w-auto">
            <h2 className="text-fluid-h2 font-serif mb-2 md:mb-4">Curated Experiences</h2>
            <p className="text-muted-foreground max-w-md mx-auto md:mx-0">Most popular treatments designed for immediate impact.</p>
          </div>
          <Link href="/services">
            <a className="hidden md:flex items-center text-primary font-medium hover:underline mt-4 md:mt-0">
              View all therapies <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {displayServices.map(service => (
            <ServiceCard key={service.id} service={service} variant="minimal" />
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Button variant="outline" className="w-full rounded-full" asChild>
            <Link href="/services">
              View all therapies
            </Link>
          </Button>
        </div>
      </Section>
      {/* THE OHZONE METHOD */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="relative rounded-2xl overflow-hidden aspect-[4/5] lg:aspect-square order-last lg:order-first">
            <img 
              src={waterTexture}
              alt="The OhZone Method" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
          </div>
          
          <div className="space-y-8 md:space-y-12">
            <div>
              <h2 className="text-xs md:text-sm font-bold tracking-widest uppercase text-primary mb-2 md:mb-3">The OhZone Method</h2>
              <h3 className="text-fluid-h2 font-serif leading-tight mb-4 md:mb-6">A holistic approach to <br/><span className="italic text-muted-foreground">modern wellness.</span></h3>
              <p className="text-base md:text-lg text-muted-foreground font-light leading-relaxed">
                We combine ancient wisdom with cutting-edge technology to create a comprehensive wellness ecosystem. Our method is built on three pillars.
              </p>
            </div>

            <div className="space-y-6 md:space-y-8">
              {[
                { num: "01", title: "Clinic Therapies", desc: "Advanced biohacking modalities like Ozone Sauna and Lymphatic drainage.", link: "/services?category=Non-Medical", linkText: "Explore Clinic" },
                { num: "02", title: "Medical", desc: "Clinical-grade interventions including IVs, injections, and testing.", link: "/services?category=Medical", linkText: "Explore Medical" },
                { num: "03", title: "Aesthetics & Regenerative", desc: "Restore your outer glow and inner vitality with regenerative treatments.", link: "/services?category=Non-Medical", linkText: "Explore Aesthetics" }
              ].map((item) => (
                <div className="group" key={item.num}>
                  <h4 className="text-lg md:text-xl font-serif font-medium mb-2 flex items-center">
                    <span className="w-8 h-8 rounded-full border border-primary/30 flex items-center justify-center text-xs font-sans mr-3 text-primary flex-shrink-0">{item.num}</span>
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground pl-11 mb-2 text-sm leading-relaxed">{item.desc}</p>
                  <Link href={item.link}><a className="pl-11 text-xs font-bold uppercase tracking-wider text-primary inline-flex items-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">{item.linkText} <ArrowRight className="w-3 h-3 ml-1" /></a></Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
      {/* HOW IT WORKS */}
      <Section className="bg-secondary/30">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-fluid-h2 font-serif mb-4">Your Path to Optimization</h2>
          <p className="text-muted-foreground text-sm md:text-base">We make it simple to start your wellness journey.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 text-center relative">
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-border z-0 border-t border-dashed border-muted-foreground/30"></div>
          
          {[
            { step: "01", title: "Consultation", desc: "Start with a discovery call or in-person consultation to map your goals." },
            { step: "02", title: "Personal Plan", desc: "Receive a tailored protocol combining the right therapies for your body." },
            { step: "03", title: "Book & Track", desc: "Schedule sessions easily and track your progress as you transform." }
          ].map((item, i) => (
            <div key={i} className="relative z-10 bg-secondary/30 md:bg-transparent p-6 rounded-2xl">
              <div className="w-16 h-16 mx-auto bg-background rounded-full shadow-sm flex items-center justify-center text-xl font-serif font-bold text-primary mb-6 border-4 border-secondary/50">
                {item.step}
              </div>
              <h3 className="text-xl font-serif mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" className="rounded-full px-8 w-full sm:w-auto" asChild>
            <Link href="/consultations">Start with a Consultation</Link>
          </Button>
        </div>
      </Section>
      {/* DETOX PROTOCOL PROMO */}
      <Section className="bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform origin-bottom-right"></div>
        
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          <div>
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white text-[10px] font-bold tracking-widest uppercase mb-4 md:mb-6">Featured Protocol</span>
            <h2 className="text-fluid-h2 font-serif mb-4 md:mb-6 leading-tight">Detox Protocol</h2>
            <p className="text-primary-foreground/80 text-base md:text-lg mb-6 md:mb-8 leading-relaxed max-w-md">
              A comprehensive approach to detoxification. Our guided protocol helps you systematically open drainage pathways and clear toxins at a cellular level.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" className="rounded-full w-full sm:w-auto" asChild>
                <Link href="/detox-protocol">Learn about our Protocol</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/20 hover:bg-white/10 text-primary-foreground rounded-full w-full sm:w-auto" asChild>
                <Link href="/consultations">
                  Consult with Us &rarr;
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative hidden md:block">
            {/* Abstract visual for Detox */}
            <div className="aspect-square rounded-full border border-white/10 flex items-center justify-center p-12 relative">
               <div className="absolute inset-0 rounded-full border border-white/5 scale-75 animate-pulse"></div>
               <div className="absolute inset-0 rounded-full border border-white/5 scale-50"></div>
               <div className="text-center">
                  <h3 className="font-serif text-3xl italic">Foundational<br/>Medicine</h3>
               </div>
            </div>
          </div>
        </div>
      </Section>
      {/* FINAL CTA */}
      <section className="py-16 md:py-24 text-center">
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-center justify-center">
          <h2 className="text-fluid-h2 font-serif mb-4 md:mb-6">Ready to feel your best?</h2>
          <p className="text-muted-foreground text-base md:text-lg mb-8 md:mb-10 max-w-xl mx-auto text-center">
            Book your appointment today or schedule a consultation to find the perfect treatment plan for you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button size="lg" className="rounded-full px-8 h-12 text-base w-full sm:w-auto" asChild>
              <a href="https://ohzoneclinics.janeapp.com/" target="_blank" rel="noreferrer">Book Appointment</a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 h-12 text-base w-full sm:w-auto" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
