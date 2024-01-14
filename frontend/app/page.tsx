import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/home/Hero";
import Image from "next/image";
import Articles from "@/components/home/Articles";
import Cta from "@/components/home/Cta";

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
