"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Instagram, Facebook, Globe, ArrowRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/service" },
    { name: "Our Doctors", path: "/doctors" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact Us", path: "/contact" },
  ];

  const serviceLinks = [
    { name: "Dental Implant", path: "/service/dental-implant" },
    { name: "Orthodontics", path: "/service/orthodontic-treatment" },
    { name: "Root Canal", path: "/service/root-canal-treatment" },
    { name: "Pediatric", path: "/service/pediatric-dental-treatment" },
    { name: "Invisalign", path: "/service/invisalign-treatment" },
    { name: "Gum Treatment", path: "/service/gum-treatment" },
  ];

  return (
    <footer className="relative mt-20 overflow-hidden bg-slate-950 text-slate-200">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />
      
      <div className="container mx-auto py-20 px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.3)] group-hover:rotate-12 transition-transform duration-500">
                <span className="text-white font-black text-xl">G</span>
              </div>
              <div>
                <span className="font-bold text-2xl tracking-tighter block text-white">GUGU</span>
                <span className="text-[10px] opacity-50 tracking-[0.2em] uppercase font-bold">Dental Clinics</span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Providing world-class dental care with advanced technology and a gentle touch across Coimbatore.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Globe].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center hover:border-green-500/50 hover:text-green-500 transition-colors"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-8 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500" /> Navigation
            </h4>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.path}
                    className="text-slate-400 hover:text-green-500 text-sm flex items-center gap-2 group transition-colors"
                  >
                    <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-8 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500" /> Our Services
            </h4>
            <ul className="space-y-4">
              {serviceLinks.map((s) => (
                <li key={s.name}>
                  <Link 
                    href={s.path}
                    className="text-slate-400 hover:text-green-500 text-sm flex items-center gap-2 group transition-colors"
                  >
                    <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Locations */}
          <div>
            <h4 className="text-white font-bold text-lg mb-8 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500" /> Contact Info
            </h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 text-green-500">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase mb-1">Emergency Call</p>
                  <p className="text-sm font-bold text-white">095979 06838</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <MapPin size={16} className="text-green-500 shrink-0 mt-1" />
                  <div className="text-xs text-slate-400 leading-relaxed">
                    <span className="text-white font-bold block mb-1 uppercase tracking-wider text-[10px]">Saibaba Colony</span>
                    6th street, Velappar Street, Coimbatore - 641038
                  </div>
                </div>
                <div className="flex gap-3">
                  <MapPin size={16} className="text-green-500 shrink-0 mt-1" />
                  <div className="text-xs text-slate-400 leading-relaxed">
                    <span className="text-white font-bold block mb-1 uppercase tracking-wider text-[10px]">Thudiyalur</span>
                    64E, Mettupalayam Rd, VKL Nagar - 641034
                  </div>
                </div>
                <div className="flex gap-3">
                  <MapPin size={16} className="text-green-500 shrink-0 mt-1" />
                  <div className="text-xs text-slate-400 leading-relaxed">
                    <span className="text-white font-bold block mb-1 uppercase tracking-wider text-[10px]">Mettupalayam</span>
                    208 E2, Annur Rd, above Nibin MRI - 641301
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
     <div className="border-t border-slate-900 bg-black/20 backdrop-blur-md relative z-10">
  <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4 relative">
    
    <p className="text-slate-500 text-xs">
      © {currentYear} <span className="text-slate-300 font-bold">GUGU Dental Clinics</span>. All rights reserved.
    </p>

    {/* Invisible Brand Watermark */}
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
      <span 
        className="text-[10px] uppercase tracking-[0.5em] font-bold transition-opacity duration-1000"
        style={{ 
          color: '#030711', // One shade darker than slate-950, nearly invisible
          textShadow: '0px 0px 1px rgba(255,255,255,0.01)' 
        }}
      >
        Peter Stack
      </span>
    </div>

    <div className="flex gap-8 text-[11px] font-bold uppercase tracking-widest text-slate-500">
      <Link href="/privacy" className="hover:text-green-500 transition-colors">Privacy Policy</Link>
      <Link href="/terms" className="hover:text-green-500 transition-colors">Terms of Service</Link>
    </div>
  </div>
</div>
    </footer>
  );
};

export default Footer;