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

const Desktop: React.FC = () => {
    const [nav, setNav] = useState("Home");
  
   
  
    return (
      <Container>
        <Head>
          <title>Mtiezz Space</title>
          <link
            rel="icon"
            href="https://cdn.discordapp.com/attachments/890493745982767111/995995590318108732/unknown-removebg-preview.png?ex=65f8132d&is=65e59e2d&hm=25f8dbcd7f4c2f2868f372d8cfe10f67ee66056b5fa9821eb07eb7f3ddf992e3&"
            type="image/x-icon"
          ></link>
        </Head>

        <div className="flex">
          {/* Navbar */}
          <div className="sideNav bg-gray-100 w-[280px] h-full fixed top-0 left-0 pl-[40px] pb-[30px] justify-center items-center z-10 xl:block hidden border-r-2">
            {/* <div className="right-[-35px] bg-gray-100 top-0 absolute p-2 border border-gray-300 cursor-pointer">
                <UserIcon className="w-4 h-4" />
            </div> */}

            <Image
              src={
                "https://cdn.discordapp.com/attachments/890493745982767111/994649389849137212/logocmt-removebg-preview.png?ex=65fc67ee&is=65e9f2ee&hm=2ae963590461c998e6f0cd9693133fef17a40ec73a3b4f4823e0053ef7492329&"
              }
              alt="Mtiezz Space Logo"
              width={210}
              height={210}
            ></Image>

            <ul className="mt-[30px] space-y-[20px] block nav ">
              <div
                onClick={() => {
                  setNav("Home");
                }}
              >
                {nav === "Home" ? (
                  <li className="active cursor-pointer">
                    <a href="#">
                      <HomeIcon className="w-6 h-6 mr-3" />
                      Home
                    </a>
                  </li>
                ) : (
                  <li className="cursor-pointer">
                    <a href="#">
                      <HomeIcon className="w-6 h-6 mr-3" />
                      Home
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
                      <UserIcon className="w-6 h-6 mr-3" />
                      About Me
                    </a>
                  </li>
                ) : (
                  <li className="cursor-pointer">
                    <a href="#">
                      <UserIcon className="w-6 h-6 mr-3" />
                      About Me
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
                      <DesktopComputerIcon className="w-6 h-6 mr-3" />
                      Services
                    </a>
                  </li>
                ) : (
                  <li className="cursor-pointer">
                    <a href="#">
                      <DesktopComputerIcon className="w-6 h-6 mr-3" />
                      Services
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
                      <BriefcaseIcon className="w-6 h-6 mr-3" />
                      Portfolio
                    </a>
                  </li>
                ) : (
                  <li className="cursor-pointer">
                    <a href="#">
                      <BriefcaseIcon className="w-6 h-6 mr-3" />
                      Portfolio
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
                      <ChatAlt2Icon className="w-6 h-6 mr-3" />
                      Contact
                    </a>
                  </li>
                ) : (
                  <li className="cursor-pointer">
                    <a href="#">
                      <ChatAlt2Icon className="w-6 h-6 mr-3" />
                      Contact
                    </a>{" "}
                  </li>
                )}
              </div>
            </ul>

            <div className=" py-4">
              <ul className="flex absolute contact__icon left-[22px]">
                <li>
                  <a
                    href="https://www.facebook.com/cmtchuong/"
                    className=""
                    target="_blank"
                  >
                    <i className="fa fa-facebook icon text-center justify-end"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/_cmtiezz" target="_blank">
                    <i className="fa fa-twitter icon"></i>
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com/in/cmtchuong" target="_blank">
                    <i className="fa fa-linkedin icon"></i>
                  </a>
                </li>
                <li>
                  <a href="mailto:caochuongto@gmail.com">
                    <i className="fa fa-envelope icon"></i>
                  </a>
                </li>
              </ul>
            </div>
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
  
  export default Desktop;
  