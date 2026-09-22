import { Hero } from "@/components/Hero";
import { Ticker } from "@/components/Ticker";
import { Stats } from "@/components/Stats";
import { Impact } from "@/components/Impact";
import { Portfolio } from "@/components/Portfolio";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <Stats />
      <Impact />
      <Portfolio />
      <About />
      <Testimonials />
      <Contact />
    </>
  );
}
