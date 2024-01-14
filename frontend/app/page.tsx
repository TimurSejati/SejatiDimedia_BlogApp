import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Home/Hero";
import Image from "next/image";
import Articles from "@/components/Home/Articles";
import Cta from "@/components/Home/Cta";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Articles />
      <Cta />
      <Footer />
    </div>
  );
}
