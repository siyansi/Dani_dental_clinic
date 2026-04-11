"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { StaticImageData } from "next/image";
import { ChevronRight, Calendar, Bookmark, FolderOpen, History } from "lucide-react";
import { getRecentPosts } from "@/component/blogdata";

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

const sidebarImageMap: Record<string, StaticImageData> = {
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
};

interface BlogSidebarProps {
  currentSlug?: string;
}

const BlogSidebar = ({ currentSlug }: BlogSidebarProps) => {
  const recentPosts = getRecentPosts(currentSlug, 8);

  const categories = [
    { name: "Services", count: 11 },
    { name: "Uncategorized", count: 39 },
  ];

  const archives = [
    "March 2026", "February 2026", "December 2025", 
    "November 2025", "October 2025", "September 2025"
  ];

  return (
    <motion.aside
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full font-poppins space-y-8"
    >
      {/* Categories Section */}
      <div className="relative group">
        <div className="absolute inset-0 bg-emerald-500/5 blur-2xl rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative bg-white/40 backdrop-blur-xl border border-white/80 rounded-[2rem] shadow-sm overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-emerald-900/5">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-500 px-6 py-4 flex items-center gap-3">
            <FolderOpen size={18} className="text-white" />
            <h3 className="text-sm font-black text-white uppercase tracking-widest">Categories</h3>
          </div>
          <ul className="p-2">
            {categories.map((cat) => (
              <li key={cat.name}>
                <button className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-slate-600 hover:bg-emerald-50 hover:text-emerald-700 transition-all group/item">
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-300 group-hover/item:scale-150 group-hover/item:bg-emerald-500 transition-all" />
                    <span className="text-sm font-semibold tracking-tight">{cat.name}</span>
                  </div>
                  <span className="bg-white/60 px-2 py-0.5 rounded-md text-[10px] font-bold border border-emerald-100">{cat.count}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Recent Posts Section */}
      <div className="relative group">
        <div className="absolute inset-0 bg-blue-500/5 blur-2xl rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative bg-white/40 backdrop-blur-xl border border-white/80 rounded-[2rem] shadow-sm overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-slate-900/5">
          <div className="bg-slate-900 px-6 py-4 flex items-center gap-3">
            <Bookmark size={18} className="text-emerald-400" />
            <h3 className="text-sm font-black text-white uppercase tracking-widest">Recent Posts</h3>
          </div>
          <div className="divide-y divide-slate-100/50 p-2">
            {recentPosts.map((post, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                key={post.slug}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="flex items-start gap-4 p-3 rounded-2xl hover:bg-white/80 transition-all group/post"
                >
                  <div className="relative shrink-0 overflow-hidden rounded-xl w-16 h-16 shadow-inner border border-white">
                    <img
                      src={sidebarImageMap[post.image]?.src || ""}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover/post:scale-110"
                      loading="lazy"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-xs font-bold text-slate-800 group-hover/post:text-emerald-600 transition-colors line-clamp-2 leading-snug">
                      {post.title}
                    </h4>
                    <div className="flex items-center gap-2 mt-2 text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                       <Calendar size={10} className="text-emerald-400"/> {post.date}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Archives Section */}
      <div className="relative group">
        <div className="relative bg-white/40 backdrop-blur-xl border border-white/80 rounded-[2rem] shadow-sm overflow-hidden">
          <div className="bg-emerald-50 px-6 py-4 flex items-center gap-3 border-b border-emerald-100/50">
            <History size={18} className="text-emerald-600" />
            <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest">Archives</h3>
          </div>
          <ul className="p-3 grid grid-cols-1 gap-1">
            {archives.map((archive) => (
              <li key={archive}>
                <button className="w-full text-left px-4 py-2.5 rounded-xl text-xs font-bold text-slate-500 hover:bg-white hover:text-emerald-600 hover:shadow-sm transition-all flex items-center justify-between group/arch">
                  {archive}
                  <ChevronRight size={14} className="opacity-0 -translate-x-2 group-hover/arch:opacity-100 group-hover/arch:translate-x-0 transition-all" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.aside>
  );
};

export default BlogSidebar;