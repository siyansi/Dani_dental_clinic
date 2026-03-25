"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronRight, Phone, CheckCircle2 } from "lucide-react";
import Link from "next/link";

// 1. All your specific content integrated here
const serviceData: any = {
  "nitrous-oxide": {
    title: "Nitrous Oxide Relaxation",
    description: "Breathing nitrous oxide will put a smile on your face from the moment you slip into a safe and highly effective method.",
    details: "Nitrous oxide is a gas used in combination with pure oxygen to relieve dental-related anxiety. It has a natural calming effect that lasts only as long as your procedure.",
    benefits: ["Safe for children", "Rapid recovery", "Non-toxic", "Patient remains conscious"]
  },
  "root-canal": {
    title: "Root Canal Treatment",
    description: "Expert care to save your natural teeth and relieve pain effectively.",
    details: "Our root canal treatments use advanced technology to ensure a painless and safe experience, focused on long-term dental health.",
    benefits: ["Pain relief", "Advanced technology", "Affordable", "Gentle care"]
  }
  // Add other keys like 'pediatric', 'implants' following the same structure
};

export default function ServicePage() {
  const params = useParams();
  // Safe extraction of slug to prevent "red errors"
  const slug = typeof params?.slug === 'string' ? params.slug : "nitrous-oxide";
  
  const data = serviceData[slug] || serviceData["nitrous-oxide"];

  return (
    <main className="min-h-screen bg-[#050A09] pt-32 pb-20 text-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12">
        
        {/* Left Content Area */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-8 space-y-8"
        >
          <div className="text-sm text-gray-500">
            Home / Services / <span className="text-[#34D399]">{data.title}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold">
            {data.title}
            <div className="h-1 w-20 bg-[#34D399] mt-4" />
          </h1>

          <p className="text-lg text-gray-400 leading-relaxed">
            {data.description}
          </p>

          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
            <h3 className="text-xl font-bold mb-4 text-[#34D399]">Details</h3>
            <p className="text-gray-300 leading-relaxed">{data.details}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {data.benefits.map((benefit: string) => (
              <div key={benefit} className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/5">
                <CheckCircle2 className="w-5 h-5 text-[#34D399]" />
                <span className="text-sm font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Sidebar (Matching your Quick Links structure) */}
        <aside className="lg:col-span-4">
          <div className="sticky top-32 bg-white/5 border border-white/10 p-8 rounded-3xl">
            <h3 className="text-[#34D399] font-bold text-xl mb-6">Quick Links</h3>
            <ul className="space-y-2">
              {Object.keys(serviceData).map((key) => (
                <li key={key}>
                  <Link 
                    href={`/services/${key}`}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-[#34D399]/10 transition-all text-sm text-gray-400 hover:text-white group"
                  >
                    {serviceData[key].title}
                    <ChevronRight className="w-4 h-4 text-gray-800 group-hover:text-[#34D399]" />
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-6 bg-[#34D399] rounded-2xl text-black font-bold">
              <p className="text-xs uppercase tracking-widest mb-2">Need Help?</p>
              <div className="flex items-center gap-2">
                <Phone size={20} />
                <span>Call for Appointment</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}