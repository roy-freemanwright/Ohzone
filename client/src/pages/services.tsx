import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/service-card";
import { goals, services, ServiceCategory, Service } from "@/lib/data";
import { useState, useEffect } from "react";
import { useLocation, useSearch } from "wouter";
import { cn } from "@/lib/utils";
import saunaTexture from "@assets/generated_images/abstract_warm_glowing_sauna_texture.png";
import { Info } from "lucide-react";
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

export default function ServicesPage() {
  const [location, navigate] = useLocation();
  const searchString = useSearch();
  const [activeCategory, setActiveCategory] = useState<ServiceCategory | "All">("All");
  const [activeGoal, setActiveGoal] = useState<string | "All">("All");

  // Parse query params for initial state and when URL changes
  useEffect(() => {
    const params = new URLSearchParams(searchString);
    const categoryParam = params.get("category");
    const goalParam = params.get("goal");

    if (categoryParam) {
      setActiveCategory(categoryParam as ServiceCategory);
    } else {
      setActiveCategory("All");
    }

    if (goalParam) {
      setActiveGoal(goalParam);
    } else {
      setActiveGoal("All");
    }
  }, [searchString, location]);

  const updateFilters = (category: ServiceCategory | "All", goal: string | "All") => {
    setActiveCategory(category);
    setActiveGoal(goal);
    
    // Keep URL in sync so navbar links work correctly even after manual filtering
    const params = new URLSearchParams();
    if (category !== "All") params.set("category", category);
    if (goal !== "All") params.set("goal", goal);
    
    const newSearch = params.toString();
    navigate(newSearch ? `/services?${newSearch}` : "/services", { replace: true });
  };

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

  const categories: (ServiceCategory | "All")[] = ["All", "Medical", "Non-Medical"];

  return (
    <>
      {/* Page Header */}
      <section className="relative bg-muted/50 pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           <img src={saunaTexture} className="w-full h-full object-cover grayscale" alt="texture" />
        </div>
        <div className="container mx-auto relative z-10 px-4 md:px-6 flex flex-col items-center justify-center text-center">
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
              cat === "Medical" ? (
                <div 
                  key={cat} 
                  className={cn(
                    "flex items-center rounded-full transition-all duration-300 border overflow-hidden",
                    activeCategory === cat 
                      ? "bg-primary text-primary-foreground border-primary" 
                      : "bg-background text-muted-foreground border-border hover:border-primary/50"
                  )}
                >
                  <button
                    onClick={() => updateFilters(cat, activeGoal)}
                    className="px-4 py-2 md:px-5 md:py-2 text-xs md:text-sm font-medium touch-manipulation h-full"
                  >
                    {cat}
                  </button>
                  <Dialog>
                    <DialogTrigger asChild>
                      <button 
                        className={cn(
                          "pr-4 pl-1 py-2 h-full flex items-center transition-opacity cursor-pointer",
                          activeCategory === cat ? "text-primary-foreground/90 hover:text-white" : "text-muted-foreground hover:text-primary"
                        )}
                        aria-label="More info about Medical category"
                      >
                        <HoverCard openDelay={200} closeDelay={100}>
                          <HoverCardTrigger asChild>
                            <span className="flex items-center justify-center p-0.5">
                              <Info className="w-3.5 h-3.5 md:w-4 md:h-4" />
                            </span>
                          </HoverCardTrigger>
                          <HoverCardContent className="w-56 md:w-64 text-xs font-normal text-left text-foreground bg-popover z-50 shadow-lg border-border/50" align="center" sideOffset={12}>
                            <p className="font-semibold mb-1">Good faith exam required.</p>
                            <p className="text-muted-foreground">Click for more details.</p>
                          </HoverCardContent>
                        </HoverCard>
                      </button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle className="font-serif text-2xl">Good Faith Exam (GFE)</DialogTitle>
                        <DialogDescription className="text-base pt-3 leading-relaxed text-left text-foreground/80">
                          To ensure your safety and comply with medical regulations, all clinical medical services require a <strong className="text-foreground font-semibold">Good Faith Exam (GFE)</strong> prior to treatment. 
                          <br /><br />
                          This is a brief consultation with our medical director or nurse practitioner to review your health history and confirm that the requested therapy is safe and appropriate for you.
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </div>
              ) : (
                <button
                  key={cat}
                  onClick={() => updateFilters(cat, activeGoal)}
                  className={cn(
                    "px-4 py-2 md:px-6 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 border touch-manipulation",
                    activeCategory === cat 
                      ? "bg-primary text-primary-foreground border-primary" 
                      : "bg-background text-muted-foreground border-border hover:border-primary/50"
                  )}
                >
                  {cat}
                </button>
              )
            ))}
          </div>

          {/* Goal Chips */}
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
             <button
                onClick={() => updateFilters(activeCategory, "All")}
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
                onClick={() => updateFilters(activeCategory, goal.id)}
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
            <Button variant="outline" onClick={() => updateFilters("All", "All")}>
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
