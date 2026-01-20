import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/service-card";
import { goals, services, ServiceCategory, Service } from "@/lib/data";
import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { cn } from "@/lib/utils";
import saunaTexture from "@assets/generated_images/abstract_warm_glowing_sauna_texture.png";

export default function ServicesPage() {
  const [location] = useLocation();
  const [activeCategory, setActiveCategory] = useState<ServiceCategory | "All">("All");
  const [activeGoal, setActiveGoal] = useState<string | "All">("All");

  // Parse query params for initial state
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const categoryParam = params.get("category");
    const goalParam = params.get("goal");

    if (categoryParam) setActiveCategory(categoryParam as ServiceCategory);
    if (goalParam) setActiveGoal(goalParam);
  }, [location]);

  const filteredServices = services.filter(service => {
    const categoryMatch = activeCategory === "All" || service.category === activeCategory;
    
    // Simple goal matching logic based on tags
    let goalMatch = true;
    if (activeGoal !== "All") {
      const goal = goals.find(g => g.id === activeGoal);
      if (goal) {
        goalMatch = service.tags.some(tag => goal.relatedTags.includes(tag));
      }
    }

    return categoryMatch && goalMatch;
  });

  const categories: (ServiceCategory | "All")[] = ["All", "Clinic", "Medical", "Aesthetics", "Regenerative"];

  return (
    <>
      {/* Page Header */}
      <section className="relative bg-muted/50 pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           <img src={saunaTexture} className="w-full h-full object-cover grayscale" alt="texture" />
        </div>
        <div className="container relative z-10 px-4 md:px-6 text-center">
          <h1 className="text-fluid-h1 font-serif mb-4 md:mb-6">Our Services</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            Explore our comprehensive range of therapies designed to detoxify, heal, and rejuvenate.
          </p>
        </div>
      </section>

      <Section className="min-h-[50vh]">
        {/* Filters */}
        <div className="mb-8 md:mb-12 space-y-6 md:space-y-8">
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-4 py-2 md:px-6 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 border touch-manipulation",
                  activeCategory === cat 
                    ? "bg-primary text-primary-foreground border-primary" 
                    : "bg-background text-muted-foreground border-border hover:border-primary/50"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Goal Chips */}
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
             <button
                onClick={() => setActiveGoal("All")}
                className={cn(
                  "px-3 py-1.5 md:px-4 md:py-1.5 rounded-md text-[10px] md:text-xs font-medium transition-colors border touch-manipulation",
                  activeGoal === "All" 
                    ? "bg-muted text-foreground border-muted-foreground/30" 
                    : "bg-transparent text-muted-foreground border-transparent hover:bg-muted/50"
                )}
              >
                All Goals
              </button>
            {goals.map(goal => (
              <button
                key={goal.id}
                onClick={() => setActiveGoal(goal.id)}
                className={cn(
                  "px-3 py-1.5 md:px-4 md:py-1.5 rounded-md text-[10px] md:text-xs font-medium transition-colors border touch-manipulation",
                  activeGoal === goal.id 
                    ? "bg-muted text-foreground border-muted-foreground/30" 
                    : "bg-transparent text-muted-foreground border-transparent hover:bg-muted/50"
                )}
              >
                {goal.title}
              </button>
            ))}
          </div>
        </div>

        {/* Results */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filteredServices.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 md:py-20 bg-muted/20 rounded-xl">
            <h3 className="font-serif text-lg md:text-xl mb-2">No treatments found</h3>
            <p className="text-muted-foreground mb-6 text-sm md:text-base">Try adjusting your filters to see more results.</p>
            <Button variant="outline" onClick={() => { setActiveCategory("All"); setActiveGoal("All"); }}>
              Reset Filters
            </Button>
          </div>
        )}
      </Section>

      <Section className="bg-primary/5 py-12 md:py-16">
         <div className="text-center">
            <h2 className="text-fluid-h3 font-serif mb-4">Not sure where to start?</h2>
            <p className="text-muted-foreground mb-6 md:mb-8 text-sm md:text-base">Book a consultation with our wellness experts.</p>
            <Button size="lg" className="w-full sm:w-auto rounded-full" asChild>
              <a href="/consultations">Book Consultation</a>
            </Button>
         </div>
      </Section>
    </>
  );
}
