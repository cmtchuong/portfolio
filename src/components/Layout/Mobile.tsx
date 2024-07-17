import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import "tailwind.config";
import Image from "next/image";
import "tailwind.config";
import {
  HomeIcon,
  UserIcon,
  DesktopComputerIcon,
  ChatAlt2Icon,
  BriefcaseIcon,
} from "@heroicons/react/solid";
import "font-awesome/css/font-awesome.min.css";

import { MenuIcon } from "@heroicons/react/outline";

import { Container } from "@components";
import Home from "@components/NavContent/Home";
import AboutMe from "@components/NavContent/AboutMe";
import Services from "@components/NavContent/Services";
import Portfolios from "@components/NavContent/Portfolio";
import Contact from "@components/NavContent/Contact";

const Mobile: React.FC = () => {
  const [nav, setNav] = useState("Home");

  return (
    <Container>
      <Head>
        <title>Mtiezz Space</title>
        <link rel="icon" href="/CMTLogo.png" type="image/x-icon"></link>
      </Head>

      <div className="">
        {/* Navbar */}

        <div className="bg-gray-100 w-full p-4 navbar">
          <ul className="text-black flex justify-between bg-gray-100">
            <Image
              src={
                "/CMTLogoMobile.png"
              }
              alt="Mtiezz Space Logo"
              width={44}
              height={44}
            ></Image>
            <div
              onClick={() => {
                setNav("Home");
              }}
            >
              {nav === "Home" ? (
                <li className="active cursor-pointer">
                  <a href="#">
                    <HomeIcon className="w-6 h-6" />
                  </a>
                </li>
              ) : (
                <li className="cursor-pointer">
                  <a href="#">
                    <HomeIcon className="w-6 h-6" />
                  </a>{" "}
                </li>
              )}
            </div>

            <div
              onClick={() => {
                setNav("AboutMe");
              }}
            >
              {nav === "AboutMe" ? (
                <li className="active cursor-pointer">
                  <a href="#">
                    <UserIcon className="w-6 h-6" />
                  </a>
                </li>
              ) : (
                <li className="cursor-pointer">
                  <a href="#">
                    <UserIcon className="w-6 h-6" />
                  </a>{" "}
                </li>
              )}
            </div>

            <div
              onClick={() => {
                setNav("Service");
              }}
            >
              {nav === "Service" ? (
                <li className="active cursor-pointer">
                  <a href="#">
                    <DesktopComputerIcon className="w-6 h-6" />
                  </a>
                </li>
              ) : (
                <li className="cursor-pointer">
                  <a href="#">
                    <DesktopComputerIcon className="w-6 h-6" />
                  </a>{" "}
                </li>
              )}
            </div>

            <div
              onClick={() => {
                setNav("Portfolio");
              }}
            >
              {nav === "Portfolio" ? (
                <li className="active cursor-pointer">
                  <a href="#">
                    <BriefcaseIcon className="w-6 h-6" />
                  </a>
                </li>
              ) : (
                <li className="cursor-pointer">
                  <a href="#">
                    <BriefcaseIcon className="w-6 h-6" />
                  </a>{" "}
                </li>
              )}
            </div>

            <div
              onClick={() => {
                setNav("Contact");
              }}
            >
              {nav === "Contact" ? (
                <li className="active cursor-pointer">
                  <a href="#">
                    <ChatAlt2Icon className="w-6 h-6" />
                  </a>
                </li>
              ) : (
                <li className="cursor-pointer">
                  <a href="#">
                    <ChatAlt2Icon className="w-6 h-6" />
                  </a>{" "}
                </li>
              )}
            </div>
          </ul>
        </div>

        <div className="flex-grow">
          {nav === "Home" && <Home />}
          {nav === "AboutMe" && <AboutMe />}
          {nav === "Service" && <Services />}
          {nav === "Portfolio" && <Portfolios />}
          {nav === "Contact" && <Contact />}
        </div>
      </div>
    </Container>
  );
};

export default Mobile;
