"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MapPin, Phone, Mail, Clock, Send, 
  ChevronRight, Sparkles, MessageSquare 
} from "lucide-react";

const locations = [
  {
    name: "Saibaba Colony (Main)",
    address: "6th street, Velappar Street, near kannan departmental store, Saibaba Colony, Coimbatore, 641038",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.148560822601!2d76.94584287584164!3d11.027471954508493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8591ce8e604f7%3A0xc484e591789c6762!2sGugu%20Dental%20Clinics!5e0!3m2!1sen!2sin!4v1711550000000!5m2!1sen!2sin"
  },
  {
    name: "Thudiyalur Branch",
    address: "64E, Mettupalayam Rd, above Bank of Baroda, VKL Nagar, Thudiyalur, Coimbatore, 641034",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.684347783935!2d76.93282297584196!3d11.062234553856285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f7936a596061%3A0x7b6539e6a2b8e5c8!2sGUGU%20DENTAL%20CLINICS%20-%20THUDIYALUR!5e0!3m2!1sen!2sin!4v1711551000000!5m2!1sen!2sin"
  },
  {
    name: "Mettupalayam Branch",
    address: "208 E2, Annur Rd, above Nibin MRI, Mettupalayam, Tamil Nadu 641301",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.4321456789!2d76.94!3d11.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDE4JzAwLjAiTiA3NsKwNTYnMjQuMCJF!5e0!3m2!1sen!2sin!4v1711552000000!5m2!1sen!2sin"
  }
];

const ContactPage = () => {
  const [activeLocation, setActiveLocation] = useState(0);

  return (
    <div className="min-h-screen bg-[#f8fafc] overflow-hidden relative mt-6" style={{ fontFamily: 'Poppins' }}>
      {/* Animated Mesh Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-green-200/40 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-200/40 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 py-20">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="text-green-500 w-5 h-5" />
            <span className="text-green-600 font-bold text-sm uppercase tracking-widest">Get In Touch</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-6xl font-black text-slate-900">
            Let's Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">Smile Journey</span>
          </motion.h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          
          {/* LEFT SIDE: Contact Info & Location Switcher */}
          <div className="flex-1 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div whileHover={{ scale: 1.02 }} className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center text-green-600"><Phone /></div>
                <div><p className="text-xs text-slate-400 font-bold uppercase">Call Us</p><p className="font-bold text-slate-800">095979 06838</p></div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600"><Mail /></div>
                <div><p className="text-xs text-slate-400 font-bold uppercase">Email</p><p className="font-bold text-slate-800">info@gugu.net</p></div>
              </motion.div>
            </div>

            {/* Location Selector Cards */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-800 px-2 flex items-center gap-2">
                <MapPin className="text-green-500" size={20} /> Visit Our Clinics
              </h3>
              {locations.map((loc, i) => (
                <motion.button
                  key={i}
                  onClick={() => setActiveLocation(i)}
                  className={`w-full text-left p-6 rounded-[2rem] transition-all duration-300 border-2 ${
                    activeLocation === i ? "bg-white border-green-500 shadow-xl" : "bg-white/50 border-transparent hover:border-slate-200"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <p className={`font-bold ${activeLocation === i ? "text-green-600" : "text-slate-800"}`}>{loc.name}</p>
                    <ChevronRight size={18} className={activeLocation === i ? "text-green-500 translate-x-1" : "text-slate-300"} />
                  </div>
                  <p className="text-sm text-slate-500 mt-2 line-clamp-1">{loc.address}</p>
                </motion.button>
              ))}
            </div>

            {/* Live Map Box */}
            <div className="h-80 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white relative group">
              <iframe
                title="map"
                src={locations[activeLocation].mapUrl}
                className="w-full h-full grayscale-[0.2] contrast-[1.1] group-hover:grayscale-0 transition-all duration-700"
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* RIGHT SIDE: Modern Glass Form */}
          <div className="flex-1 lg:max-w-md xl:max-w-lg">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white/80 backdrop-blur-2xl rounded-[3rem] p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white h-full"
            >
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                  <MessageSquare className="text-green-500" /> Send a Message
                </h2>
                <p className="text-slate-500 text-sm mt-2">Fill out the form and we'll get back to you within 24 hours.</p>
              </div>

              <form className="space-y-6">
                {[
                  { label: "Full Name", placeholder: "Enter your name", type: "text" },
                  { label: "Email Address", placeholder: "example@mail.com", type: "email" },
                  { label: "Phone Number", placeholder: "00000 00000", type: "tel" },
                ].map((input) => (
                  <div key={input.label} className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-4">{input.label}</label>
                    <input 
                      type={input.type} 
                      placeholder={input.placeholder}
                      className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 text-slate-800 placeholder:text-slate-300 focus:ring-2 focus:ring-green-400 transition-all outline-none"
                    />
                  </div>
                ))}

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-4">Your Message</label>
                  <textarea 
                    rows={4} 
                    placeholder="How can we help you?"
                    className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 text-slate-800 placeholder:text-slate-300 focus:ring-2 focus:ring-green-400 transition-all outline-none resize-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -10px rgba(34,197,94,0.4)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-green-500 text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-2 transition-all"
                >
                  <Send size={18} /> Submit Appointment
                </motion.button>
              </form>

              {/* Working Hours Summary from Image Details */}
              <div className="mt-10 p-6 bg-slate-50 rounded-3xl border border-slate-100">
                <div className="flex items-center gap-2 text-slate-700 font-bold mb-4">
                  <Clock size={16} /> Working Hours
                </div>
                <div className="grid grid-cols-2 gap-y-2 text-sm text-slate-500">
                  <span>Mon - Thu</span><span className="text-green-600 font-bold text-right">08:00 - 20:00</span>
                  <span>Friday</span><span className="text-green-600 font-bold text-right">07:00 - 22:00</span>
                  <span>Saturday</span><span className="text-green-600 font-bold text-right">08:00 - 18:00</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;