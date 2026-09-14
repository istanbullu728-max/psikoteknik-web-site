import { Booking } from "@/components/booking";
import { Contact } from "@/components/contact";
import { Criteria } from "@/components/criteria";
import { Faq } from "@/components/faq";
import { Hero } from "@/components/hero";
import { Process } from "@/components/process";
import { Questions } from "@/components/questions";
import { Services } from "@/components/services";

export default function Home() {
  return (
    <>
      <a
        href="#hizmetler"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:shadow-lg"
      >
        İçeriğe geç
      </a>
      <main>
        <Hero />
        <Services />
        <Criteria />
        <Process />
        <Booking />
        <Faq />
        <Contact />
        <Questions />
      </main>
    </>
  );
}
