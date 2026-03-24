import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-primary/5 border-t border-primary/10 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/">
              <a className="text-2xl font-serif font-bold text-foreground">
                OhZone<span className="text-primary font-normal">Clinics</span>
              </a>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Advanced therapies for detox, recovery, aesthetics, and longevity. Experience the future of wellness.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif font-semibold mb-6">Menu</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="/services"><a className="hover:text-primary transition-colors">Services</a></Link></li>
              <li><Link href="/consultations"><a className="hover:text-primary transition-colors">Consultations</a></Link></li>
              <li><Link href="/detox-protocol"><a className="hover:text-primary transition-colors">Detox Protocol</a></Link></li>
              <li><Link href="/about"><a className="hover:text-primary transition-colors">About Us</a></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-semibold mb-6">Connect</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="/contact"><a className="hover:text-primary transition-colors">Contact</a></Link></li>
              <li><a href="https://instagram.com" className="hover:text-primary transition-colors">Instagram</a></li>
              <li><a href="https://facebook.com" className="hover:text-primary transition-colors">Facebook</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-semibold mb-6">Visit Us</h4>
            <p className="text-sm text-muted-foreground mb-2">4300 MacArthur Ave, Suite 185<br/>Dallas, TX 75209</p>
            <a href="mailto:info@ohzoneclinics.com" className="text-sm text-primary hover:underline">info@ohzoneclinics.com</a>
          </div>
        </div>

        <div className="border-t border-primary/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} OhZone Clinics. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary">Privacy Policy</a>
            <a href="#" className="hover:text-primary">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
