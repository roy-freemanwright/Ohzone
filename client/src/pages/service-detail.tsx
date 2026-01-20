import { useRoute, Link } from "wouter";
import { services } from "@/lib/data";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Activity, Calendar } from "lucide-react";
import NotFound from "./not-found";
import saunaTexture from "@assets/generated_images/abstract_warm_glowing_sauna_texture.png";

export default function ServiceDetail() {
  const [match, params] = useRoute("/services/:slug");
  
  if (!match) return <NotFound />;

  const service = services.find(s => s.slug === params.slug);
  
  if (!service) return <NotFound />;

  return (
    <>
      <div className="pt-24 pb-12 md:pt-32 md:pb-16 bg-muted/30 border-b border-border/50">
        <div className="container px-4 md:px-6 mx-auto">
          <Link href="/services">
            <a className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6 md:mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
            </a>
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
            <div className="order-2 lg:order-1">
              <div className="flex flex-wrap gap-2 mb-4">
                 <span className="px-2 py-1 md:px-3 md:py-1 bg-primary/10 text-primary text-[10px] md:text-xs font-bold rounded-full uppercase tracking-wider">{service.category}</span>
                 {service.tags.map(tag => (
                   <span key={tag} className="px-2 py-1 md:px-3 md:py-1 bg-white border border-border text-muted-foreground text-[10px] md:text-xs font-medium rounded-full">{tag}</span>
                 ))}
              </div>
              <h1 className="text-fluid-h1 font-serif font-medium mb-4 md:mb-6 leading-tight text-foreground">
                {service.name}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed mb-6 md:mb-8">
                {service.shortDescription}
              </p>
              
              <div className="flex flex-wrap gap-4 md:gap-6 mb-6 md:mb-8 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div>
                    <span className="block font-bold text-foreground text-xs md:text-sm">Duration</span>
                    <span className="text-muted-foreground text-xs md:text-sm">{service.duration}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center flex-shrink-0">
                    <Activity className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div>
                    <span className="block font-bold text-foreground text-xs md:text-sm">Intensity</span>
                    <span className="text-muted-foreground text-xs md:text-sm">{service.intensity}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <Button size="lg" className="rounded-full px-8 bg-primary hover:bg-primary/90 w-full sm:w-auto h-12" asChild>
                  <a href="https://ohzoneclinics.janeapp.com/" target="_blank" rel="noreferrer">
                    Book Appointment
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 w-full sm:w-auto h-12" asChild>
                  <Link href="/consultations">Book Consultation First</Link>
                </Button>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden aspect-video lg:aspect-square bg-muted order-1 lg:order-2">
              {/* Fallback image logic or specific images if we had them */}
              <img 
                src={saunaTexture} 
                alt={service.name}
                className="w-full h-full object-cover mix-blend-multiply opacity-80"
              />
            </div>
          </div>
        </div>
      </div>

      <Section className="max-w-4xl mx-auto">
        <h2 className="text-fluid-h2 font-serif mb-4 md:mb-6">About this Treatment</h2>
        <div className="prose prose-base md:prose-lg text-muted-foreground max-w-none">
          <p>{service.description}</p>
          <p>
            At OhZone Clinics, we tailor every session to your specific needs. Whether you're looking for recovery, detox, or optimization, our expert staff will ensure you get the most out of your {service.name} session.
          </p>
          <h3 className="font-serif text-foreground mt-6 mb-3 text-xl">Benefits may include:</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Enhanced cellular function</li>
            <li>Reduced inflammation</li>
            <li>Improved circulation and detoxification</li>
            <li>Deep relaxation and stress relief</li>
          </ul>
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
