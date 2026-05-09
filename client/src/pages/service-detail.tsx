import { useRoute, Link } from "wouter";
import { services } from "@/lib/data";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Activity, Calendar } from "lucide-react";
import NotFound from "./not-found";
import saunaTexture from "@assets/generated_images/abstract_warm_glowing_sauna_texture.png";
import serviceImage from "@/assets/service-image.jpg";

export default function ServiceDetail() {
  const [match, params] = useRoute("/services/:slug");
  
  if (!match) return <NotFound />;

  const service = services.find(s => s.slug === params.slug);
  
  if (!service) return <NotFound />;

  return (
    <>
      <div className="relative pt-24 pb-12 md:pt-32 md:pb-24 border-b border-border/50 min-h-[60vh] flex flex-col justify-center bg-background">
        {/* Background Image with smooth blend */}
        <div className="absolute inset-y-0 right-0 z-0 w-full lg:w-[65%] xl:w-[55%] max-w-5xl overflow-hidden">
          <img 
            src={serviceImage} 
            alt={service.name}
            className="w-full h-full object-cover object-center opacity-40 lg:opacity-100"
          />
          {/* Gradient overlays to smoothly fade the image into the background color */}
          <div className="absolute inset-0 bg-background/80 lg:bg-transparent lg:bg-gradient-to-r lg:from-background lg:via-background/70 lg:to-transparent"></div>
          {/* Mobile fade (fade from bottom) */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent lg:hidden"></div>
        </div>

        <div className="container relative z-10 px-4 md:px-6 mx-auto">
          <Link href="/services">
            <a className="inline-flex items-center text-sm text-foreground/70 hover:text-primary mb-6 md:mb-8 transition-colors bg-background/50 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
            </a>
          </Link>
          
          <div className="max-w-2xl">
            <div className="flex flex-wrap gap-2 mb-4">
                 <span className="px-2 py-1 md:px-3 md:py-1 bg-primary text-primary-foreground shadow-sm text-[10px] md:text-xs font-bold rounded-full uppercase tracking-wider">{service.category}</span>
                 {service.tags.map(tag => (
                   <span key={tag} className="px-2 py-1 md:px-3 md:py-1 bg-background/80 backdrop-blur-sm border border-border/50 text-foreground/80 shadow-sm text-[10px] md:text-xs font-medium rounded-full">{tag}</span>
                 ))}
            </div>
            <h1 className="text-fluid-h1 font-serif font-medium mb-4 md:mb-6 leading-tight text-foreground drop-shadow-sm">
              {service.name}
            </h1>
            <p className="text-lg md:text-xl text-foreground/90 font-medium leading-relaxed mb-6 md:mb-8 drop-shadow-sm max-w-xl">
              {service.shortDescription}
            </p>
            
            <div className="flex flex-wrap gap-4 md:gap-6 mb-6 md:mb-8 text-sm">
              <div className="flex items-center gap-3 bg-background/60 backdrop-blur-md p-2 pr-4 rounded-full border border-border/50 shadow-sm">
                <div className="w-8 h-8 rounded-full bg-background border border-border/50 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Clock className="w-4 h-4 text-foreground/70" />
                </div>
                <div>
                  <span className="block font-bold text-foreground text-[10px] md:text-xs uppercase tracking-wider">Duration</span>
                  <span className="text-foreground/80 font-medium text-xs md:text-sm">{service.duration}</span>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-background/60 backdrop-blur-md p-2 pr-4 rounded-full border border-border/50 shadow-sm">
                <div className="w-8 h-8 rounded-full bg-background border border-border/50 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Activity className="w-4 h-4 text-foreground/70" />
                </div>
                <div>
                  <span className="block font-bold text-foreground text-[10px] md:text-xs uppercase tracking-wider">Intensity</span>
                  <span className="text-foreground/80 font-medium text-xs md:text-sm">{service.intensity}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-8">
              <Button size="lg" className="rounded-full px-8 bg-primary hover:bg-primary/90 w-full sm:w-auto h-12 shadow-md" asChild>
                <a href="https://ohzoneclinics.janeapp.com/" target="_blank" rel="noreferrer">
                  Book Appointment
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 w-full sm:w-auto h-12 bg-background/70 backdrop-blur-md border-border/50 shadow-sm hover:bg-background/90" asChild>
                <Link href="/consultations">Book Consultation First</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Section className="max-w-4xl mx-auto">
        <h2 className="text-fluid-h2 font-serif mb-4 md:mb-6">About this Treatment</h2>
        <div className="prose prose-base md:prose-lg text-muted-foreground max-w-none">
          <p className="text-xl text-foreground font-light leading-relaxed mb-8">{service.description}</p>
          
          {service.detailedDescription && (
            <div className="mb-8">
              <h3 className="font-serif text-2xl text-foreground mb-4">What is it?</h3>
              <p>{service.detailedDescription}</p>
            </div>
          )}

          {service.howItWorks && service.howItWorks.length > 0 && (
            <div className="mb-8">
              <h3 className="font-serif text-2xl text-foreground mb-4">How it Works</h3>
              <ul className="space-y-4 list-none pl-0">
                {service.howItWorks.map((step, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm font-bold mt-0.5">{i + 1}</span>
                    <span className="pt-1">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mb-8">
            <h3 className="font-serif text-2xl text-foreground mb-4">Key Benefits</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none pl-0">
              {service.benefits ? service.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Activity className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="leading-snug">{benefit}</span>
                </li>
              )) : (
                <>
                  <li className="flex items-start gap-3"><Activity className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span>Enhanced cellular function</span></li>
                  <li className="flex items-start gap-3"><Activity className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span>Reduced inflammation</span></li>
                  <li className="flex items-start gap-3"><Activity className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span>Improved circulation and detoxification</span></li>
                  <li className="flex items-start gap-3"><Activity className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span>Deep relaxation and stress relief</span></li>
                </>
              )}
            </ul>
          </div>
          
          <div className="bg-muted/30 p-6 md:p-8 rounded-2xl border border-border mt-10">
            <p className="m-0 text-base md:text-lg text-foreground">
              At OhZone Clinics, we tailor every session to your specific needs. Whether you're looking for recovery, detox, or optimization, our expert staff will ensure you get the most out of your <strong className="font-medium text-primary">{service.name}</strong> session.
            </p>
          </div>
        </div>
        
        <div className="mt-8 md:mt-12 p-6 md:p-8 bg-primary/5 rounded-2xl border border-primary/10">
          <h3 className="font-serif text-xl mb-2">Ready to book?</h3>
          <p className="text-muted-foreground mb-6 text-sm md:text-base">Secure your spot online. New clients are welcome.</p>
          <Button className="w-full sm:w-auto rounded-full" asChild>
            <a href="https://ohzoneclinics.janeapp.com/" target="_blank" rel="noreferrer">Book Now &rarr;</a>
          </Button>
        </div>
      </Section>
    </>
  );
}
