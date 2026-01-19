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
      <div className="pt-24 pb-12 bg-muted/30 border-b border-border/50">
        <div className="container px-6">
          <Link href="/services">
            <a className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
            </a>
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex gap-2 mb-4">
                 <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase tracking-wider">{service.category}</span>
                 {service.tags.map(tag => (
                   <span key={tag} className="px-3 py-1 bg-white border border-border text-muted-foreground text-xs font-medium rounded-full">{tag}</span>
                 ))}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium mb-6 leading-tight text-foreground">
                {service.name}
              </h1>
              <p className="text-xl text-muted-foreground font-light leading-relaxed mb-8">
                {service.shortDescription}
              </p>
              
              <div className="flex flex-wrap gap-6 mb-8 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div>
                    <span className="block font-bold text-foreground">Duration</span>
                    <span className="text-muted-foreground">{service.duration}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center">
                    <Activity className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div>
                    <span className="block font-bold text-foreground">Intensity</span>
                    <span className="text-muted-foreground">{service.intensity}</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Button size="lg" className="rounded-full px-8 bg-primary hover:bg-primary/90" asChild>
                  <a href="https://ohzoneclinics.janeapp.com/" target="_blank" rel="noreferrer">
                    Book Appointment
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8" asChild>
                  <Link href="/consultations">Book Consultation First</Link>
                </Button>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden aspect-video lg:aspect-square bg-muted">
              {/* Fallback image logic or specific images if we had them */}
              <img 
                src={saunaTexture} 
                alt={service.name}
                className="w-full h-full object-cover mix-blend-multiply opacity-80"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Could put an icon here */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-serif mb-6">About this Treatment</h2>
        <div className="prose prose-lg text-muted-foreground">
          <p>{service.description}</p>
          <p>
            At OhZone Clinics, we tailor every session to your specific needs. Whether you're looking for recovery, detox, or optimization, our expert staff will ensure you get the most out of your {service.name} session.
          </p>
          <h3>Benefits may include:</h3>
          <ul>
            <li>Enhanced cellular function</li>
            <li>Reduced inflammation</li>
            <li>Improved circulation and detoxification</li>
            <li>Deep relaxation and stress relief</li>
          </ul>
        </div>
        
        <div className="mt-12 p-8 bg-primary/5 rounded-2xl border border-primary/10">
          <h3 className="font-serif text-xl mb-2">Ready to book?</h3>
          <p className="text-muted-foreground mb-6">Secure your spot online. New clients are welcome.</p>
          <Button asChild>
            <a href="https://ohzoneclinics.janeapp.com/" target="_blank" rel="noreferrer">Book Now &rarr;</a>
          </Button>
        </div>
      </Section>
    </>
  );
}
