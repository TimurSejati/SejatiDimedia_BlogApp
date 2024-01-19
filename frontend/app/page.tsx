"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/home/Hero";
import Image from "next/image";
import Article from "@/components/home/Article";
import Cta from "@/components/home/Cta";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Article />
      <Cta />
      <Footer />
      <Toaster />
    </div>
  );
}
