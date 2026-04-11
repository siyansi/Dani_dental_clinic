"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Home, Twitter, Mail, Calendar, User, Clock } from "lucide-react";
import { StaticImageData } from "next/image";
import BlogSidebar from "@/component/blogsidebar";
import { getBlogBySlug } from "@/component/blogdata";
import Footer from "@/component/footer";

// Blog image imports (Keep your existing imports)
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

const BlogDetail = () => {
  const params = useParams();
  const slug = params?.slug as string;
  const post = slug ? getBlogBySlug(slug) : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center font-poppins">
        <div className="text-center p-12 bg-white/40 backdrop-blur-xl border border-white/80 rounded-[3rem] shadow-2xl">
          <h1 className="text-4xl font-black text-slate-900 mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-emerald-600 font-bold hover:underline tracking-tight">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const postImage = blogImageMap[post.image];

  return (
    <div className="min-h-screen bg-[#f8fafc] font-poppins selection:bg-emerald-100 selection:text-emerald-900">
      {/* Dynamic Background Blurs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-5%] right-[-5%] w-[35%] h-[35%] bg-emerald-100/40 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] left-[-10%] w-[30%] h-[40%] bg-blue-100/30 rounded-full blur-[100px]" />
      </div>

      {/* Breadcrumb Layer */}
      <div className="relative z-10 border-b border-white/40 bg-white/20 backdrop-blur-md">
        <div className="container mx-auto py-4 px-6">
          <motion.nav 
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm"
          >
            <Link href="/" className="text-slate-500 hover:text-emerald-600 transition-colors flex items-center gap-1.5">
              <Home size={14} /> Home
            </Link>
            <ChevronRight size={14} className="text-slate-300" />
            <Link href="/blog" className="text-slate-500 hover:text-emerald-600 transition-colors">Blog</Link>
            <ChevronRight size={14} className="text-slate-300" />
            <span className="text-emerald-600 font-bold line-clamp-1">{post.title}</span>
          </motion.nav>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar Area - Modern Floating Glass */}
          <aside className="lg:w-1/3 order-2 lg:order-1">
            <div className="sticky top-24 bg-white/60 backdrop-blur-2xl border border-white/80 p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50">
              <BlogSidebar currentSlug={slug} />
            </div>
          </aside>

          {/* Main Content Area */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex-1 order-1 lg:order-2"
          >
            {/* Header Section */}
            <div className="flex items-start gap-6 mb-10">
              <div className="text-center shrink-0 bg-gradient-to-br from-emerald-500 to-teal-400 rounded-3xl px-5 py-4 shadow-lg shadow-emerald-200">
                <span className="block text-3xl font-black text-white leading-none">{post.day}</span>
                <span className="text-emerald-50 text-[10px] font-bold uppercase tracking-widest mt-1 block">{post.month}</span>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                  <span className="flex items-center gap-1.5"><User size={12} className="text-emerald-500"/> Admin</span>
                  <span className="w-1 h-1 bg-slate-300 rounded-full"/>
                  <span className="flex items-center gap-1.5"><Clock size={12}/> 4 Min Read</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-[1.15] tracking-tight">
                  {post.title}
                </h1>
              </div>
            </div>

            {/* Featured Image - Cinematic Scale Reveal */}
            {postImage && (
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="group relative mb-12 overflow-hidden rounded-[3rem] shadow-2xl shadow-emerald-900/10 border border-white"
              >
                <motion.img
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 1.5 }}
                  src={postImage.src}
                  alt={post.title}
                  className="w-full object-cover max-h-[500px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent pointer-events-none" />
              </motion.div>
            )}

            {/* Dynamic Blog Content */}
            <div className="space-y-12">
              {post.sections.map((section: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-5 flex items-center gap-3">
                    <span className="w-2 h-8 bg-emerald-500 rounded-full inline-block" />
                    {section.heading}
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-lg text-justify font-medium opacity-90">
                    {section.content}
                  </p>
                  
                  {section.list && (
                    <ul className="mt-6 space-y-4">
                      {section.list.map((item: string, i: number) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                          className="flex items-start gap-4 p-4 bg-white/40 rounded-2xl border border-white/60 hover:border-emerald-200 transition-all group"
                        >
                          <div className="mt-1 bg-emerald-100 p-1 rounded-full group-hover:bg-emerald-500 transition-colors">
                            <ChevronRight size={14} className="text-emerald-600 group-hover:text-white" />
                          </div>
                          <span className="text-slate-700 font-medium">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social Share & Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-20 p-10 bg-gradient-to-br from-slate-900 to-slate-800 rounded-[3rem] text-center relative overflow-hidden group shadow-2xl shadow-emerald-900/20"
            >
              {/* Decorative Glow inside CTA */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/20 rounded-full blur-[80px] group-hover:bg-emerald-500/30 transition-all duration-700" />
              
              <h3 className="text-3xl font-black text-white mb-4 relative z-10">
                Ready for a Brighter Smile?
              </h3>
              <p className="text-slate-300 mb-8 max-w-lg mx-auto relative z-10 font-medium">
                Expert dental care is just a call away. Join our community of healthy smiles today.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center relative z-10">
                <a 
                  href="tel:9597906838" 
                  className="bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
                >
                  Call Now <ChevronRight size={18} />
                </a>
                <a 
                  href="https://wa.me/9597906838" 
                  className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md px-8 py-4 rounded-full font-bold transition-all border border-white/10"
                >
                  WhatsApp Us
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <FloatingButtons/>
    </div>
  );
};

export default BlogDetail;