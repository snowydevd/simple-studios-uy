import React from "react";
import Change from "../../../public/TheChange.svg";
import Asl from "../../../public/asl.svg";
import Oxilife from "../../../public/oxilife.svg";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full flex flex-col justify-center items-center mb-16"
    >
      <h1 className="text-7xl lg:text-8xl font-bold text-white">Proyectos</h1>
      <div className="flex flex-wrap w-full gap-32 justify-center items-center mt-16"></div>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide className="flex flex-col ">
          <div className="w-full">
            <h1 className="text-3xl">ASL Marketing</h1>
            <p className=" font-light text-sm">
              LLeva tu negocio al siguiente nivel con ASL Marketing, mediante
              diversas estrategias de marketing
            </p>
            <div className="w-full flex flex-wrap ">
              <p className="font-medium text-sm p-1 rounded-lg ml-0 m-1 border-2">
                UX/UI
              </p>
              <p className="font-medium text-sm p-1 rounded-lg m-1 border-2">
                Marketing
              </p>
              <p className="font-medium text-sm p-1 rounded-lg m-1 border-2">
                Branding
              </p>
              <p className="font-medium text-sm p-1 rounded-lg m-1 border-2">
                Business
              </p>
              <p className="font-medium text-sm p-1 rounded-lg m-1 border-2 ml-0">
                Webpage
              </p>
            </div>
          </div>
          <Image alt="ASL" src={Asl} className="w-full rounded-lg mt-5" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full">
            <h1 className="text-3xl">The Change</h1>
            <p className=" font-light text-sm">Haz el cambio</p>
            <div className="w-full flex flex-wrap ">
              <p className="font-medium text-sm p-1 rounded-lg ml-0 m-1 border-2">
                UX/UI
              </p>
              <p className="font-medium text-sm p-1 rounded-lg ml-0 m-1 border-2">
                Webpage
              </p>
              <p className="font-medium text-sm p-1 rounded-lg ml-0 m-1 border-2">
                3D
              </p>
              <p className="font-medium text-sm p-1 rounded-lg ml-0 m-1 border-2">
                Design
              </p>
            </div>
          </div>
          <Image alt="ASL" src={Change} className="w-full rounded-lg mt-16" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full">
            <h1 className="text-3xl">Oxilife</h1>
            <p className=" font-light text-sm">
              Limpia grandes cuerpos de agua con esta sofisticada calculadora.
            </p>
            <div className="w-full flex flex-wrap ">
              <p className="font-medium text-sm p-1 rounded-lg ml-0 m-1 border-2">
                UX/UI
              </p>
              <p className="font-medium text-sm p-1 rounded-lg ml-0 m-1 border-2">
                Webpage
              </p>
              <p className="font-medium text-sm p-1 rounded-lg ml-0 m-1 border-2">
                Business
              </p>
              <p className="font-medium text-sm p-1 rounded-lg ml-0 m-1 border-2">
                Software
              </p>
            </div>
          </div>
          <Image alt="ASL" src={Oxilife} className="w-full rounded-lg mt-5" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
