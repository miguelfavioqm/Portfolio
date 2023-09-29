import React from "react";
import { CgMenuGridO } from "react-icons/cg";
import { AiFillHtml5, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { SiJavascript } from "react-icons/si";
import { DiSass } from "react-icons/di";
import { BiLogoTailwindCss, BiLogoJava, BiLogoReact } from "react-icons/bi";
import { RiBootstrapFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { BsArrowDownCircle } from "react-icons/bs";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../assets/Animation - 1695940163900.json";
const Header = () => {
  return (
    <div className="h-screen w-full">
      <div className="flex justify-between px-4 py-2 w-full ">
        <a href="#" className="text-5xl font-semibold z-10 ">
          MF
        </a>
        <button className="z-10">
          <CgMenuGridO className="text-5xl " />
        </button>
      </div>
      <div className="flex">
        <div className=" flex flex-col md:w-1/2 h-3/4 md:right-0 md:absolute justify-center items-center">
          <div className="w-full md:h-full flex items-center justify-center text-center flex-col m-auto p-4">
            <h1 className="text-2xl font-semibold underline">
              MIGUEL FAVIO QUISPE MAMANI <br />
            </h1>
            <h2 className="text-xl mt-2">
              {" (Mis redes) => { "}
              <a href="#">
                <AiFillLinkedin className="inline-block text-2xl" />
              </a>{" "}
              <a href="#">
                <AiFillGithub className="inline-block text-2xl" />
              </a>
              {"}"}
            </h2>
            <p className="p-4 text-xl">DESARROLLADOR</p>
            <p>
              CADA INSTANTE ES UNA OPORTUNIDAD PARA LLEVAR TUS SUEÑOS HASTA EL
              INFINITO ...
              <br />
              SI PUEDES IMAGINARLO PUEDES PROGRAMARLO
            </p>
          </div>
          <div className="flex w-full justify-center items-center text-4xl gap-2 flex-wrap p-4">
            <AiFillHtml5 />
            <IoLogoCss3 />
            <SiJavascript />
            <DiSass />
            <RiBootstrapFill />
            <BiLogoTailwindCss />
            <BiLogoReact />
            <BiLogoJava />
            <SiMysql />
          </div>
        </div>
        <Lottie
          className="absolute bottom-0 md:inline-block md:w-1/2 w-full h-screen/2 md:h-screen"
          animationData={groovyWalkAnimation}
          loop={true}
        />
      </div>
      <button className="rounded-full absolute bottom-4 right-4 md:right-1/2 animate-bounce text-4xl md:text-6xl">
        <BsArrowDownCircle />
      </button>
    </div>
  );
};

export default Header;
