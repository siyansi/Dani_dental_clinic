import AboutSection from "@/pages/herosection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background" style={{ fontFamily: 'Poppins' }}>
     <main>
      <AboutSection/>
     </main>
    </div>
  );
}
