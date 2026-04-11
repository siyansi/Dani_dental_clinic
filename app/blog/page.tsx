"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Home, ChevronRight, Calendar, User } from "lucide-react";
import { blogPosts } from "@/component/blogdata";
import { StaticImageData } from "next/image";

// Blog image imports (Keeping your existing imports)
import kidsDentalImg from "@/assets/kids-dental-checkup.jpg";
import missingTeethImg from "@/assets/missing-teeth-treatment.jpg";
import dentalTourismImg from "@/assets/dental-tourism-india.jpg";
import preSummerImg from "@/assets/pre-summer-checkup.jpg";
import immediateImplantsImg from "@/assets/immediate-implants.jpg";
import christmasImg from "@/assets/christmas-dental-tips.jpg";
import newYearImg from "@/assets/new-year-dental-tips.jpg";
import pedodontistImg from "@/assets/pedodontist-day.jpg";
import childrensDayImg from "@/assets/childrens-day-dental.jpg";
import morningNightImg from "@/assets/morning-vs-night-brushing.jpg";
import oralCancerImg from "@/assets/oral-cancer-awareness.jpg";
import implantsHealthImg from "@/assets/implants-oral-health.jpg";
import invisalignCareImg from "@/assets/invisalign-care.jpg";
import dentalAnxietyImg from "@/assets/dental-anxiety-kids.jpg";
import cavitiesImg from "@/assets/protect-from-cavities.jpg";
import teethScalingImg from "@/assets/teeth-scaling.jpg";
import bracesImg from "@/assets/braces-for-teeth.jpg";
import orthodonticImg from "@/assets/orthodontic-benefits.jpg";
import smileMakeoverImg from "@/assets/smile-makeover.jpg";
import rootCanalPainImg from "@/assets/root-canal-pain.jpg";
import FloatingButtons from "@/component/flotingbutton";

const blogImageMap: Record<string, StaticImageData> = {
  "kids-dental-checkup": kidsDentalImg,
  "missing-teeth-treatment": missingTeethImg,
  "dental-tourism-india": dentalTourismImg,
  "pre-summer-checkup": preSummerImg,
  "immediate-implants": immediateImplantsImg,
  "christmas-dental-tips": christmasImg,
  "new-year-dental-tips": newYearImg,
  "pedodontist-day": pedodontistImg,
  "childrens-day-dental": childrensDayImg,
  "morning-vs-night-brushing": morningNightImg,
  "oral-cancer-awareness": oralCancerImg,
  "implants-oral-health": implantsHealthImg,
  "invisalign-care": invisalignCareImg,
  "dental-anxiety-kids": dentalAnxietyImg,
  "protect-from-cavities": cavitiesImg,
  "teeth-scaling": teethScalingImg,
  "braces-for-teeth": bracesImg,
  "orthodontic-benefits": orthodonticImg,
  "smile-makeover": smileMakeoverImg,
  "root-canal-pain": rootCanalPainImg,
};

const Blog = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc] font-poppins selection:bg-emerald-100 selection:text-emerald-900">
      {/* Cinematic Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-100/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-100/40 rounded-full blur-[120px]" />
      </div>

      {/* Breadcrumb - Glassy Style */}
      <div className="relative z-10 border-b border-white/40 bg-white/20 backdrop-blur-md">
        <div className="container mx-auto py-4 px-6">
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm font-medium"
          >
            <Link href="/" className="text-slate-500 hover:text-emerald-600 transition-all flex items-center gap-1.5 group">
              <Home className="w-4 h-4 group-hover:scale-110 transition-transform" />
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-slate-300" />
            <span className="text-emerald-600 font-semibold tracking-wide">Blog</span>
          </motion.nav>
        </div>
      </div>

      {/* Hero Title Section */}
      <div className="relative z-10 container mx-auto px-6 pt-16 pb-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-emerald-600 font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Insights & Updates</span>
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight">
            Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">News</span>
          </h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="h-2 bg-gradient-to-r from-emerald-500 to-teal-400 mt-6 rounded-full shadow-lg shadow-emerald-200" 
          />
        </motion.div>
      </div>

      {/* Blog Grid */}
      <div className="relative z-10 container mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 gap-10">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.7, 
                delay: (i % 2) * 0.15,
                type: "spring",
                stiffness: 50 
              }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent rounded-[2.5rem] -m-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <Link href={`/blog/${post.slug}`} className="relative block bg-white/60 backdrop-blur-xl border border-white/80 rounded-[2.5rem] p-4 shadow-sm group-hover:shadow-2xl group-hover:shadow-emerald-900/10 transition-all duration-500 overflow-hidden">
                
                {/* Image Container */}
                <div className="relative overflow-hidden rounded-[2rem] aspect-[16/10] mb-6 shadow-inner">
                  <motion.img
                    src={blogImageMap[post.image]?.src || ""}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    loading="lazy"
                  />
                  {/* Glass Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-8">
                    <span className="text-white font-medium flex items-center gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      Read Article <ArrowRight size={18} />
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="px-4 pb-4">
                  <div className="flex items-start gap-5">
                    {/* Date Badge - Advanced Glass */}
                    <div className="text-center shrink-0 bg-gradient-to-br from-white to-emerald-50/50 rounded-2xl px-4 py-3 border border-emerald-100 shadow-sm group-hover:border-emerald-200 group-hover:shadow-emerald-100 transition-all duration-300">
                      <span className="block text-3xl font-black text-slate-800 leading-none">{post.day}</span>
                      <span className="text-emerald-600 text-[10px] font-bold uppercase tracking-widest mt-1 block">{post.month}</span>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2 text-[11px] font-bold text-slate-400 uppercase tracking-tighter">
                         <span className="flex items-center gap-1"><User size={12} className="text-emerald-500"/> Dr. Dani</span>
                         <span className="w-1 h-1 bg-slate-300 rounded-full"/>
                         <span className="flex items-center gap-1"><Calendar size={12}/> 5 Min Read</span>
                      </div>
                      <h2 className="text-2xl font-bold text-slate-800 group-hover:text-emerald-700 transition-colors duration-300 leading-tight line-clamp-2">
                        {post.title}
                      </h2>
                    </div>
                  </div>
                  
                  {/* Decorative Footer inside Card */}
                  <div className="mt-8 pt-6 border-t border-slate-100 flex justify-between items-center">
                     <span className="text-emerald-600 font-bold text-sm inline-flex items-center gap-2 group/link">
                        Discover More 
                        <motion.div 
                          animate={{ x: [0, 5, 0] }} 
                          transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                          <ArrowRight size={16} />
                        </motion.div>
                     </span>
                     <div className="flex -space-x-2">
                        {[1,2,3].map(dot => (
                          <div key={dot} className="w-6 h-6 rounded-full border-2 border-white bg-slate-100" />
                        ))}
                     </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
      <FloatingButtons/>
    </div>
  );
};

export default Blog;