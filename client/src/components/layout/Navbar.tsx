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
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled || isOpen ? "bg-background/95 backdrop-blur-md border-b border-border/40 py-3 md:py-4" : "bg-transparent py-4 md:py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/">
          <a className="text-xl md:text-2xl font-serif font-bold tracking-tight text-foreground hover:opacity-80 transition-opacity z-50 relative">
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
                  "text-sm font-medium transition-colors hover:text-primary",
                  location === link.href ? "text-primary border-b border-primary pb-1" : "text-foreground/80"
                )}>
                  {link.name}
                </a>
              </Link>
            )
          ))}
          <Button 
            variant="default" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6"
            asChild
          >
            <a href="https://ohzoneclinics.janeapp.com/" target="_blank" rel="noreferrer">
              Book Appointment
            </a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-foreground p-2 -mr-2 z-50 relative"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-background z-40 flex flex-col pt-24 px-6 animate-in slide-in-from-top-5 duration-300">
          <div className="flex flex-col gap-6 overflow-y-auto pb-20">
            {navLinks.map((link) => (
              link.external ? (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-2xl font-serif font-medium text-foreground hover:text-primary border-b border-border/40 pb-4"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ) : (
                <Link key={link.name} href={link.href}>
                  <a 
                    className={cn(
                      "text-2xl font-serif font-medium hover:text-primary border-b border-border/40 pb-4",
                      location === link.href ? "text-primary" : "text-foreground"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                </Link>
              )
            ))}
            <Button className="w-full mt-4 bg-primary text-primary-foreground rounded-full h-12 text-lg" asChild>
              <a href="https://ohzoneclinics.janeapp.com/" target="_blank" rel="noreferrer">
                Book Appointment
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
