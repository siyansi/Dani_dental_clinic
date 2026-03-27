"use client";

import React from "react";
import { useParams } from "next/navigation"; // Use next/navigation for App Router
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Home, Phone, MessageCircle } from "lucide-react";
import FloatingButtons from "@/component/flotingbutton";
import ServicesSidebar from "@/component/servicesidebar";
import { servicesData } from "@/component/serivcedata";

// Image imports
import dentalImplantImg from "@/assets/dental-fillings.jpg";
import orthodonticImg from "@/assets/orthodontic.jpg";
import invisalignImg from "@/assets/invisalign.jpg";
import rootCanalImg from "@/assets/root-canal.jpg";
import pediatricImg from "@/assets/pediatric.jpg";
import crownBridgesImg from "@/assets/crown-bridges.jpg";
import dentureImg from "@/assets/denture.jpg";
import wisdomTeethImg from "@/assets/wisdom-teeth.jpg";
import dentalFillingsImg from "@/assets/dental-fillings.jpg";
import gumTreatmentImg from "@/assets/gum-treatment.jpg";
import nitrousOxideImg from "@/assets/nitrous-oxide.jpg";

// Define the map with specific keys
const imageMap = {
  "dental-implant": dentalImplantImg,
  "orthodontic": orthodonticImg,
  "invisalign": invisalignImg,
  "root-canal": rootCanalImg,
  "pediatric": pediatricImg,
  "crown-bridges": crownBridgesImg,
  "denture": dentureImg,
  "wisdom-teeth": wisdomTeethImg,
  "dental-fillings": dentalFillingsImg,
  "gum-treatment": gumTreatmentImg,
  "nitrous-oxide": nitrousOxideImg,
} as const; // 'as const' makes the keys literal types

type ImageMapKey = keyof typeof imageMap;

const ServiceDetail = () => {
  const params = useParams();
  const slug = params?.slug as string;
  
  // Find the service data based on the slug
  const service = slug ? (servicesData as any)[slug] : null;

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="container mx-auto py-20 text-center">
          <h1 className="font-display text-4xl font-bold text-foreground">Service Not Found</h1>
          <p className="text-muted-foreground mt-4">The service you're looking for doesn't exist.</p>
          <Link href="/" className="inline-block mt-6 text-primary hover:underline">← Back to Home</Link>
        </div>
      </div>
    );
  }

  // Safe check for the image key to remove the red line
  const imageKey = service.image as ImageMapKey;
  const serviceImage = imageMap[imageKey] || dentalFillingsImg; // Fallback to a default if key is missing

  return (
<div className="min-h-screen bg-cyan-100/50 " style={{ fontFamily: 'Poppins' }}>
  
  {/* Breadcrumb */}
  <div className="backdrop-blur-md bg-white/40 border-b border-white/30">
    <div className="container mx-auto py-4 px-4 mt-10">
      <motion.nav
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-2 text-sm"
      >
        <Link href="/" className="flex items-center gap-1 text-gray-600 hover:text-green-500">
          <Home className="w-4 h-4" />
          Home
        </Link>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <span className="text-green-500 font-semibold">{service.breadcrumb}</span>
      </motion.nav>
    </div>
  </div>

  {/* Main */}
  <div className="container mx-auto px-4 py-12">
    <div className="flex flex-col lg:flex-row gap-10 items-start relative">

      {/* LEFT CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex-1"
      >

        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            {service.title}
          </h1>
          <div className="w-20 h-1 bg-green-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Intro Card */}
        <div className="backdrop-blur-xl bg-white/50 border border-white/40 shadow-xl rounded-3xl p-6 mb-10">
          <p className="text-gray-700 leading-relaxed text-justify">
            {service.intro}
          </p>
        </div>

        {/* Image */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="mb-12 flex justify-center"
        >
          <img
            src={serviceImage.src}
            alt={service.title}
            className="rounded-3xl shadow-2xl border border-white/40 max-w-md w-full"
          />
        </motion.div>

        {/* Sections */}
        {service.sections?.map((section: any, index: number) => (
          <motion.div
            key={section.heading}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="mb-10 backdrop-blur-xl bg-white/50 border border-white/40 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {section.heading}
            </h2>

            <p className="text-gray-600 mb-4">
              {section.content}
            </p>

            {section.list && (
              <ul className="space-y-3">
                {section.list.map((item: string, i: number) => (
                  <li
                    key={i}
                    className="flex gap-3 items-start group"
                  >
                    <ChevronRight className="w-5 h-5 text-green-500 group-hover:translate-x-1 transition" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}

        {/* CTA */}
        <div className="mt-16 backdrop-blur-xl bg-green-500/10 border border-green-500/30 rounded-3xl p-10 text-center shadow-xl">
          <h3 className="text-2xl font-bold text-gray-800 mb-3">
            Book Your Appointment Today
          </h3>

          <p className="text-gray-600 mb-6">
            Call us at <span className="text-green-600 font-semibold">95979 06838</span>
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full shadow-lg transition">
              Call Now
            </a>

            <a className="bg-white/60 backdrop-blur-lg border border-green-400 text-green-600 px-6 py-3 rounded-full hover:bg-green-100 transition">
              WhatsApp
            </a>
          </div>
        </div>
      </motion.div>

      {/* RIGHT SIDEBAR */}
      <div className="hidden lg:block w-80 sticky top-28 self-start ">
        <ServicesSidebar />
      </div>

    </div>
  </div>
  <FloatingButtons/>
</div>
  );
};

export default ServiceDetail;