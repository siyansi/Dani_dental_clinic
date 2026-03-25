"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
// Assuming your logo path - adjust if needed
import logo from "@/assets/hero-dental-2.jpg"; 

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
 {
    label: "Services",
    href: "/service",
    children: [
      { label: "Nitrous Oxide Relaxation", href: "/services/nitrous-oxide" },
      { label: "Orthodontic Treatment", href: "/services/orthodontic" },
      { label: "Pediatric Dental Treatment", href: "/services/pediatric" },
      { label: "Dental Implant", href: "/services/implants" },
      { label: "Root Canal Treatment", href: "/services/root-canal" },
      { label: "Complete Denture", href: "/services/dentures" },
      { label: "Dental Crown And Bridges", href: "/services/crown-bridges" },
      { label: "Wisdom Teeth Removal", href: "/services/wisdom-teeth" },
      { label: "Dental Fillings", href: "/services/fillings" },
      { label: "Gum Treatment", href: "/services/gum-treatment" },
      { label: "Invisalign treatment", href: "/services/invisalign" },
    ],
  },
  { label: "Our Doctors", href: "#doctors" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-[100] bg-[#050A09]/70 backdrop-blur-lg border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 md:w-14 md:h-14 transition-transform duration-300 group-hover:scale-110">
            {/* Using your logo image but falling back to the 'G' icon if image fails */}
            <Image
              src={logo.src}
              alt="GUGU Dental Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="hidden sm:block">
            <span className="font-display font-bold text-lg text-white leading-none block">GUGU</span>
            <span className="text-[10px] text-[#34D399] tracking-[0.2em] uppercase font-bold">Dental Clinics</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-6">
          {navLinks.map((link, i) => (
            <motion.li
              key={link.label}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.05 }}
              className="relative"
              onMouseEnter={() => link.children && setHoveredDropdown(link.label)}
              onMouseLeave={() => setHoveredDropdown(null)}
            >
              <Link
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 flex items-center gap-1 py-2
                ${hoveredDropdown === link.label ? "text-white" : "text-gray-400 hover:text-white"}
                relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px]
                after:bg-[#34D399] after:scale-x-0 after:origin-right
                after:transition-transform after:duration-300
                hover:after:scale-x-100 hover:after:origin-left`}
              >
                {link.label}
                {link.children && (
                  <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${hoveredDropdown === link.label ? "rotate-180" : ""}`} />
                )}
              </Link>

              {/* Dropdown Menu (Glass-morphism style) */}
              <AnimatePresence>
                {link.children && hoveredDropdown === link.label && (
                  <motion.ul
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 w-64 bg-[#0B1220]/95 backdrop-blur-xl shadow-2xl rounded-xl border border-white/10 py-3 mt-1 overflow-hidden"
                  >{link.children.map((child) => (
  <li key={child.href}> {/* Use the href as the key */}
    <Link
      href={child.href} // Use the specific href for each sub-page
      className="block px-5 py-2.5 text-xs font-semibold text-gray-400 hover:bg-[#34D399] hover:text-black transition-all duration-200"
    >
      {child.label} {/* Render the label property of the object */}
    </Link>
  </li>
))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.li>
          ))}
        </ul>

        {/* Call to Action Button (Optional but recommended for Clinic) */}
        <div className="hidden md:block">
           <button className="bg-[#34D399] text-black px-5 py-2 rounded-full text-xs font-bold hover:bg-white transition-all transform hover:scale-105 active:scale-95">
              BOOK NOW
           </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden bg-[#050A09]/95 backdrop-blur-2xl border-t border-white/10 overflow-hidden"
          >
            <ul className="flex flex-col py-6 px-8 gap-4">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="text-lg font-medium text-gray-300 hover:text-[#34D399] transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
  <div className="pl-4 mt-2 flex flex-wrap gap-2">
    {link.children.map((child) => (
      <Link 
        key={child.href} 
        href={child.href}
        onClick={() => setOpen(false)}
        className="text-[10px] bg-white/5 border border-white/10 px-2 py-1 rounded text-gray-500 hover:text-[#34D399] hover:border-[#34D399]/50 transition-colors"
      >
        {child.label} {/* Correctly accessing the object label */}
      </Link>
    ))}
 
                    </div>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;