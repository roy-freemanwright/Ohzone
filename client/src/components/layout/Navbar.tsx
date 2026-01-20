import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Consultations", href: "/consultations" },
    { name: "CellCore Detox", href: "/cellcore-detox" },
    { name: "About", href: "/about" },
    { name: "The Wellness Zone", href: "https://thewellness.zone", external: true },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500 ease-in-out border-b",
        scrolled 
          ? "bg-background/85 backdrop-blur-md shadow-sm border-border/10 py-3 md:py-4" 
          : "bg-background/60 backdrop-blur-md border-transparent py-4 md:py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/">
          <a className="relative z-50 text-xl md:text-2xl font-serif font-bold tracking-tight text-foreground hover:opacity-80 transition-opacity">
            OhZone<span className="text-primary font-normal">Clinics</span>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            link.external ? (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ) : (
              <Link key={link.name} href={link.href}>
                <a className={cn(
                  "text-sm font-medium transition-colors hover:text-primary relative",
                  location === link.href ? "text-primary font-semibold" : "text-foreground/80"
                )}>
                  {link.name}
                  {location === link.href && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full" />
                  )}
                </a>
              </Link>
            )
          ))}
          <Button 
            variant="default" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 shadow-sm hover:shadow-md transition-all"
            asChild
          >
            <a href="https://ohzoneclinics.janeapp.com/" target="_blank" rel="noreferrer">
              Book Appointment
            </a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-foreground p-2 -mr-2 z-50 relative touch-manipulation"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={cn(
          "fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col pt-24 px-6 transition-transform duration-300 lg:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col gap-6 overflow-y-auto pb-20 h-full">
          {navLinks.map((link) => (
            link.external ? (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-2xl font-serif font-medium text-foreground hover:text-primary border-b border-border/20 pb-4"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ) : (
              <Link key={link.name} href={link.href}>
                <a 
                  className={cn(
                    "text-2xl font-serif font-medium hover:text-primary border-b border-border/20 pb-4",
                    location === link.href ? "text-primary" : "text-foreground"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </Link>
            )
          ))}
          <div className="mt-auto pb-8">
            <Button className="w-full bg-primary text-primary-foreground rounded-full h-12 text-lg shadow-md" asChild>
              <a href="https://ohzoneclinics.janeapp.com/" target="_blank" rel="noreferrer">
                Book Appointment
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
