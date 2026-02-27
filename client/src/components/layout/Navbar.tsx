import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "@assets/logo.png";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();
  const [open, setOpen] = useState(false);

  const isHome = location === "/";
  // The logo should be dark if we've scrolled, OR if we're on an inner page that starts with a white background.
  // BUT the user asked to try to maintain the white logo. To keep the white logo, we need a dark background.
  // A dark cyan (primary) or dark charcoal (foreground) background works well.
  const useWhiteText = !scrolled && !isHome;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Consultations / Tour", href: "/consultations" },
    { name: "CellCore Detox", href: "/cellcore-detox" },
    { name: "About", href: "/about" },
    { name: "The Wellness Zone", href: "https://thewellness.zone", external: true },
    { name: "Contact", href: "/contact" },
  ];

  const serviceCategories = [
    { name: "Clinic Therapies (Non-Medical)", href: "/services?category=Non-Medical", description: "Ozone Sauna, Lymphatic Therapy, PEMF" },
    { name: "Medical Services", href: "/services?category=Medical", description: "IV Therapy, Injections, EBO2" },
    { name: "Aesthetics (Non-Medical)", href: "/services?category=Non-Medical", description: "Microneedling, Exosomes, Plasma Pen" },
    { name: "Regenerative (Non-Medical)", href: "/services?category=Non-Medical", description: "Prolozone, NAD+, Joint Regeneration" },
    { name: "View All Services", href: "/services", description: "Explore our complete menu of treatments" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500 ease-in-out border-b",
        scrolled 
          ? "bg-background/85 backdrop-blur-md shadow-sm border-border/10 py-3 md:py-4" 
          : isHome
            ? "bg-background/60 backdrop-blur-md border-transparent py-4 md:py-6"
            : "bg-[#003B4A]/60 backdrop-blur-md border-transparent py-4 md:py-6 shadow-sm"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="relative z-50 hover:opacity-80 transition-opacity flex items-center">
          <img src={logo} alt="OhZone Clinics" className={cn("h-8 md:h-10 w-auto transition-all duration-500", (scrolled || (!isHome && false)) && "drop-shadow-md brightness-0")} />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className={cn("bg-transparent hover:bg-transparent data-[state=open]:bg-transparent text-sm font-medium transition-colors",
                  !scrolled && !isHome ? "text-primary-foreground hover:text-white/80" : "text-foreground/80 hover:text-primary"
                )}>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {serviceCategories.map((category) => (
                      <li key={category.name}>
                        <Link href={category.href} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">{category.name}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {category.description}
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.name}>
                  {link.external ? (
                     <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-transparent",
                        !scrolled && !isHome ? "text-primary-foreground hover:text-white/80" : "text-foreground/80 hover:text-primary"
                      )}
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link href={link.href} className={cn(
                      navigationMenuTriggerStyle(), 
                      "bg-transparent hover:bg-transparent",
                      !scrolled && !isHome ? "text-primary-foreground hover:text-white/80" : "text-foreground/80 hover:text-primary",
                      location === link.href && (!scrolled && !isHome ? "text-white font-semibold" : "text-primary font-semibold")
                    )}>
                      {link.name}
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

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
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className={cn("lg:hidden -mr-2", !scrolled && !isHome ? "text-primary-foreground" : "text-foreground")} aria-label="Open Menu">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:w-[400px] border-l border-border/10 bg-background/95 backdrop-blur-xl p-0">
             <div className="flex flex-col h-full overflow-y-auto px-6 py-8">
                <SheetHeader className="text-left mb-8 px-2">
                  <SheetTitle className="text-2xl font-serif font-bold tracking-tight text-left">
                    <Link href="/" onClick={() => setOpen(false)} className="inline-block">
                      <div className="bg-transparent px-0 py-2 inline-flex items-center justify-center">
                        <img src={logo} alt="OhZone Clinics" className="h-8 w-auto brightness-0" />
                      </div>
                    </Link>
                  </SheetTitle>
                </SheetHeader>

                <div className="flex flex-col gap-y-2 flex-grow">
                  <Accordion type="single" collapsible className="w-full border-none">
                    <AccordionItem value="services" className="border-none">
                      <AccordionTrigger className="text-xl font-serif font-medium hover:no-underline py-3 text-left">Services</AccordionTrigger>
                      <AccordionContent className="pb-4 pt-2">
                        <div className="flex flex-col gap-y-6 pl-2">
                          {serviceCategories.map((cat) => (
                            <Link 
                              key={cat.name} 
                              href={cat.href}
                              className="group block"
                              onClick={() => setOpen(false)}
                            >
                              <div className="text-base font-medium text-foreground group-hover:text-primary transition-colors mb-1">
                                {cat.name}
                              </div>
                              <div className="text-sm text-muted-foreground leading-snug">
                                {cat.description}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  {navLinks.map((link) => (
                    link.external ? (
                      <a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xl font-serif font-medium text-foreground hover:text-primary py-3 border-none block"
                        onClick={() => setOpen(false)}
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link 
                        key={link.name} 
                        href={link.href}
                        className={cn(
                          "text-xl font-serif font-medium hover:text-primary py-3 border-none block",
                          location === link.href ? "text-primary" : "text-foreground"
                        )}
                        onClick={() => setOpen(false)}
                      >
                        {link.name}
                      </Link>
                    )
                  ))}
                </div>

                <div className="mt-8 pb-8">
                  <Button className="w-full bg-primary text-primary-foreground rounded-full h-12 text-lg shadow-md" asChild>
                    <a href="https://ohzoneclinics.janeapp.com/" target="_blank" rel="noreferrer">
                      Book Appointment
                    </a>
                  </Button>
                </div>
             </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
