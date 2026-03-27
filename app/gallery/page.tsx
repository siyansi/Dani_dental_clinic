"use client";

import React from "react";
import { motion } from "framer-motion";
import { Camera, Zap } from "lucide-react";
import FloatingButtons from "@/component/flotingbutton";

// Placeholder Images - Replace with your real assets later
const galleryItems = [
  { id: 1, type: "col-2", img: "/gallery/wait_area.jpg", alt: "Modern Waiting Area" }, // Wide
  { id: 2, type: "row-2", img: "/gallery/before_after_braces.jpg", alt: "Before & After Braces" }, // Tall
  { id: 3, type: "square", img: "/gallery/equipment.jpg", alt: "Advanced Dental Technology" },
  { id: 4, type: "square", img: "/gallery/team_photo.jpg", alt: "Our Expert Team" },
  { id: 5, type: "row-2", img: "/gallery/pediatric_corner.jpg", alt: "Friendly Pediatric Corner" }, // Tall
  { id: 6, type: "col-2", img: "/gallery/laser_treatment.jpg", alt: "Laser Dentistry Session" }, // Wide
  { id: 7, type: "square", img: "/gallery/implant_before_after.jpg", alt: "Dental Implant Success" },
  { id: 8, type: "square", img: "/gallery/clinic_exterior.jpg", alt: "Gugu Dental Clinic Exterior" },
];

const GalleryPage = () => {
  return (
    <div className="min-h-screen bg-[#fcfdfd] bg-gradient-to-b from-blue-50/50 to-white py-20 px-4 mt-8" style={{ fontFamily: 'Poppins' }} >
      {/* 1. Header & Text Section */}
      <div className="container mx-auto max-w-5xl text-center mb-16">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="px-4 py-1.5 rounded-full bg-blue-100 text-green-500 text-sm font-bold uppercase tracking-widest flex items-center gap-2 justify-center w-fit mx-auto"
        >
          <Camera size={16} /> Showcase
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-4xl md:text-5xl font-bold text-slate-900"
        >
          Explore Our <span className="text-green-500">Gugu Dental</span> Gallery
        </motion.h1>

        {/* 2. Your Provided Paragraph - Styled for a premium feel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-10 backdrop-blur-lg bg-white/60 p-8 rounded-3xl border border-white shadow-[0_8px_32px_rgba(0,0,0,0.03)]"
        >
          <p className="text-slate-600 leading-relaxed text-justify text-base md:text-lg">
            Many dental centers in Coimbatore are excellent at what they offer. Gugu Dental Clinics is one such spot. It is the best dental clinic and We have the best dentist in Saibaba Colony, and Thudiyalur Coimbatore on account of the best foundation and innovation they have. It is a multi-claim-to-fame dental emergency clinic that deals with the patient’s needs and ensures that they are truly agreeable and that they return with a grin. Gugu Dental Clinics offers numerous administrations including Laser Dentistry, Dental Implants, tooth filling, pediatric dental care, teeth brightening, and substantially more. With the facility situated at Saibaba Colony, it is much simpler to be situated in the region. Gugu Dental Clinics is the best dental facility and dental emergency clinic in Saibaba Colony, Coimbatore.
          </p>
        </motion.div>
      </div>

      {/* 3. The Modern Dynamic Grid (Bento/Masonry Style) */}
      <div className="container mx-auto px-2">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              // Handle mixed spans
              className={`relative rounded-3xl group overflow-hidden ${
                item.type === "col-2" ? "col-span-2" : ""
              } ${item.type === "row-2" ? "row-span-2" : ""}`}
            >
              {/* Animated Gradient Border - Revealed on Hover */}
              <div className="absolute inset-0 p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 animate-gradient-slow rounded-3xl" />
              
              {/* Inner Card & Image */}
              <div className="relative w-full h-full bg-white rounded-[1.3rem] overflow-hidden group">
                <img
                  src={item.img}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-5">
                  <span className="text-white text-xs font-semibold uppercase tracking-widest">{item.alt}</span>
                  <div className="h-0.5 w-10 bg-blue-400 mt-2 transform -translate-x-full group-hover:translate-x-0 transition-all duration-300"/>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <FloatingButtons/>
    </div>
  );
};

export default GalleryPage;