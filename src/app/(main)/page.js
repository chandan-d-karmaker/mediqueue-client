import Image from "next/image";
import Hero from "../components/main/Hero";
import AvailableTutors from "../components/main/AvailableTutors";
import WhyChoose from "../components/main/WhyChoose";

export default function Home() {
  return (
    <div className="space-y-10">
      <Hero/>
      <AvailableTutors/>
      <WhyChoose/>
      
    </div>
  );
}
