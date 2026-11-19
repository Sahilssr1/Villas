import Hero from "@/components/Hero";
import TheHouse from "@/components/TheHouse";
import TheSpace from "@/components/TheSpace";
import GuestBook from "@/components/GuestBook";
import Amenities from "@/components/Amenities";
import TheArea from "@/components/TheArea";
import Rates from "@/components/Rates";
import FaqSection from "@/components/FaqSection";
import JournalSection from "@/components/JournalSection";
import EnquirySection from "@/components/EnquirySection";

export default function Home() {
  return (
    <>
      <Hero />
      <TheHouse />
      <TheSpace />
      <GuestBook />
      <Amenities />
      <TheArea />
      <Rates />
      <FaqSection />
      <JournalSection />
      <EnquirySection />
    </>
  );
}
