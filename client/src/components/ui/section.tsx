import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  fullWidth?: boolean;
}

export function Section({ children, className, id, fullWidth = false }: SectionProps) {
  return (
    <section id={id} className={cn("py-12 md:py-20 lg:py-32", className)}>
      <div className={cn("container mx-auto px-4 md:px-6", fullWidth ? "max-w-none px-0" : "")}>
        {children}
      </div>
    </section>
  );
}
