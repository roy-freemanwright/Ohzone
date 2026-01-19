import { Section } from "@/components/ui/section";
import heroImage from "@assets/generated_images/serene_modern_wellness_clinic_lobby_hero.png";

export default function About() {
  return (
    <>
      <div className="h-[50vh] relative overflow-hidden">
        <img src={heroImage} alt="Clinic" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-serif text-white">Our Story</h1>
        </div>
      </div>

      <Section>
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="prose prose-lg text-muted-foreground mx-auto">
            <p className="text-xl font-serif text-foreground leading-relaxed text-center mb-12">
              "We believe that the body has an innate ability to heal itself—it just needs the right environment."
            </p>
            <p>
              OhZone Clinics was founded on the principle that modern wellness requires a multi-faceted approach. We don't just treat symptoms; we look at the whole person. By combining advanced biohacking technologies with functional medicine principles, we create protocols that accelerate recovery, optimize performance, and promote longevity.
            </p>
            <p>
              Our clinic in Dallas is a sanctuary for those seeking to escape the stress of modern life and reconnect with their physiological potential. Whether you are a high-performance athlete, recovering from chronic illness, or simply want to age gracefully, our team is here to guide you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-border">
            <div className="text-center">
              <h3 className="text-4xl font-serif text-primary mb-2">10+</h3>
              <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Modalities</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-serif text-primary mb-2">1000+</h3>
              <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Clients Served</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-serif text-primary mb-2">100%</h3>
              <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Personalized</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
