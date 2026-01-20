import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Consultations", href: "/consultations" },
    { name: "CellCore Detox", href: "/cellcore-detox" },
    { name: "About", href: "/about" },
    { name: "The Wellness Zone", href: "https://thewellness.zone", external: true },
    { name: "Contact", href: "/contact" },
  ];

  const serviceCategories = [
    { name: "Clinic Therapies", href: "/services?category=Clinic", description: "Ozone Sauna, Lymphatic Therapy, PEMF" },
    { name: "Medical Services", href: "/services?category=Medical", description: "IV Therapy, Injections, EBO2" },
    { name: "Aesthetics", href: "/services?category=Aesthetics", description: "Microneedling, Exosomes, Plasma Pen" },
    { name: "Regenerative", href: "/services?category=Regenerative", description: "Prolozone, NAD+, Joint Regeneration" },
    { name: "View All Services", href: "/services", description: "Explore our complete menu of treatments" },
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
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent hover:text-primary data-[state=open]:bg-transparent text-sm font-medium text-foreground/80">Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {serviceCategories.map((category) => (
                      <li key={category.name}>
                        <Link href={category.href}>
                          <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">{category.name}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {category.description}
                            </p>
                          </a>
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
                      className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-transparent hover:text-primary")}
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link href={link.href}>
                      <a className={cn(
                        navigationMenuTriggerStyle(), 
                        "bg-transparent hover:bg-transparent hover:text-primary",
                        location === link.href && "text-primary font-semibold"
                      )}>
                        {link.name}
                      </a>
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
            <Button variant="ghost" size="icon" className="lg:hidden -mr-2 text-foreground" aria-label="Open Menu">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:w-[400px] border-l border-border/10 bg-background/95 backdrop-blur-xl p-0">
             <div className="flex flex-col h-full overflow-y-auto px-6 py-8">
                <SheetHeader className="text-left mb-8 px-2">
                  <SheetTitle className="text-2xl font-serif font-bold tracking-tight">
                    <Link href="/">
                      <a onClick={() => setOpen(false)}>
                        OhZone<span className="text-primary font-normal">Clinics</span>
                      </a>
                    </Link>
                  </SheetTitle>
                </SheetHeader>

                <div className="flex flex-col gap-2 flex-grow">
                  <Accordion type="single" collapsible className="w-full border-none">
                    <AccordionItem value="services" className="border-b border-border/10">
                      <AccordionTrigger className="text-xl font-serif font-medium hover:no-underline py-4">Services</AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-col gap-4 pl-4 pb-4">
                          {serviceCategories.map((cat) => (
                            <Link key={cat.name} href={cat.href}>
                              <a 
                                className="text-base text-muted-foreground hover:text-primary transition-colors py-2 block"
                                onClick={() => setOpen(false)}
                              >
                                {cat.name}
                              </a>
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
                        className="text-xl font-serif font-medium text-foreground hover:text-primary py-4 border-b border-border/10"
                        onClick={() => setOpen(false)}
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link key={link.name} href={link.href}>
                        <a 
                          className={cn(
                            "text-xl font-serif font-medium hover:text-primary py-4 border-b border-border/10",
                            location === link.href ? "text-primary" : "text-foreground"
                          )}
                          onClick={() => setOpen(false)}
                        >
                          {link.name}
                        </a>
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
