import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function GiftCards() {
  return (
    <>
      <div className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-primary/10 to-background overflow-hidden">
        <div className="container px-4 relative z-10 text-center">
          <h1 className="text-fluid-h1 font-serif mb-6">Give the Gift of Wellness</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Treat someone special to an unforgettable experience at OhZone Clinics.
          </p>
        </div>
      </div>

      <Section className="py-12 md:py-20 min-h-[50vh] flex flex-col items-center justify-center">
         <div className="max-w-md mx-auto text-center p-8 bg-card border rounded-2xl shadow-sm">
            <h2 className="text-2xl font-serif mb-4">Gift Cards Coming Soon</h2>
            <p className="text-muted-foreground mb-8">
              We are currently setting up our online gift card portal. Please check back soon or contact our clinic directly to purchase a gift card in person.
            </p>
            <div className="flex flex-col gap-3">
              <Button asChild className="rounded-full w-full">
                <a href="tel:555-555-5555">Call Us Now</a>
              </Button>
              <Button variant="outline" asChild className="rounded-full w-full">
                <Link href="/membership">Back to Memberships</Link>
              </Button>
            </div>
         </div>
      </Section>
    </>
  );
}