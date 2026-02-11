import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-narrow section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <span className="text-sm font-extrabold text-primary-foreground">L</span>
              </div>
              <div className="leading-tight">
                <span className="text-base font-extrabold tracking-tight">Luminara</span>
                <span className="block text-[10px] font-medium opacity-70 -mt-0.5">ICT & Power Solutions</span>
              </div>
            </div>
            <p className="text-sm opacity-70 leading-relaxed">
              Empowering Kenyan businesses with reliable internet, unbreachable security, and clean solar power.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold mb-4 uppercase tracking-wider opacity-90">Services</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><Link to="/services" className="hover:opacity-100 transition-opacity">ICT & Internet Solutions</Link></li>
              <li><Link to="/services" className="hover:opacity-100 transition-opacity">Security & Surveillance</Link></li>
              <li><Link to="/services" className="hover:opacity-100 transition-opacity">Solar Power Solutions</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold mb-4 uppercase tracking-wider opacity-90">Company</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><Link to="/about" className="hover:opacity-100 transition-opacity">About Us</Link></li>
              <li><Link to="/projects" className="hover:opacity-100 transition-opacity">Projects</Link></li>
              <li><Link to="/blog" className="hover:opacity-100 transition-opacity">Blog</Link></li>
              <li><Link to="/contact" className="hover:opacity-100 transition-opacity">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold mb-4 uppercase tracking-wider opacity-90">Contact</h4>
            <ul className="space-y-3 text-sm opacity-70">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 shrink-0" />
                <span>+254 710 852 527</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 shrink-0" />
                <span>theluminaragroup@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>Nairobi & Central Kenya</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10 text-center text-xs opacity-50">
          © {new Date().getFullYear()} Luminara ICT & Power Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
