import Hero from "@/components/Hero";
import VillasSection from "@/components/VillasSection";
import Gallery from "@/components/Gallery";
import { TrustStrip, Story, Experiences, Comparison } from "@/components/Sections";
import { Testimonials, Faq } from "@/components/TestimonialsFaq";
import { EnquiryForm, Newsletter } from "@/components/Forms";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Story />
      <VillasSection />
      <Gallery />
      <Experiences />
      <Comparison />
      <Testimonials />
      <Faq />
      <EnquiryForm />
      <Newsletter />
    </>
  );
}
