import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <>
      <Section className="pt-24 md:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
          <div>
            <h1 className="text-fluid-h1 font-serif mb-4 md:mb-6">Get in Touch</h1>
            <p className="text-muted-foreground text-lg mb-8 md:mb-12">
              Have questions about our services or need help booking? Send us a message or visit our clinic.
            </p>

            <div className="space-y-6 md:space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 md:w-6 md:h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-serif text-lg md:text-xl mb-1">Visit Us</h3>
                  <p className="text-muted-foreground text-sm md:text-base">
                    4300 MacArthur Ave, Suite 185<br/>
                    Dallas, TX 75209
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 md:w-6 md:h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-serif text-lg md:text-xl mb-1">Call Us</h3>
                  <p className="text-muted-foreground text-sm md:text-base">
                    (214) 555-0123
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 md:w-6 md:h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-serif text-lg md:text-xl mb-1">Email</h3>
                  <p className="text-muted-foreground text-sm md:text-base">
                    info@ohzoneclinics.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 md:w-6 md:h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-serif text-lg md:text-xl mb-1">Hours</h3>
                  <p className="text-muted-foreground text-sm md:text-base">
                    Mon - Fri: 9am - 6pm<br/>
                    Sat: 10am - 4pm<br/>
                    Sun: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-sm">
            <h3 className="font-serif text-2xl mb-6">Send a Message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">First Name</label>
                  <Input placeholder="Jane" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Last Name</label>
                  <Input placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input type="email" placeholder="jane@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea placeholder="How can we help you?" className="min-h-[120px]" />
              </div>
              <Button type="submit" className="w-full rounded-full h-12">Send Message</Button>
            </form>
          </div>
        </div>
      </Section>
    </>
  );
}
