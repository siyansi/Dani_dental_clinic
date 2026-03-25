"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  CheckCircle2, 
  MapPin, 
  Award, 
  Activity, 
  Sparkles, 
  Users, 
  Heart, 
  Zap, 
  ChevronRight,
  ShieldCheck,
  Stethoscope
} from "lucide-react";

export default function AboutPage() {
  const branches = [
    "Saibaba Colony",
    "k K Pudur",
    "Thudiyalur",
    "RS Puram",
    "Kavundampalayam",
    "Saravanampatti",
    "Narasimhanaickenpalayam"
  ];

  return (
    <main className="min-h-screen bg-[#050A09] pt-28 pb-20 text-white overflow-hidden">
      {/* Background Ambient Glows */}

      
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#34D399]/10 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#34D399]/5 blur-[100px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12">
        
        {/* LEFT COLUMN: MAIN CONTENT */}
        <div className="lg:col-span-8 space-y-12">
          
          {/* Hero Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            data-cursor-text="GUGU"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight">
              About GUGU dental : <br />
              <span className="text-[#34D399] italic">Best Dental Clinic in Coimbatore</span>
            </h1>
            <h3 className="text-xl font-semibold mt-6 text-[#34D399] tracking-widest uppercase">
              Then , GUGU IS Your RIGHT CHOICE !!
            </h3>
            <p className="mt-6 text-gray-400 text-lg leading-relaxed">
              Welcome to GUGU Dental Clinics, your top choice for a <span className="text-white">Best dental clinic in Coimbatore</span>, 
              located in the heart of Saibaba Colony and Thudiyalur. We provide modern, specialized dental treatments 
              that are both gentle and affordable. Our expert team is dedicated to offering high-quality denture care 
              and finding the best solutions for all your dental needs.
            </p>
          </motion.div>

          {/* New Branch Announcement */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-gradient-to-br from-[#062817] to-transparent border border-[#34D399]/20 relative overflow-hidden group"
          >
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#34D399] rounded-lg">
                  <Zap className="w-5 h-5 text-black fill-current" />
                </div>
                <h4 className="font-bold text-xl">Our New Branch In Thudiyalur</h4>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                We are excited to announce that GUGU Dental Clinic is opening a new branch in Thudiyalur, Coimbatore. 
                This new location will bring our top-quality care even closer to more people. Whether you need routine care, 
                pediatric treatment, or more specialized services, we are here to offer exceptional care.
              </p>
              <Link href="/contact" className="text-[#34D399] text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all">
                VISIT US TODAY <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:rotate-12 transition-transform duration-700">
               <Stethoscope className="w-40 h-40 text-[#34D399]" />
            </div>
          </motion.div>

          {/* Detailed Description Sections */}
          <div className="space-y-10">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <Heart className="text-[#34D399] w-6 h-6" /> Dental Clinic in Saibaba Colony
              </h2>
              <div className="text-gray-400 space-y-4 leading-relaxed">
                <p>
                  At GUGU Dental Clinics, your comfort and satisfaction are our top priorities. We know visiting the dentist 
                  can be stressful, so we try to ensure you feel relaxed and well cared for. Our friendly and compassionate 
                  staff is here to ensure you leave with a smile you’re proud of.
                </p>
                <p>
                  We offer comprehensive services, including <span className="text-white">dental fillings, root canal treatments, 
                  full mouth rehabilitation with implants</span>, and other specialized treatments. Additionally, GUGU Dental 
                  specializes in pediatric treatment, ensuring that children receive exceptional care in a welcoming environment.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <ShieldCheck className="text-[#34D399] w-6 h-6" /> Our Commitment to Transparency
              </h2>
              <p className="text-gray-400 leading-relaxed">
                We believe that outstanding dental care starts with listening to you. We take the time to understand 
                your concerns and needs, making sure you feel heard and valued. You will always know what is happening 
                and why, so you can feel confident in the care you’re receiving.
              </p>
            </section>
          </div>

          {/* Why Choose Us Grid */}
          <div className="grid md:grid-cols-2 gap-6 pt-10">
            <h3 className="col-span-full text-3xl font-display font-bold">Why Choose Gugu Dental Clinic?</h3>
            
            {[
              { 
                title: "Experienced Dentists", 
                desc: "Skilled and caring dentists in Coimbatore dedicated to providing top-quality treatment and patient safety.", 
                icon: <Users /> 
              },
              { 
                title: "Advanced Technology", 
                desc: "Using the latest dental tools and modern equipment to deliver accurate diagnoses and effective treatments.", 
                icon: <Activity /> 
              },
              { 
                title: "Stress-Free Environment", 
                desc: "Focused on patient comfort and clear communication from consultation to treatment for a smooth experience.", 
                icon: <Sparkles /> 
              },
              { 
                title: "Personalized Dental Care", 
                desc: "Tailored treatments to suit your unique needs, from check-ups to smile correction and veneers.", 
                icon: <Heart /> 
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-[#34D399]/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#34D399]/10 flex items-center justify-center text-[#34D399] mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="font-bold text-lg mb-2 text-white">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: QUICK LINKS SIDEBAR */}
        <aside className="lg:col-span-4 space-y-8">
          <div className="sticky top-32 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
            <h3 className="text-[#34D399] font-bold text-xl mb-6 flex items-center gap-2">
              <MapPin className="w-5 h-5" /> Quick Links
            </h3>
            
            <div className="space-y-1">
              {/* Internal Links */}
              <div className="mb-4 space-y-1">
                {["Home", "Services", "Gallery", "Blog", "Contact Us"].map((link) => (
                  <Link key={link} href={`/${link.toLowerCase().replace(" ", "")}`} className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-all text-sm text-gray-400 hover:text-white group">
                    {link} <ChevronRight className="w-3 h-3 text-gray-700 group-hover:text-[#34D399]" />
                  </Link>
                ))}
              </div>

              {/* Branch Links */}
              <div className="pt-4 border-t border-white/10 space-y-1">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#34D399] font-bold mb-3 px-3">Our Locations</p>
                {branches.map((branch) => (
                  <Link 
                    key={branch}
                    href={`/branches/${branch.toLowerCase().replace(/ /g, '-')}`}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-all group"
                  >
                    <span className="text-gray-400 group-hover:text-white text-sm">Dental Clinic in {branch}</span>
                    <ChevronRight className="w-4 h-4 text-gray-700 group-hover:text-[#34D399]" />
                  </Link>
                ))}
              </div>

              {/* Special Features */}
              <div className="pt-4 mt-4 border-t border-white/10 space-y-1">
                <Link href="/services/nitrous-oxide" className="flex items-center justify-between p-3 text-sm text-gray-400 hover:text-white group">
                   Nitrous Oxide Relaxation <ChevronRight className="w-4 h-4 group-hover:text-[#34D399]" />
                </Link>
                <Link href="/doctor" className="flex items-center justify-between p-3 text-sm text-gray-400 hover:text-white group font-bold">
                   Our Doctor <ChevronRight className="w-4 h-4 group-hover:text-[#34D399]" />
                </Link>
              </div>
            </div>

            {/* Emergency CTA */}
            <div className="mt-8 p-6 rounded-2xl bg-[#34D399] text-black">
              <h5 className="font-black uppercase text-[10px] tracking-widest mb-2">Trusted By Thousands</h5>
              <p className="text-sm font-bold mb-4">Loved across Tamil Nadu for our quality care and attention to detail.</p>
              <button className="w-full py-3 bg-black text-white rounded-xl font-bold text-xs hover:bg-white hover:text-black transition-colors">
                BOOK AN APPOINTMENT
              </button>
            </div>
          </div>
        </aside>

      </div>
    </main>
  );
}