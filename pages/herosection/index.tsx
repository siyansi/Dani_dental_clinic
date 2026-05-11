// "use client";

// import { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
// import { 
//   ChevronLeft, ChevronRight, Clock, FlaskConical, Stethoscope, 
//   CheckCircle, Wrench, Smile, HeartPulse, Baby, Crown, 
//   Bone, CircleDot, Scissors, Droplets, Eye, ArrowRight, Play,
//   Sparkles
// } from "lucide-react";

// // Assets
// import heroDental from "@/assets/hero-dental.jpg";
// import heroDental2 from "@/assets/hero-dental-2.jpg";

// const services = [
//   { icon: Wrench, name: "Dental Implant", desc: "Permanent tooth replacement with natural-looking results", color: "from-amber-500/20" },
//   { icon: Smile, name: "Orthodontic Treatment", desc: "Braces and aligners for perfectly aligned teeth", color: "from-blue-500/20" },
//   { icon: Eye, name: "Invisalign", desc: "Clear alternative to braces for a confident smile", color: "from-purple-500/20" },
//   { icon: HeartPulse, name: "Root Canal", desc: "Save your natural tooth with expert care", color: "from-red-500/20" },
//   { icon: Baby, name: "Pediatric", desc: "Gentle and fun dental care for children", color: "from-pink-500/20" },
//   { icon: Crown, name: "Crown & Bridges", desc: "Restore damaged teeth with custom crowns", color: "from-yellow-500/20" },
//   { icon: Bone, name: "Wisdom Removal", desc: "Safe and painless wisdom tooth extraction", color: "from-emerald-500/20" },
//   { icon: Droplets, name: "Gum Treatment", desc: "Comprehensive periodontal care", color: "from-cyan-500/20" },
// ];

// const slides = [
//   {
//     image: heroDental,
//     subtitle: "ESTABLISHED EXCELLENCE",
//     title: "Artistry in \nModern Dentistry",
//     description: "Experience dental care where clinical precision meets aesthetic perfection.",
//   },
//   {
//     image: heroDental2,
//     subtitle: "RESTORING CONFIDENCE",
//     title: "Smile Design \n& Restoration",
//     description: "Specialized treatments tailored to your unique facial symmetry.",
//   },
// ];

// const ModernHero = () => {
//   const [current, setCurrent] = useState(0);
//   const [isHovering, setIsHovering] = useState(false);
//   const { scrollY } = useScroll();
//   const y1 = useTransform(scrollY, [0, 500], [0, 200]);

//   // --- MOUSE GLOW LOGIC ---
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);
//   const smoothX = useSpring(mouseX, { damping: 20, stiffness: 150 });
//   const smoothY = useSpring(mouseY, { damping: 20, stiffness: 150 });

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       mouseX.set(e.clientX);
//       mouseY.set(e.clientY);
//     };
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   useEffect(() => {
//     const timer = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 8000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <main className="relative bg-[#05070A] text-slate-200 overflow-x-hidden selection:bg-[#B89150] selection:text-black">
      
//       {/* 1. LIQUID GLOW CURSOR */}
//       <motion.div
//         className="fixed top-0 left-0 w-[400px] h-[400px] bg-[#B89150]/10 rounded-full blur-[120px] pointer-events-none z-0"
//         style={{ x: smoothX, y: smoothY, translateX: "-50%", translateY: "-50%" }}
//       />
//       <motion.div
//         className="fixed top-0 left-0 w-4 h-4 bg-[#B89150] rounded-full mix-blend-difference pointer-events-none z-[999]"
//         style={{ x: smoothX, y: smoothY, translateX: "-50%", translateY: "-50%" }}
//         animate={{ scale: isHovering ? 4 : 1 }}
//       />

//       {/* --- HERO SECTION --- */}
//       <section className="relative h-screen flex items-center justify-center overflow-hidden">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={current}
//             initial={{ scale: 1.2, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             exit={{ scale: 0.9, opacity: 0 }}
//             transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
//             className="absolute inset-0"
//           >
//             <motion.div style={{ y: y1 }} className="absolute inset-0">
//               <img src={slides[current].image.src} className="w-full h-full object-cover brightness-[0.3]" alt="Luxe" />
//             </motion.div>
//             <div className="absolute inset-0 " />
//           </motion.div>
//         </AnimatePresence>

//         <div className="container mx-auto px-6 relative z-10">
//           <div className="max-w-4xl">
//             <motion.div
//               key={`text-${current}`}
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, delay: 0.4 }}
//             >
//               <span className="flex items-center gap-2 text-[#B89150] text-xs tracking-[0.4em] font-bold mb-6 uppercase">
//                 <Sparkles size={14} /> {slides[current].subtitle}
//               </span>
//               <h1 
//                 onMouseEnter={() => setIsHovering(true)}
//                 onMouseLeave={() => setIsHovering(false)}
//                 className="text-7xl md:text-[6rem] font-serif text-white mb-8 leading-[0.85] whitespace-pre-line tracking-tighter"
//               >
//                 {slides[current].title}
//               </h1>
//               <p className="text-slate-400 text-lg md:text-2xl max-w-xl mb-12 font-light leading-relaxed">
//                 {slides[current].description}
//               </p>

//               <div className="flex flex-wrap gap-8">
//                 <button className="group relative px-12 py-5 overflow-hidden border border-[#B89150] bg-transparent text-[#B89150] hover:text-black transition-colors duration-500">
//                   <div className="absolute inset-0 bg-[#B89150] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500" />
//                   <span className="relative z-10 font-bold tracking-widest text-xs uppercase">Book Appointment</span>
//                 </button>
//                 <button className="flex items-center gap-4 text-white hover:text-[#B89150] transition-colors group">
//                   <span className="font-bold tracking-widest text-xs uppercase">Watch Film</span>
//                   <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
//                     <Play size={16} fill="currentColor" />
//                   </div>
//                 </button>
//               </div>
//             </motion.div>
//           </div>
//         </div>

//         {/* Floating Scroll Indicator */}
//         <motion.div 
//           animate={{ y: [0, 10, 0] }} 
//           transition={{ repeat: Infinity, duration: 2 }}
//           className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
//         >
//           <div className="w-[1px] h-12 bg-gradient-to-b from-[#B89150] to-transparent" />
//           <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
//         </motion.div>
//       </section>

//       {/* --- FASHION SERVICES GRID --- */}
//      <section className="py-32 bg-[#080B14]">
//         <div className="container mx-auto px-6 text-center mb-20">
//             <h2 className="text-[#B89150] font-serif italic text-xl mb-2">Exquisite Services</h2>
//             <h3 className="text-5xl font-bold text-white tracking-tighter uppercase">Our Specializations</h3>
//         </div>

//         <div className="container mx-auto px-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//             {services.map((s, i) => (
//               <motion.div
//                 key={s.name}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.05 }}
//                 whileHover={{ rotateY: 5, rotateX: -5, z: 50 }}
//                 className="group relative p-8 bg-slate-900/40 border border-white/5 hover:border-[#B89150]/40 transition-all duration-500 cursor-pointer overflow-hidden h-[300px] flex flex-col justify-end"
//                 style={{ perspective: "1000px" }}
//               >
//                 <div className="absolute top-8 left-8 text-[#B89150] opacity-30 group-hover:opacity-100 transition-opacity duration-500">
//                   <s.icon className="w-10 h-10 stroke-[1.5px]" />
//                 </div>
                
//                 <div className="relative z-10 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
//                   <h5 className="text-white font-bold text-xl mb-3">{s.name}</h5>
//                   <p className="text-slate-500 text-sm font-light leading-relaxed group-hover:text-slate-300 transition-colors">
//                     {s.desc}
//                   </p>
//                   <div className="h-1 w-0 group-hover:w-full bg-[#B89150] mt-6 transition-all duration-500" />
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//       {/* --- CLASSIC ABOUT SECTION (With Glass Effect) --- */}
//       <section className="py-40 bg-gradient-to-b from-[#05070A] to-[#0A0D14]">
//         <div className="container mx-auto px-6">
//           <div className="grid lg:grid-cols-2 gap-32 items-center">
//             <div className="relative group">
//               <motion.div 
//                 whileHover={{ scale: 0.98 }}
//                 transition={{ duration: 0.8 }}
//                 className="relative z-10 aspect-[4/5] overflow-hidden border border-white/10"
//               >
//                 <img src={heroDental.src} className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" />
//                 <div className="absolute inset-0 bg-[#B89150]/10 mix-blend-overlay" />
//               </motion.div>
//               {/* Floating Glass Card */}
//               <div className="absolute -bottom-12 -right-12 p-10 bg-white/5 backdrop-blur-3xl border border-white/10 hidden md:block">
//                  <p className="text-6xl font-serif text-[#B89150] mb-2">15</p>
//                  <p className="text-[10px] tracking-[0.4em] uppercase text-white/50">Years of Perfection</p>
//               </div>
//             </div>

//             <div className="space-y-10">
//               <h2 className="text-[#B89150] font-serif italic text-2xl">The GUGU Philosophy</h2>
//               <h3 className="text-5xl md:text-7xl font-bold text-white leading-[0.9] tracking-tighter">
//                 WE DON'T JUST TREAT TEETH, <br/> WE DESIGN CONFIDENCE.
//               </h3>
//               <p className="text-slate-400 text-xl font-light leading-relaxed">
//                 Merging Swiss precision with a boutique fashion sensibility. We treat every patient like a canvas, ensuring the smile fits the soul.
//               </p>
//               <div className="grid grid-cols-2 gap-10">
//                 {["Digital Aesthetic", "Sterile Couture", "Global Specialists", "VIP Lounge"].map((text) => (
//                   <div key={text} className="group flex items-center gap-4">
//                     <div className="w-2 h-2 rounded-full bg-[#B89150]" />
//                     <span className="text-sm font-bold uppercase tracking-widest group-hover:translate-x-2 transition-transform">{text}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <style jsx global>{`
//         @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=Inter:wght@200;300;400;600;700&display=swap');
        
//         body {
//           font-family: 'Inter', sans-serif;
//           background-color: #05070A;
//           cursor: none;
//         }
        
//         h1, h2, h3, .font-serif {
//           font-family: 'Playfair Display', serif;
//         }

//         /* Custom Scrollbar */
//         ::-webkit-scrollbar { width: 4px; }
//         ::-webkit-scrollbar-track { background: #05070A; }
//         ::-webkit-scrollbar-thumb { background: #B89150; }
//       `}</style>

//     </main>
//   );
// };

// export default ModernHero;



"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform,Variants  } from "framer-motion";
import { 
  ChevronLeft, ChevronRight, Clock, Stethoscope, Scale,
  CheckCircle, Wrench, Smile, HeartPulse, Baby, Crown, 
  Bone, CircleDot, Scissors, Droplets, Eye, ArrowRight, CalendarDays
} from "lucide-react";
import doctorImg from "@/assets/doctor.jpg";
import cert1 from "@/assets/certified-guarantee-warranty-verify-stamp-word-concept.jpg";
import cert2 from "@/assets/certified-guarantee-warranty-verify-stamp-word-concept.jpg";
import cert3 from "@/assets/certified-guarantee-warranty-verify-stamp-word-concept.jpg";
import {
  CreditCard,

  MapPin,
  Calendar,
  Phone,
  Heart,
} from "lucide-react";
import { Award, Star } from "lucide-react";

// Assuming your assets are in place
import heroDental from "@/assets/hero-dental.jpg";
import heroDental2 from "@/assets/hero-dental-2.jpg";
import FloatingButtons from "@/component/flotingbutton";

const services = [
  { icon: Wrench, name: "Dental Implant", desc: "Permanent tooth replacement with natural-looking results" },
  { icon: Smile, name: "Orthodontic Treatment", desc: "Braces and aligners for perfectly aligned teeth" },
  { icon: Eye, name: "Invisalign Treatment", desc: "Clear alternative to braces for a confident smile" },
  { icon: HeartPulse, name: "Root Canal Treatment", desc: "Save your natural tooth with expert care" },
  { icon: Baby, name: "Pediatric Dental", desc: "Gentle and fun dental care for children" },
  { icon: Crown, name: "Dental Crown & Bridges", desc: "Restore damaged teeth with custom crowns" },
  { icon: CircleDot, name: "Complete Denture", desc: "Full and partial dentures for a complete smile" },
  { icon: Bone, name: "Wisdom Teeth Removal", desc: "Safe and painless wisdom tooth extraction" },
  { icon: Scissors, name: "Dental Fillings", desc: "Tooth-colored fillings for cavities" },
  { icon: Droplets, name: "Gum Treatment", desc: "Comprehensive periodontal care and treatment" },
];


import doc1 from '../../assets/IMG-20260501-WA0031.jpg.jpeg';
import doc2 from '../../assets/IMG-20260328-WA0008.jpg.jpeg';
import doc3 from '../../assets/IMG-20260505-WA0014.jpg.jpeg';
import doc4 from '../../assets/IMG-20260328-WA0006.jpg.jpeg';
import doc5 from '../../assets/IMG-20260302-WA0003.jpg.jpeg';
import hospCert1 from '../../assets/IMG-20260302-WA0003.jpg.jpeg';
import hospCert2 from '../../assets/IMG-20260302-WA0003.jpg.jpeg';
import hospCert3 from '../../assets/IMG-20260302-WA0003.jpg.jpeg';


const hospitalCertificates = [
  { src: hospCert1, title: "ISO 9001:2015 Certified" },
  { src: hospCert2, title: "IDA Registered Clinic" },
  { src: hospCert3, title: "State Health Dept. Licensed" },
];

const doctors = [
  {
    name: "Dr. A. Steffina Lydia Jascinth",
    role: "Oral Physician & Radiologist",
    specialty: "Founder of Dani Dental Clinic",
    image: doc1,
  },
  {
    name: "Dr. S. Rajapriya",
    role: "Dental Surgeon",
    specialty: "General Dentistry",
    image: doc3,
  },
  {
    name: "Dr. G. Sathees Chandra Mouli",
    role: "Oral Physician",
    specialty: "Oral Diagnosis",
    image: doc2,
  },
  {
    name: "Dr. T. Vignesh Prabhu",
    role: "Consultant Oral Maxillofacial Surgeon",
    specialty: "Surgical Specialist",
    image: doc4,
  },
  {
    name: "Dr. PL. Nagappan",
    role: "Consultant Orthodontist",
    specialty: "Braces Specialist",
    image: doc5,
  },
];

const points = [
  {
    icon: CreditCard,
    title: "EMI Options",
    desc: "Interest-free, 100% funding with zero down payment",
  },
  {
    icon: Clock,
    title: "Your Time Matters",
    desc: "Dental care that fits your busy schedule",
  },
  {
    icon: MapPin,
    title: "Convenient Locations",
    desc: "Clinics in Saibaba Colony & Thudiyalur",
  },
  {
    icon: Calendar,
    title: "Open 6 Days",
    desc: "Working from 9:30 a.m. including public holidays",
  },
  {
    icon: Phone,
    title: "Always Available",
    desc: "Book appointment or contact us anytime",
  },
  {
    icon: Heart,
    title: "Trust & Honesty",
    desc: "Lifelong relationships built on genuine care",
  },
];

const slides = [
  {
    image: heroDental,
    subtitle: "ESTABLISHED EXCELLENCE",
    title: "Artistry in \nModern Dentistry",
    description: "Experience dental care where clinical precision meets aesthetic perfection.",
  },
  {
    image: heroDental2,
    subtitle: "RESTORING CONFIDENCE",
    title: "Smile Design \n& Restoration",
    description: "Specialized treatments tailored to your unique facial symmetry.",
  },
];


const posts = [
  {
    title: "How Dental Implants Improve Oral Health",
    date: "Sep 29",
    excerpt: "Dental implants provide a reliable and long-term solution for missing teeth, improving both your smile and oral function.",
  },
  {
    title: "How to Care for Your Invisalign Aligners",
    date: "Sep 29",
    excerpt: "Proper care of your aligners is vital to get the best results from your Invisalign treatment.",
  },
  {
    title: "Pre-Summer Dental Checkup Tips",
    date: "Feb 20",
    excerpt: "A pre-summer visit to your dentist can help you avoid sudden dental problems and enjoy your vacation stress-free.",
  },
];

const items = [
  {
    icon: Stethoscope,
    title: "Our Mission",
    text: "To provide best quality dental treatment by creating value and grow lifelong relationship while delivering honest and compassionate dental care with individualized service to our patients.",
  },
  {
    icon: Eye,
    title: "Vision Statement",
    text: "Our vision is to establish the best chain of dental clinics with complete multi speciality ethical practice.",
  },
  {
    icon: Scale,
    title: "Clinic Principles",
    text: "The Best and Affordable Dentistry is When the Right Thing is Done Extremely Well the First time and it lasts for a long time.",
  },
];


const ModernHero = () => {
  const [current, setCurrent] = useState(0);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 8000);
    return () => clearInterval(timer);
  }, []);

const card: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6 },
  },
};
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// const card = {
//   hidden: {
//     opacity: 0,
//     y: 50,
//     scale: 0.95,
//   },
//   show: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: {
//       duration: 0.6,
//       ease: "easeOut",
//     },
//   },
// };
const highlights = [
    "First in Coimbatore to adopt Life-like natural restoration with Digital Smile Designing",
    "Expert in handling anxious kids and specially-abled children under general anesthesia",
    "Specialized in teeth alignment with clear Aligners — invisible treatment with quick results",
  ];

  const certificates = [cert1, cert2, cert3];

// const container = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.15,
//     },
//   },
// };

// const card = {
//   hidden: { opacity: 0, y: 50, scale: 0.95 },
//   show: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// };

  return (
    <main className=" text-slate-200 overflow-x-hidden  " style={{ fontFamily: 'Poppins' }}>
      
      {/* --- LUXE HERO SECTION --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden ">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <motion.div style={{ y: y1 }} className="absolute inset-0">
              <img
                src={slides[current].image.src}
                className="w-full h-full object-cover grayscale-[20%] brightness-[0.4]"
                alt="Luxe Clinic"
              />
            </motion.div>
            {/* Elegant Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F1A] via-transparent to-[#0B0F1A]/50" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F1A] via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              key={`text-${current}`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <span className="inline-block px-4 py-1 border border-gold-500/30 bg-gold-500/10 text-green-500 rounded-full text-xs tracking-[0.3em] font-bold mb-6">
                {slides[current].subtitle}
              </span>
              <h1 className="text-6xl md:text-8xl font-serif text-white mb-6 leading-[1.1] whitespace-pre-line">
                {slides[current].title}
              </h1>
              <p className="text-slate-400 text-lg md:text-xl max-w-xl mb-10 font-light leading-relaxed">
                {slides[current].description}
              </p>

              <div className="flex flex-wrap gap-5">
                <button className="px-10 py-4  bg-green-500 rounded-4xl text-white  hover:bg-[#967540] transition-all duration-300 font-bold tracking-widest text-xs uppercase shadow-[0_10px_30px_rgba(184,145,80,0.3)]">
                  Consultation
                </button>
                <button className="px-10 py-4 border border-white/20 text-white backdrop-blur-md hover:bg-white hover:text-black transition-all duration-300 font-bold tracking-widest text-xs uppercase">
                  Our Gallery
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Progress Navigation */}
        <div className="absolute right-12 bottom-12 flex items-center gap-6">
          <div className="text-white/30 font-serif text-xl italic">0{current + 1}</div>
          <div className="h-[1px] w-24 bg-white/20 relative overflow-hidden">
             <motion.div 
               key={current}
               initial={{ x: "-100%" }}
               animate={{ x: "0%" }}
               transition={{ duration: 8, ease: "linear" }}
               className="absolute inset-0 bg-green-500"
             />
          </div>
          <div className="text-white/30 font-serif text-xl italic">0{slides.length}</div>
        </div>
      </section>
    
      {/* --- CLASSIC ABOUT SECTION --- */}
      <section className="py-16 relative bg-cyan-100/500     ">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 rounded-sm overflow-hidden shadow-2xl">
                 <img src={heroDental.src} className="w-full grayscale-[40%] hover:grayscale-0 transition-all duration-700" alt="Clinic Interior" />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 border-[9px] border-green-500 -z-0 hidden md:block" />
              <div className="absolute -top-10 -left-10 bg-green-500 p-8 hidden md:block">
                 <p className="text-white text-4xl font-serif font-bold">15+</p>
                 <p className="text-white/80 text-[10px] uppercase tracking-tighter">Years of Legacy</p>
              </div>
            </motion.div>

            <div>
              <h2 className="text-black font-serif italic text-2xl mb-4">A Legacy of Care</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-green-500 mb-8 leading-tight">
                Crafting Signature Smiles <br/> at DANI Dental
              </h3>
              <p className="text-slate-600 leading-relaxed mb-10 text-lg">
                We believe that every smile is a masterpiece. Our multispeciality clinic merges 
                Swiss-standard technology with a boutique patient experience to ensure your journey 
                is as beautiful as the result.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-12">
                {["Digital Smile Design", "Boutique Comfort", "Global Expertise", "Modern Sterile Tech"].map((text) => (
                  <div key={text} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm font-semibold tracking-wide text-slate-400">{text}</span>
                  </div>
                ))}
              </div>

              <motion.button 
                whileHover={{ gap: "2rem" }}
                className="flex items-center gap-4 text-green-500 font-bold text-xs uppercase tracking-[0.2em]"
              >
                Learn More About Us <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3D SERVICES GRID --- */}
     <section className="py-12 relative overflow-hidden bg-cyan-100/50     -gradient-to-r from-[#0B1220] via-[#6d7d7c52] to-[#0B1220]">

  {/* background glow */}
  <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-green-200 blur-[150px] opacity-30 rounded-full" />
  {/* <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-emerald-200 blur-[150px] opacity-30 rounded-full" /> */}

  {/* heading */}
  <div className="container mx-auto px-6 text-center mb-20">
    <h2 className="text-black  text-xl mb-2">
      Exquisite Services
    </h2>

    <h3 className="text-5xl font-bold text-green-500 tracking-tight font-serif italic uppercase">
      Our Specializations
    </h3>
  </div>

  <div className="container mx-auto px-6">

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

      {services.map((s, i) => (

        <motion.div
          key={s.name}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08, duration: 0.5 }}
          whileHover={{ y: -8 }}
          className="group relative p-8 rounded-3xl bg-white/70 backdrop-blur-xl border border-white/40 shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer"
        >

          {/* gradient hover overlay */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-green-100 via-transparent to-green-200" />

          {/* glow highlight */}
          <div className="absolute -left-40 top-0 h-full w-40 bg-gradient-to-r from-transparent via-white/60 to-transparent rotate-12 opacity-0 group-hover:opacity-100 group-hover:translate-x-[500px] transition-all duration-1000" />

          {/* icon */}
          <div className="relative z-10 mb-6">

            <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center text-green-600 group-hover:bg-green-500 group-hover:text-white transition-all duration-300 shadow-sm">

              <s.icon className="w-6 h-6 stroke-[1.5px]" />

            </div>

          </div>

          {/* title */}
          <h5 className="relative z-10 text-gray-900 font-bold text-xl mb-3">
            {s.name}
          </h5>

          {/* description */}
          <p className="relative z-10 text-gray-600 text-sm leading-relaxed group-hover:text-gray-800 transition-colors">
            {s.desc}
          </p>

          {/* animated bottom line */}
          <div className="relative z-10 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-green-400 to-emerald-500 mt-6 transition-all duration-500" />

        </motion.div>

      ))}

    </div>

  </div>
</section>


      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=Inter:wght@300;400;600;700&display=swap');
        
        body {
          font-family: 'Inter', sans-serif;
        }
        
        h1, h2, .font-serif {
          font-family: 'Playfair Display', serif;
        }

        .shadow-luxe {
          shadow-box: 0 40px 100px -20px rgba(0,0,0,0.5);
        }
      `}</style>



       <section
      id="doctors"
      className="bg-cyan-100/50  overflow-hidden"
    >


 <div className="mb-18 mt-10 container mx-auto px-4">
  {/* Title */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-center mb-16"
  >
    <h6 className="text-black text-md font-semibold uppercase tracking-[0.4em] mb-4">
      Hospital Founder
    </h6>
    <span className="text-green-500 font-serif italic text-4xl md:text-6xl font-display font-bold">
      Our Expert Doctor
    </span>
  </motion.div>

  <div className="grid lg:grid-cols-2 gap-14 items-center">
    {/* Doctor Image (Founder Featured) */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative group"
    >
      <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
        {/* Main Image */}
        <img
          src={doc1.src}
          alt="Dr. A. Steffina Lydia Jascinth"
          className="w-full h-[650px] object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Founder Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 backdrop-blur-md bg-black/10">
          <h3 className="font-display text-3xl font-bold text-white">
            Dr. A. Steffina Lydia Jascinth
          </h3>
          <p className="text-green-400 font-semibold text-lg flex items-center gap-2">
             BDS, MDS — Oral Physician & Radiologist
          </p>
          <p className="text-white/70 text-sm mt-1 uppercase tracking-widest">
            Founder of Dani Dental Clinic
          </p>
        </div>
      </div>

      {/* Floating Award Badge */}
      <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-green-500 rounded-3xl flex items-center justify-center shadow-xl transform rotate-12 group-hover:rotate-0 transition-transform duration-500">
        <Award className="w-10 h-10 text-white" />
      </div>
    </motion.div>

    {/* Right Content - Founder Highlights */}
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <div className="mb-8">
        <h4 className="text-3xl font-bold text-slate-800 mb-4">Professional Profile</h4>
        <p className="text-slate-600 leading-relaxed italic">
          "Dedicated to providing advanced oral diagnostic care and precision radiology 
          to ensure the highest standards of dental health for our community."
        </p>
      </div>

      <ul className="space-y-6 mb-10">
        {[
          "Specialized in Oral Medicine and Maxillofacial Radiology",
          "Expert in Digital Imaging and Diagnostic Precision",
          "Advanced treatment planning for complex dental cases",
          "Leading the clinical team with 10+ years of expertise"
        ].map((item, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + i * 0.15 }}
            viewport={{ once: true }}
            className="flex gap-4 items-start group/item"
          >
            <div className="w-10 h-10 flex-shrink-0 rounded-xl bg-green-50 flex items-center justify-center text-green-500 group-hover/item:bg-green-500 group-hover/item:text-white transition-all duration-300">
              <Star className="w-5 h-5" />
            </div>
            <p className="text-slate-700 font-medium leading-relaxed mt-2">{item}</p>
          </motion.li>
        ))}
      </ul>

      {/* Mini Certification Grid */}
      <div>
        <h4 className="font-semibold text-sm uppercase tracking-widest mb-6 text-slate-400">
          Professional Accreditations
        </h4>
        <div className="grid grid-cols-3 gap-4">
          {certificates.map((cert, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group overflow-hidden rounded-2xl border border-slate-200 p-2 bg-white shadow-sm"
            >
              <img
                src={cert.src}
                alt="Certification"
                className="w-full h-24 object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  </div>
</div>


      

{/* 
<div className="container mx-auto px-4">
   
    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
      <div className="max-w-2xl">
        <h6 className="text-green-600 font-bold uppercase tracking-widest text-sm mb-2">
          Official Credentials
        </h6>
        <h2 className="text-4xl font-bold text-gray-900 font-display">
          Clinic Certifications & Hospital Accreditation
        </h2>
      </div>
      <div className="h-1 w-24 bg-green-500 rounded-full hidden md:block mb-4" />
    </div>

   
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {hospitalCertificates.map((cert, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -10 }}
          className="group relative bg-white p-4 rounded-3xl shadow-lg border border-gray-100"
        >
          
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100">
            <img
              src={cert.src.src}
              alt={cert.title}
              className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-green-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

         
          <div className="mt-4 flex items-center justify-between px-2">
            <span className="font-semibold text-gray-700">{cert.title}</span>
            <div className="p-2 bg-green-50 rounded-full text-green-600">
              <Award size={18} />
            </div>
          </div>
        </motion.div>
      ))}
    </div>

    
    <motion.p 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="text-center text-gray-400 text-sm mt-12 italic"
    >
      * All certificates are verified and updated for the year 2026.
    </motion.p>
  </div> */}
    </section>

  <section className="section-padding relative overflow-hidden bg-cyan-100/50   gradient-to-b from-green-50 via-white to-green-50">

      {/* background decorative blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-green-200 rounded-full blur-3xl opacity-30" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-emerald-200 rounded-full blur-3xl opacity-30" />

      <div className="container mt-10 mb-16 mx-auto relative">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-black font-semibold text-md uppercase tracking-widest">
            Why Choose Us
          </span>

          <h2 className="font-serif italic text-4xl md:text-5xl font-bold text-green-500 mt-3">
            Patient Friendly Approach
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {points.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative p-7 rounded-3xl backdrop-blur-xl border border-white/40 bg-white/70 shadow-md hover:shadow-xl transition-all duration-500"
            >

              {/* icon */}
              <div className="relative mb-5">

                <div className="absolute inset-0  blur-xl opacity-0 group-hover:opacity-40 transition duration-500 rounded-xl" />

                <div className="relative w-14 h-14 rounded-xl bg-green-100 text-green-600 flex items-center justify-center group-hover:bg-green-500 group-hover:text-white transition-all duration-300">

                  <p.icon className="w-6 h-6" />

                </div>
              </div>

              {/* title */}
              <h4 className="font-display font-semibold text-lg text-gray-900 mb-2">
                {p.title}
              </h4>

              {/* description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {p.desc}
              </p>

              {/* hover glow border */}
              <div className="absolute inset-0 rounded-3xl border border-green-400/0 group-hover:border-green-400/30 transition-all duration-500 pointer-events-none" />

            </motion.div>
          ))}

        </div>
      </div>
    </section>


<section
  id="blog"
  className=" py-20 section-padding overflow-hidden bg-cyan-100/50   gradient-to-b from-green-50 via-white to-green-50"
>
  <div className="container mx-auto">

    {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">
        Stay Updated
      </span>

      <h2 className="font-serif italic text-4xl md:text-5xl font-bold text-gray-900 mt-3">
        Latest News
      </h2>
    </motion.div>

    {/* Cards */}
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="grid md:grid-cols-3 gap-10"
    >
      {posts.map((post, i) => (
        <motion.article
          key={post.title}
          variants={card}
          whileHover={{
            y: -12,
            scale: 1.03,
          }}
          transition={{ type: "spring", stiffness: 200, damping: 18 }}
          className="group relative rounded-3xl overflow-hidden bg-white/70 backdrop-blur-xl border border-white/40 shadow-lg hover:shadow-2xl transition-all duration-500"
        >
          {/* gradient glow */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-green-400/20 to-emerald-300/10" />

          {/* Image area */}
          <div className="relative h-52 flex items-center justify-center bg-gradient-to-br from-green-100 to-emerald-50 overflow-hidden">

            <span className="font-display text-7xl font-bold text-green-400/30 transition-transform duration-700 group-hover:scale-125">
              {i + 1}
            </span>

            {/* animated highlight */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[200%] transition duration-1000" />
          </div>

          {/* Content */}
          <div className="p-7 relative">

            <div className="flex items-center gap-2 text-gray-500 text-xs mb-3">
              <CalendarDays className="w-4 h-4" />
              <span>{post.date}</span>
            </div>

            <h3 className="font-display font-semibold text-xl text-gray-900 mb-3 group-hover:text-green-600 transition duration-300 line-clamp-2">
              {post.title}
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed mb-5 line-clamp-3">
              {post.excerpt}
            </p>

            <a
              href="#"
              className="inline-flex items-center gap-2 text-green-600 text-sm font-semibold"
            >
              Read More

              <motion.span
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </a>
          </div>

          {/* glowing border */}
          <div className="absolute inset-0 rounded-3xl border border-green-400/0 group-hover:border-green-400/30 transition duration-500 pointer-events-none" />
        </motion.article>
      ))}
    </motion.div>
  </div>
</section>


  <section className="py-24 bg-gradient-to-b from-green-50 via-white to-green-50 relative overflow-hidden">

      {/* soft background glow */}
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-green-200 rounded-full blur-3xl opacity-30"/>
      <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-emerald-200 rounded-full blur-3xl opacity-30"/>

      <div className="container mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-serif italic font-bold text-gray-900">
            Mission & Vision Statement
          </h2>

          <div className="w-16 h-1 bg-green-500 mx-auto mt-4 rounded-full"/>

          <p className="max-w-2xl mx-auto text-gray-600 mt-6 leading-relaxed">
            We use a multi-modality approach to first identify the hurdles facing a patient's
            health, and then identify methods to effectively build a better picture of health.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">

          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.04 }}
              className="group p-10 rounded-3xl bg-white/70 backdrop-blur-xl border border-white/40 shadow-lg hover:shadow-2xl transition-all duration-500 text-center"
            >

              {/* Icon */}
              <div className="relative flex justify-center mb-6">

                <div className="absolute w-20 h-20 bg-green-400/30 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition duration-500"/>

                <div className="relative w-20 h-20 rounded-full bg-gray-900 text-white flex items-center justify-center group-hover:bg-green-500 transition duration-300 shadow-md">

                  <item.icon className="w-8 h-8"/>

                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {item.title}
              </h3>

              {/* Text */}
              <p className="text-gray-600 leading-relaxed text-sm">
                {item.text}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
<FloatingButtons/>
    </main>
  );
};

export default ModernHero;