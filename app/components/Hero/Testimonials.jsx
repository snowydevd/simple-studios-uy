import React from "react";
import Change from "../../../public/TheChange.svg";
import AleAvatar from "../../../public/AleAvatar.webp";
import SantiAvatar from "../../../public/SantiAvatar.webp";
import Image from "next/image";
import Link from "next/link";

export default function Testimonials() {
  const projects = [
    {
      date: "24-10-23",
      id: "Ale",
      label: "Alejandro Martinez",
      image: AleAvatar,
    },
    {
      date: "12-10-23",
      id: "Santi",
      label: "Santiago Rivas",
      image: SantiAvatar,
    },
  ];
  return (
    <section
      id="projects"
      className="w-full lg:10/12 flex flex-col justify-center items-center mt-16 mb-16"
    >
      <h1 className="text-7xl lg:text-9xl font-bold text-white">
        Casos de Éxito
      </h1>
      <div className="flex flex-wrap w-full gap-32 justify-center items-center mt-16">
        {projects.map((project) => {
          return (
            <div
              className="text-black mt-5 h-[40vh] w-72 flex flex-col justify-between items-center p-9 rounded-xl bg-white relative"
              key={project.id}
            >
              <div className="w-full text-center mt-16">
                <h3 className="font-light text-l lg:text-xl">
                  {project.label}
                </h3>
              </div>

              <Image
                alt={project.label}
                src={project.image}
                width={100}
                className="mb-12 absolute -top-8 rounded-full"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
