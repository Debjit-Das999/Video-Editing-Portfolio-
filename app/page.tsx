import { Hero } from "@/components/Hero";
import { Showreel } from "@/components/Showreel";
import { Portfolio } from "@/components/Portfolio";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Showreel />
      <Portfolio />
      <About />
      <Testimonials />
      <Contact />
    </>
  );
}
