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
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border/40 py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/">
          <a className="text-2xl font-serif font-bold tracking-tight text-foreground hover:opacity-80 transition-opacity">
            OhZone<span className="text-primary font-normal">Clinics</span>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
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
          className="md:hidden text-foreground p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed top-[72px] left-0 w-full h-[calc(100vh-72px)] bg-background/95 backdrop-blur-xl border-t border-border/40 p-6 flex flex-col gap-6 animate-in slide-in-from-top-5 overflow-y-auto z-40">
          <div className="flex flex-col gap-6 mt-4">
          {navLinks.map((link) => (
            link.external ? (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-lg font-medium text-foreground hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ) : (
              <Link key={link.name} href={link.href}>
                <a 
                  className="text-lg font-medium text-foreground hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </Link>
            )
          ))}
          <Button className="w-full mt-4 bg-primary text-primary-foreground rounded-full" asChild>
            <a href="https://ohzoneclinics.janeapp.com/" target="_blank" rel="noreferrer">
              Book Appointment
            </a>
          </Button>
        </div>
      )}
    </nav>
  );
}
