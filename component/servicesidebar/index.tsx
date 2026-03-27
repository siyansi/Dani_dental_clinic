"use client";

import Link from "next/link";
import { usePathname } from "next/navigation"; // Next.js version of useLocation
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { servicesList } from "@/component/serivcedata";

const ServicesSidebar = () => {
  const pathname = usePathname(); // Get current path (e.g., /service/dental-implant)

  return (
  <motion.aside
  initial={{ opacity: 0, x: 40 }}
  animate={{ opacity: 1, x: 0 }}
  className="w-full"
>
  {/* top-28 ensures it stays below your navbar while scrolling */}
  <div className="sticky top-28" style={{ fontFamily: 'Poppins' }}> 
    <div className="backdrop-blur-xl bg-white/60 border border-white/40 shadow-2xl rounded-3xl overflow-hidden">
      {/* Header */}
      <div className="bg-green-500 text-white px-6 py-4">
        <h3 className="text-lg font-bold">Our Services</h3>
      </div>

      {/* List - added a max-height and scroll just in case list is very long */}
      <ul className="p-2 space-y-1 max-h-[75vh] overflow-y-auto custom-scrollbar">
        {servicesList.map((service) => {
          const servicePath = `/service/${service.slug}`;
          const isActive = pathname === servicePath;

          return (
            <li key={service.slug}>
              <Link
                href={servicePath}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group
                ${
                  isActive
                    ? "bg-green-500 text-white shadow-lg"
                    : "text-gray-700 hover:bg-green-100/60 hover:text-green-600"
                }`}
              >
                <ChevronRight className={`w-4 h-4 group-hover:translate-x-1 transition ${isActive ? "rotate-90" : ""}`} />
                {service.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  </div>
</motion.aside>
  );
};

export default ServicesSidebar;