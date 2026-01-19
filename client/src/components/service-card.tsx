import { Link } from "wouter";
import { ArrowRight, Clock, Zap } from "lucide-react";
import { Service } from "@/lib/data";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  service: Service;
  variant?: "minimal" | "detailed";
}

export function ServiceCard({ service, variant = "detailed" }: ServiceCardProps) {
  if (variant === "minimal") {
    return (
      <Link href={`/services/${service.slug}`}>
        <a className="group block h-full">
          <div className="bg-white dark:bg-card border border-border/50 p-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full flex flex-col">
            <h3 className="font-serif text-xl mb-2 group-hover:text-primary transition-colors">{service.name}</h3>
            <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-grow">{service.shortDescription}</p>
            <div className="flex items-center text-xs font-medium text-primary mt-auto">
              Learn More <ArrowRight className="w-3 h-3 ml-1 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </a>
      </Link>
    );
  }

  return (
    <Link href={`/services/${service.slug}`}>
      <a className="group block h-full">
        <div className="bg-white dark:bg-card border border-border/50 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/20 h-full flex flex-col">
          <div className="p-6 md:p-8 flex flex-col h-full">
            <div className="flex justify-between items-start mb-4">
              <span className={cn(
                "text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded-full",
                service.category === "Clinic" && "bg-blue-50 text-blue-700",
                service.category === "Medical" && "bg-green-50 text-green-700",
                service.category === "Aesthetics" && "bg-rose-50 text-rose-700",
                service.category === "Regenerative" && "bg-purple-50 text-purple-700",
              )}>
                {service.category}
              </span>
              <div className="flex items-center text-xs text-muted-foreground gap-3">
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {service.duration}</span>
                {/* <span className="flex items-center gap-1"><Zap className="w-3 h-3" /> {service.intensity}</span> */}
              </div>
            </div>
            
            <h3 className="font-serif text-2xl mb-3 group-hover:text-primary transition-colors">{service.name}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
              {service.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {service.tags.slice(0, 3).map(tag => (
                <span key={tag} className="text-xs bg-muted px-2 py-1 rounded-md text-muted-foreground">
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-auto pt-6 border-t border-border/50 flex items-center justify-between">
              <span className="font-serif text-sm italic text-muted-foreground">Book now</span>
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}
