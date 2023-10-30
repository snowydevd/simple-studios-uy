"use client";

import React from "react";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { motion } from "framer-motion";
import Image from "next/image";
import navbarlogo from "../../../public/navbarLogo.webp";
export default function Navbar() {
  const links = [
    {
      id: "services",
      label: "Servicios",
      link: "#services",
    },
    {
      id: "projects",
      label: "Proyectos",
      link: "#projects",
    },

    // {
    //   id: "testimonio",
    //   label: "Testimonios",
    //   link: "#testimonios",
    // },

    {
      id: "contact",
      label: "Contacto",
      link: "#contact",
    },
  ];
  return (
    <div className="w-full flex flex-col justify-center items-center text-white overflow-visible z-30 sticky top-0 rounded-lg backdrop-blur-lg  bg-black/50">
      <nav className="w-full xl:w-3/4 lg:w-3/4 px-3 flex justify-between items-center mt-0">
        {/* <h1 className="text-2xl font-sans font-light">Simple Studios</h1> */}
        <Image alt="Navbar Logo" src={navbarlogo} width={80} />
        <div className="lg:block hidden">
          <ul className="flex gap-6 text-md">
            {links.map((link) => {
              return (
                <li key={link.id}>
                  <Link
                    href={link.link}
                    className="font-light hover:text-gray-300 duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="lg:hidden block">
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn m-1 bg-transparent hover:bg-transparent hover:text-gray-300 border-none"
            >
              <AiOutlineMenu />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-1 menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links.map((link) => {
                return (
                  <li key={link.id}>
                    <Link
                      href={link.link}
                      className=" font-light hover:text-blue-300 duration-150 hover:bg-transparent"
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
