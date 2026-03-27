// "use client";

// import { useParams } from "next/navigation";
// import { motion } from "framer-motion";
// import { ChevronRight, Phone, CheckCircle2 } from "lucide-react";
// import Link from "next/link";

// // 1. All your specific content integrated here
// const serviceData: any = {
//   "nitrous-oxide": {
//     title: "Nitrous Oxide Relaxation",
//     description: "Breathing nitrous oxide will put a smile on your face from the moment you slip into a safe and highly effective method.",
//     details: "Nitrous oxide is a gas used in combination with pure oxygen to relieve dental-related anxiety. It has a natural calming effect that lasts only as long as your procedure.",
//     benefits: ["Safe for children", "Rapid recovery", "Non-toxic", "Patient remains conscious"]
//   },
//   "root-canal": {
//     title: "Root Canal Treatment",
//     description: "Expert care to save your natural teeth and relieve pain effectively.",
//     details: "Our root canal treatments use advanced technology to ensure a painless and safe experience, focused on long-term dental health.",
//     benefits: ["Pain relief", "Advanced technology", "Affordable", "Gentle care"]
//   }
//   // Add other keys like 'pediatric', 'implants' following the same structure
// };

// export default function ServicePage() {
//   const params = useParams();
//   // Safe extraction of slug to prevent "red errors"
//   const slug = typeof params?.slug === 'string' ? params.slug : "nitrous-oxide";
  
//   const data = serviceData[slug] || serviceData["nitrous-oxide"];

//   return (
//     <main className="min-h-screen bg-[#050A09] pt-32 pb-20 text-white">
//       <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12">
        
//         {/* Left Content Area */}
//         <motion.div 
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           className="lg:col-span-8 space-y-8"
//         >
//           <div className="text-sm text-gray-500">
//             Home / Services / <span className="text-[#34D399]">{data.title}</span>
//           </div>

//           <h1 className="text-4xl md:text-5xl font-bold">
//             {data.title}
//             <div className="h-1 w-20 bg-[#34D399] mt-4" />
//           </h1>

//           <p className="text-lg text-gray-400 leading-relaxed">
//             {data.description}
//           </p>

//           <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
//             <h3 className="text-xl font-bold mb-4 text-[#34D399]">Details</h3>
//             <p className="text-gray-300 leading-relaxed">{data.details}</p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-4">
//             {data.benefits.map((benefit: string) => (
//               <div key={benefit} className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/5">
//                 <CheckCircle2 className="w-5 h-5 text-[#34D399]" />
//                 <span className="text-sm font-medium">{benefit}</span>
//               </div>
//             ))}
//           </div>
//         </motion.div>

//         {/* Right Sidebar (Matching your Quick Links structure) */}
//         <aside className="lg:col-span-4">
//           <div className="sticky top-32 bg-white/5 border border-white/10 p-8 rounded-3xl">
//             <h3 className="text-[#34D399] font-bold text-xl mb-6">Quick Links</h3>
//             <ul className="space-y-2">
//               {Object.keys(serviceData).map((key) => (
//                 <li key={key}>
//                   <Link 
//                     href={`/services/${key}`}
//                     className="flex items-center justify-between p-3 rounded-xl hover:bg-[#34D399]/10 transition-all text-sm text-gray-400 hover:text-white group"
//                   >
//                     {serviceData[key].title}
//                     <ChevronRight className="w-4 h-4 text-gray-800 group-hover:text-[#34D399]" />
//                   </Link>
//                 </li>
//               ))}
//             </ul>

//             <div className="mt-8 p-6 bg-[#34D399] rounded-2xl text-black font-bold">
//               <p className="text-xs uppercase tracking-widest mb-2">Need Help?</p>
//               <div className="flex items-center gap-2">
//                 <Phone size={20} />
//                 <span>Call for Appointment</span>
//               </div>
//             </div>
//           </div>
//         </aside>
//       </div>
//     </main>
//   );
// }



// "use client";

// import React from "react";
// import { useParams } from "next/navigation"; // Use next/navigation for App Router
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { ChevronRight, Home, Phone, MessageCircle } from "lucide-react";
// import FloatingButtons from "@/component/flotingbutton";
// import ServicesSidebar from "@/component/servicesidebar";
// import { servicesData } from "@/component/serivcedata";

// // Image imports
// import dentalImplantImg from "@/assets/dental-fillings.jpg";
// import orthodonticImg from "@/assets/orthodontic.jpg";
// import invisalignImg from "@/assets/invisalign.jpg";
// import rootCanalImg from "@/assets/root-canal.jpg";
// import pediatricImg from "@/assets/pediatric.jpg";
// import crownBridgesImg from "@/assets/crown-bridges.jpg";
// import dentureImg from "@/assets/denture.jpg";
// import wisdomTeethImg from "@/assets/wisdom-teeth.jpg";
// import dentalFillingsImg from "@/assets/dental-fillings.jpg";
// import gumTreatmentImg from "@/assets/gum-treatment.jpg";
// import nitrousOxideImg from "@/assets/nitrous-oxide.jpg";

// // Define the map with specific keys
// const imageMap = {
//   "dental-implant": dentalImplantImg,
//   "orthodontic": orthodonticImg,
//   "invisalign": invisalignImg,
//   "root-canal": rootCanalImg,
//   "pediatric": pediatricImg,
//   "crown-bridges": crownBridgesImg,
//   "denture": dentureImg,
//   "wisdom-teeth": wisdomTeethImg,
//   "dental-fillings": dentalFillingsImg,
//   "gum-treatment": gumTreatmentImg,
//   "nitrous-oxide": nitrousOxideImg,
// } as const; // 'as const' makes the keys literal types

// type ImageMapKey = keyof typeof imageMap;

// const ServiceDetail = () => {
//   const params = useParams();
//   const slug = params?.slug as string;
  
//   // Find the service data based on the slug
//   const service = slug ? (servicesData as any)[slug] : null;

//   if (!service) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="container mx-auto py-20 text-center">
//           <h1 className="font-display text-4xl font-bold text-foreground">Service Not Found</h1>
//           <p className="text-muted-foreground mt-4">The service you're looking for doesn't exist.</p>
//           <Link href="/" className="inline-block mt-6 text-primary hover:underline">← Back to Home</Link>
//         </div>
//       </div>
//     );
//   }

//   // Safe check for the image key to remove the red line
//   const imageKey = service.image as ImageMapKey;
//   const serviceImage = imageMap[imageKey] || dentalFillingsImg; // Fallback to a default if key is missing

//   return (
//     <div className="min-h-screen">
//       {/* Breadcrumb */}
//       <div className="bg-secondary/50 border-b border-border">
//         <div className="container mx-auto py-3 px-4">
//           <motion.nav
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             className="flex items-center gap-2 text-sm"
//           >
//             <Link href="/" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
//               <Home className="w-3.5 h-3.5" />
//               Home
//             </Link>
//             <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/50" />
//             <span className="text-primary font-medium">{service.breadcrumb}</span>
//           </motion.nav>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="container mx-auto px-4 py-12">
//         <div className="flex flex-col lg:flex-row gap-10">
//           {/* Content Area */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="flex-1 min-w-0"
//           >
//             {/* Title */}
//             <div className="text-center mb-10">
//               <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
//                 {service.title}
//               </h1>
//               <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
//             </div>

//             {/* Intro Paragraph */}
//             <p className="text-muted-foreground leading-relaxed text-justify mb-8">
//               {service.intro}
//             </p>

//             {/* Service Image */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.95 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//               className="mb-10 flex justify-center"
//             >
//               <img
//                 src={serviceImage.src || serviceImage.src} // Handles both StaticImageData and string
//                 alt={service.title}
//                 className="rounded-2xl shadow-lg border border-border max-w-md w-full object-cover"
//               />
//             </motion.div>

//             {/* Content Sections */}
//             {service.sections?.map((section: any, index: number) => (
//               <motion.div
//                 key={section.heading}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.4, delay: index * 0.05 }}
//                 className="mb-8"
//               >
//                 <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
//                   {section.heading}
//                 </h2>
//                 <p className="text-muted-foreground leading-relaxed text-justify mb-4">
//                   {section.content}
//                 </p>
//                 {section.list && (
//                   <ul className="space-y-2 ml-1">
//                     {section.list.map((item: string, i: number) => (
//                       <motion.li
//                         key={i}
//                         initial={{ opacity: 0, x: -10 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ delay: i * 0.05 }}
//                         className="flex items-start gap-3 text-muted-foreground"
//                       >
//                         <ChevronRight className="w-4 h-4 text-primary mt-1 shrink-0" />
//                         <span>{item}</span>
//                       </motion.li>
//                     ))}
//                   </ul>
//                 )}
//               </motion.div>
//             ))}

//             {/* CTA */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center mt-12"
//             >
//               <h3 className="font-display text-2xl font-bold text-foreground mb-3">
//                 Book Your Appointment Today
//               </h3>
//               <p className="text-muted-foreground mb-6">
//                 Contact us at <a href="tel:9597906838" className="text-primary font-semibold hover:underline">95979 06838</a> to schedule your consultation.
//               </p>
//               <div className="flex flex-wrap gap-4 justify-center">
//                 <a
//                   href="tel:9597906838"
//                   className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
//                 >
//                   <Phone className="w-4 h-4" /> Call Now
//                 </a>
//                 <a
//                   href="https://wa.me/9597906838"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors"
//                 >
//                   <MessageCircle className="w-4 h-4" /> WhatsApp Us
//                 </a>
//               </div>
//             </motion.div>
//           </motion.div>

//           {/* Sidebar */}
//           <div className="lg:w-80">
//             <ServicesSidebar />
//           </div>
//         </div>
//       </div>

//       <FloatingButtons />
//     </div>
//   );
// };

// export default ServiceDetail;

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Wrench, Smile, HeartPulse, Baby, Crown,
  Bone, CircleDot, Scissors, Droplets, Eye, Sparkles
} from "lucide-react";
import FloatingButtons from "@/component/flotingbutton";

const services = [
  { icon: Wrench, name: "Dental Implant", slug: "dental-implant", desc: "Permanent tooth replacement with natural-looking results", color: "from-blue-500/20 to-cyan-500/20", border: "hover:border-blue-400" },
  { icon: Smile, name: "Orthodontic Treatment", slug: "orthodontic-treatment", desc: "Braces and aligners for perfectly aligned teeth", color: "from-green-500/20 to-emerald-500/20", border: "hover:border-green-400" },
  { icon: Eye, name: "Invisalign", slug: "invisalign-treatment", desc: "Clear alternative to braces for a confident smile", color: "from-purple-500/20 to-pink-500/20", border: "hover:border-purple-400" },
  { icon: HeartPulse, name: "Root Canal", slug: "root-canal-treatment", desc: "Save your natural tooth with expert care", color: "from-red-500/20 to-orange-500/20", border: "hover:border-red-400" },
  { icon: Baby, name: "Pediatric Dental", slug: "pediatric-dental-treatment", desc: "Gentle and fun dental care for children", color: "from-yellow-500/20 to-orange-400/20", border: "hover:border-yellow-400" },
  { icon: Crown, name: "Crown & Bridges", slug: "dental-crown-and-bridges", desc: "Restore damaged teeth with custom crowns", color: "from-indigo-500/20 to-blue-500/20", border: "hover:border-indigo-400" },
  { icon: CircleDot, name: "Complete Denture", slug: "complete-denture", desc: "Full and partial dentures for a complete smile", color: "from-teal-500/20 to-green-400/20", border: "hover:border-teal-400" },
  { icon: Bone, name: "Wisdom Removal", slug: "wisdom-teeth-removal", desc: "Safe and painless wisdom tooth extraction", color: "from-slate-500/20 to-gray-500/20", border: "hover:border-slate-400" },
  { icon: Scissors, name: "Dental Fillings", slug: "dental-fillings", desc: "Tooth-colored fillings for cavities", color: "from-cyan-500/20 to-blue-400/20", border: "hover:border-cyan-400" },
  { icon: Droplets, name: "Gum Treatment", slug: "gum-treatment", desc: "Comprehensive periodontal care and treatment", color: "from-emerald-500/20 to-teal-400/20", border: "hover:border-emerald-400" },
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-24 overflow-hidden bg-[#f8fafc]"  style={{ fontFamily: 'Poppins' }}>
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-200/30 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-green-500" />
            <span className="text-green-600 font-bold text-sm uppercase tracking-[0.2em]">Our Expertise</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">
            Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">Oral Care</span>
          </h2>
          <p className="mt-4 text-slate-500 max-w-2xl mx-auto text-lg">
            Experience world-class dental services with a touch of comfort and advanced technology.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="h-full"
            >
              <Link
                href={`/service/${s.slug}`}
                className={`group relative flex flex-col h-full p-8 rounded-[2.5rem] bg-white/70 backdrop-blur-md border border-slate-200 transition-all duration-500 ${s.border} hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden`}
              >
                {/* Hover Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Icon Container */}
                <div className="relative z-10 w-16 h-16 mb-6 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-700 shadow-inner group-hover:bg-white group-hover:text-green-600 group-hover:rotate-12 transition-all duration-500">
                  <s.icon className="w-8 h-8 transition-transform duration-500 group-hover:scale-110" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h5 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-slate-900">
                    {s.name}
                  </h5>
                  <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-600">
                    {s.desc}
                  </p>
                </div>

                {/* Arrow Decor */}
                <div className="mt-auto pt-6 relative z-10 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-[-10px] group-hover:translate-x-0">
                  <span className="text-green-600 font-bold text-xs flex items-center gap-2">
                    Learn More <div className="w-4 h-[1px] bg-green-600" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      <FloatingButtons/>
    </section>
  );
};

export default ServicesSection;