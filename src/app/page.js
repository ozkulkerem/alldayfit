import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/Aboutus";
import Pricing from "./components/Pricing";
import WorkingHours from "./components/WorkingHours";
import Contact from "./components/Contact";
import CTA from "./components/CTA";
export default function Home() {
  return (
    <div>
      <Hero />
      <CTA />
      <About />
      <WorkingHours />
      <Pricing />
      <Contact />
    </div>
  );
}
