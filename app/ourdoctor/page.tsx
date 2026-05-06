"use client";

import React from "react";
import { motion } from "framer-motion";
// import { GraduationCap, Award, Stethoscope, Star } from "lucide-react";
import FloatingButtons from "@/component/flotingbutton";

import doc1 from '../../assets/IMG-20260501-WA0031.jpg.jpeg';
import doc2 from '../../assets/IMG-20260328-WA0008.jpg.jpeg';
import doc3 from '../../assets/IMG-20260505-WA0014.jpg.jpeg';
import doc4 from '../../assets/IMG-20260328-WA0006.jpg.jpeg';
import doc5 from '../../assets/IMG-20260302-WA0003.jpg.jpeg';
import { Star, Stethoscope, GraduationCap, Award } from 'lucide-react'; // Ensure icons are imported

const doctors = [
  {
    name: "Dr. A. Steffina Lydia Jascinth",
    role: "Oral Physician & Radiologist",
    specialty: "Founder of Dani Dental Clinic",
    degree: "BDS, MDS",
    image: doc1,
  },
  {
    name: "Dr. S. Rajapriya",
    role: "Dental Surgeon",
    specialty: "General Dentistry",
    degree: "BDS",
    image: doc3,
  },
  {
    name: "Dr. G. Sathees Chandra Mouli",
    role: "Oral Physician",
    specialty: "Oral Diagnosis",
    degree: "BDS, MDS",
    image: doc2,
  },
  {
    name: "Dr. T. Vignesh Prabhu",
    role: "Consultant Oral Maxillofacial Surgeon",
    specialty: "Surgical Specialist",
    degree: "MDS (OMFS)",
    image: doc4,
  },
  {
    name: "Dr. PL. Nagappan",
    role: "Consultant Orthodontist",
    specialty: "Braces Specialist",
    degree: "MDS (Ortho)",
    image: doc5,
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
     <div className="container mx-auto px-4 py-16">
      {/* Updated to grid-cols-3 for better layout with 5 doctors */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
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
            <div className="relative overflow-hidden backdrop-blur-xl bg-white/70 border border-white/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] rounded-[2.5rem] p-8 h-full transition-all duration-500 group-hover:shadow-green-200/50 group-hover:bg-white/90">
              
              {/* Image Container */}
              <div className="relative w-46 h-46 mx-auto mb-8">
                <div className="absolute inset-0 bg-green-400    rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                <img
                  src={doc.image.src} // Added .src for imported assets
                  alt={doc.name}
                  className="w-full h-full object-cover object-top rounded-full border-4 border-white shadow-lg transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute -bottom-2 right-4 bg-white p-2 rounded-full shadow-md text-green-500">
                  <Star size={18} fill="currentColor" />
                </div>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-slate-800 mb-1">
                  {doc.name}
                </h3>
                <p className="text-green-600 font-bold text-sm mb-6 flex items-center justify-center gap-2">
                  <Stethoscope size={16} /> {doc.role}
                </p>

                <div className="space-y-4 pt-6 border-t border-slate-100">
                  <div className="flex items-center gap-3 text-slate-600 text-sm">
                    <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center">
                      <GraduationCap size={18} className="text-slate-400" />
                    </div>
                    <span className="font-medium text-left">{doc.degree}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600 text-sm">
                    <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center">
                      <Award size={18} className="text-slate-400" />
                    </div>
                    <span className="font-medium text-left">{doc.specialty}</span>
                  </div>
                </div>

                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="mt-8 w-full py-4 rounded-2xl bg-slate-900 text-white text-sm font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 shadow-xl"
                >
                  Book Appointment
                </motion.button>
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

export default DoctorsPage;