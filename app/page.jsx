"use client";
import Hero from "./components/Hero/Hero";
import Services from "./components/Hero/Services";
import Projects from "./components/Hero/Projects";
import Testimonials from "./components/Hero/Testimonials";
import ContactForm from "./components/contactForm/ContactForm";
import Image from "next/image";

import SimpleStudios from "../public/simple-studios.svg";
export default function Home() {
  return (
    <main className="w-full flex flex-col items-center justify-center">
      <section
        id="inicio"
        className="w-full lg:w-3/4 p-3 flex flex-col justify-center items-center bg-black"
      >
        <Hero />
        <Services />
        <Projects />
        <ContactForm />
        {/* <Testimonials /> */}
      </section>
    </main>
  );
}
