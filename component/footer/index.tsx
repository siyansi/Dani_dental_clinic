import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-topbar text-topbar-foreground">
    <div className="container mx-auto py-16 px-4">
      <div className="grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold">G</span>
            </div>
            <div>
              <span className="font-display font-bold text-lg leading-none block">GUGU</span>
              <span className="text-xs opacity-60 tracking-widest uppercase">Dental Clinics</span>
            </div>
          </div>
          <p className="text-sm opacity-70 leading-relaxed">
            One of the best multispeciality dental clinics offering top dental solutions for all oral issues in Coimbatore.
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2.5">
            {["Home", "About Us", "Services", "Our Doctors", "Gallery", "Blog", "Contact Us"].map((link) => (
              <li key={link}>
                <a href="#" className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-lg mb-4">Our Services</h4>
          <ul className="space-y-2.5">
            {["Dental Implant", "Orthodontics", "Root Canal", "Pediatric", "Crown & Bridges", "Gum Treatment"].map((s) => (
              <li key={s}>
                <a href="#services" className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-lg mb-4">Contact Info</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <Phone className="w-4 h-4 mt-0.5 text-primary" />
              <span className="text-sm opacity-70">095979 06838</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="w-4 h-4 mt-0.5 text-primary" />
              <span className="text-sm opacity-70">gugudentalcbe@gmail.com</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-0.5 text-primary" />
              <span className="text-sm opacity-70">9/3-1, Gnanasivam buildings, 6th street, Saibaba Colony, Tamil Nadu 641038</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="border-t border-topbar-foreground/10 py-5 text-center text-sm opacity-50">
      © 2024 GUGU Dental Clinics. All rights reserved.
    </div>
  </footer>
);

export default Footer;
