"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, Stethoscope, Star } from "lucide-react";
import FloatingButtons from "@/component/flotingbutton";

const doctors = [
  {
    name: "Dr. Gayathri Raju",
    role: "Chief Dentist",
    degree: "BDS",
    specialty: "General Dentistry",
    image: "/doctors/gayathri.jpg", // Replace with your actual paths
  },
  {
    name: "Dr. Venkatesh",
    role: "Periodontist",
    degree: "BDS, MDS",
    specialty: "Gum Specialist",
    image: "/doctors/venkatesh.jpg",
  },
  {
    name: "Dr. Unnamalai",
    role: "Clinical Head",
    degree: "BDS",
    specialty: "Dental Surgery",
    image: "/doctors/unnamalai.jpg",
  },
  {
    name: "Dr. T. Vignesh Prabhu",
    role: "FCMFTS",
    degree: "BDS, MDS",
    specialty: "Maxillofacial Surgeon",
    image: "/doctors/vignesh.jpg",
  },
];

const DoctorsPage = () => {
  return (
    <div className="min-h-screen bg-[#f0f9ff] bg-gradient-to-b from-green-50 to-white py-20 px-4 mt-6" style={{ fontFamily: 'Poppins' }}>
      {/* Header Section */}
      <div className="container mx-auto text-center mb-20">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="px-4 py-1.5 rounded-full bg-green-100 text-green-600 text-sm font-bold uppercase tracking-widest"
        >
          Meet Our Experts
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-4xl md:text-6xl font-bold text-slate-800"
        >
          Dedicated to Your <span className="text-green-500">Perfect Smile</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-slate-600 max-w-2xl mx-auto text-lg"
        >
          Our team of highly qualified dental specialists combines years of experience 
          with the latest technology to provide world-class oral care.
        </motion.p>
      </div>

      {/* Grid Section */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {doctors.map((doc, index) => (
          <motion.div
            key={doc.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="group relative"
          >
            {/* Glass Card */}
            <div className="relative overflow-hidden backdrop-blur-xl bg-white/70 border border-white/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] rounded-[2.5rem] p-6 h-full transition-all duration-500 group-hover:shadow-green-200/50 group-hover:bg-white/90">
              
              {/* Image Container */}
              <div className="relative w-40 h-40 mx-auto mb-8">
                <div className="absolute inset-0 bg-green-400 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute -bottom-2 right-2 bg-white p-2 rounded-full shadow-md text-green-500">
                  <Star size={16} fill="currentColor" />
                </div>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-slate-800 mb-1">
                  {doc.name}
                </h3>
                <p className="text-green-600 font-semibold text-sm mb-4 flex items-center justify-center gap-1">
                  <Stethoscope size={14} /> {doc.role}
                </p>

                <div className="space-y-3 pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-3 text-slate-600 text-sm">
                    <GraduationCap size={18} className="text-slate-400" />
                    <span>{doc.degree}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600 text-sm">
                    <Award size={18} className="text-slate-400" />
                    <span>{doc.specialty}</span>
                  </div>
                </div>

                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="mt-8 w-full py-3 rounded-2xl bg-slate-900 text-white text-sm font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
                >
                  View Profile
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <FloatingButtons/>
    </div>
  );
};

export default DoctorsPage;