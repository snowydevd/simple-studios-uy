import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import blurr from "../../../public/blurr.svg";
import SimpleStudios from "../../../public/simple-studios.svg";
import Link from "next/link";
export default function Hero() {
  return (
    <div className="flex flex-col justify-center items-center text-white mt-5 w-full h-[90vh]">
      <div className="mt-16 w-full rounded-l mb-32 flex flex-col justify-center items-center relative">
        <Image
          alt="simpleStudios"
          src={SimpleStudios}
          width={1999}
          className="z-10 lg:block hidden"
        />
        <h1 className="text-white font-sans font-bold text-6xl text-center lg:text-9xl z-10 lg:hidden block">
          Simple Studios
        </h1>
        <p className="font-medium text-l lg:text-xl z-10 text-center">
          La innovación que tu empresa necesita
        </p>
        <div className="z-10 mt-3 flex flex-row gap-5 w-full justify-center items-center">
          <Link
            href="#services"
            className="px-2 py-1 w-fit text-xl lg:text-3xl font-bold bg-white rounded-lg text-black hover:bg-black hover:text-white duration-200"
          >
            Empezar
          </Link>
          <Link
            href="#contact"
            className="px-2 py-1 text-xl lg:text-3xl font-bold  rounded-lg text-white  hover:bg-white hover:text-black duration-200"
          >
            Contacto
          </Link>
        </div>
        <Image src={blurr} width={1000} className="absolute lg:hidden block" />
      </div>
    </div>
  );
}
