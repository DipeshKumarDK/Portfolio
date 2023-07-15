import React, { useEffect, useState } from "react";
import pic from "../assets/logo.png";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-scroll";
import back from "../assets/backlight.png";

function Header() {
  const [vis, setVis] = useState(0);

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 60) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
    console.log(window.scrollY);
  };

  window.addEventListener("scroll", changeNavbarColor);

  return (
    <div
      className={`h-[70px] text-white flex sticky top-0 justify-between xl:pl-24 lg:pl-6 xl:pr-24 lg:pr-6 sm:pl-6 sm:pr-6 pl-3 pr-3 pt-10 pb-10 ${
        colorChange === true ? "bg-black border-b-[1px] border-slate-300" : ""
      }`}
      style={{
        backgroundImage: `${colorChange === false ? `url(${back})` : ""}`,
      }}
    >
      <div className="lg:flex hidden flex-col justify-center">
        <img src={pic} alt="logo" className="h-[40px]" />
      </div>
      <div className="lg:hidden flex flex-col justify-center">
        <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-green-400 sm:text-[28px] text-[22px]">{`< Dipesh />`}</h3>
      </div>
      <section className="lg:flex hidden">
        <div className="flex xl:ml-4 xl:mr-4 ml-3 mr-3 cursor-pointer flex-col justify-center">
          <Link
            to={"intro"}
            smooth={true}
            offset={-50}
            duration={500}
            className="font-semibold hover:text-purple-400"
          >
            Intro
          </Link>
        </div>
        <div className="flex xl:ml-4 xl:mr-4 ml-3 mr-3 cursor-pointer flex-col justify-center">
          <Link
            to={"overview"}
            smooth={true}
            offset={-50}
            duration={500}
            className="font-semibold hover:text-purple-400"
          >
            Overview
          </Link>
        </div>
        <div className="flex xl:ml-4 xl:mr-4 ml-3 mr-3 cursor-pointer flex-col justify-center">
          <Link
            to={"education"}
            smooth={true}
            offset={-20}
            duration={500}
            className="font-semibold hover:text-purple-400"
          >
            Education
          </Link>
        </div>
        <div className="flex xl:ml-4 xl:mr-4 ml-3 mr-3 cursor-pointer flex-col justify-center">
          <Link
            to={"skills"}
            smooth={true}
            offset={-50}
            duration={600}
            className="font-semibold hover:text-purple-400"
          >
            Skills
          </Link>
        </div>
        <div className="flex xl:ml-4 xl:mr-4 ml-3 mr-3 cursor-pointer flex-col justify-center">
          <Link
            to={"project"}
            smooth={true}
            offset={-20}
            duration={700}
            className="font-semibold hover:text-purple-400"
          >
            Projects
          </Link>
        </div>
        <div className="flex flex-col justify-center">
          <a href="https://www.linkedin.com/in/dipesh-kumar-b8580020b/" target="_blank" className="h-8 w-8 p-1 border-[1px] cursor-pointer hover:text-purple-400 border-white bg-[#020c10f0] rounded-full ml-4 mr-2">
            <BiLogoLinkedin className="w-full h-full" />
          </a>
        </div>
        <div className="flex flex-col justify-center">
          <a href="https://www.instagram.com/kal.se_padhai.shuru/" target="_blank" className="h-8 w-8 p-1 border-[1px] cursor-pointer hover:text-purple-400 border-white bg-[#020c10f0] rounded-full ml-2 mr-2">
            <AiOutlineInstagram className="w-full h-full" />
          </a>
        </div>
        <div className="flex flex-col justify-center">
          <a href="https://github.com/DipeshKumarDK" target="_blank" className="h-8 w-8 p-1 border-[1px] cursor-pointer hover:text-purple-400 border-white bg-[#020c10f0] rounded-full ml-2 mr-2">
            <BsGithub className="w-full h-full" />
          </a>
        </div>
        <div className="flex ml-3 flex-col justify-center">
          <Link
            to={"contact"}
            smooth={true}
            offset={-50}
            duration={800}
            className="pt-3 pb-3 pl-4 pr-4 border-[1px] hover:text-purple-400 cursor-pointer border-white font-semibold"
          >
            Let's Connect
          </Link>
        </div>
      </section>
      <div
        className="flex flex-col justify-center lg:hidden"
        style={{ position: "relative" }}
      >
        <div
          className={`h-8 w-8 p-1 bg-[#020c10f0] rounded-full ml-2 mr-2 cursor-pointer ${
            vis === 1 ? "hidden" : ""
          }`}
          onClick={() => setVis(1)}
        >
          <RxHamburgerMenu className="w-full h-full text-purple-50" />
        </div>
        <div
          className={`h-8 w-8 p-1 bg-[#020c10f0] rounded-full ml-2 mr-2 cursor-pointer ${
            vis === 0 ? "hidden" : ""
          }`}
          onClick={() => setVis(0)}
        >
          <RxCross1 className="w-full h-full text-purple-50" />
        </div>
        <section
          className={`lg: ${
            vis === 0 ? "hidden" : ""
          } bg-gradient-to-r from-[#80029c] to-[#730471] rounded-md pt-2 pb-2 pl-3 pr-3 sm:w-[200px] w-[160px] text-white`}
          style={{ position: "absolute", top: "40px", right: "15px" }} onMouseLeave={()=>setVis(0)}
        >
          <div className="flex flex-col justify-center mt-3 mb-3">
            <Link
              to={"intro"}
              smooth={true}
              offset={-50}
              duration={500}
              className="font-semibold hover:text-purple-400 cursor-pointer sm:text-base text-sm"
            >
              Intro
            </Link>
          </div>
          <div className="flex flex-col justify-center mt-3 mb-3">
            <Link
              to={"overview"}
              smooth={true}
              offset={-50}
              duration={500}
              className="font-semibold hover:text-purple-400 cursor-pointer sm:text-base text-sm"
            >
              Overview
            </Link>
          </div>
          <div className="flex flex-col justify-center mt-3 mb-3">
            <Link
              to={"education"}
              smooth={true}
              offset={-20}
              duration={500}
              className="font-semibold hover:text-purple-400 cursor-pointer sm:text-base text-sm"
            >
              Education
            </Link>
          </div>
          <div className="flex flex-col justify-center mt-3 mb-3">
            <Link
              to={"skills"}
              smooth={true}
              offset={-50}
              duration={600}
              className="font-semibold hover:text-purple-400 cursor-pointer sm:text-base text-sm"
            >
              Skills
            </Link>
          </div>
          <div className="flex flex-col justify-center mt-3 mb-3">
            <Link
              to={"project"}
              smooth={true}
              offset={-20}
              duration={700}
              className="font-semibold hover:text-purple-400 cursor-pointer sm:text-base text-sm"
            >
              Projects
            </Link>
          </div>
          <div className="flex">
            <div className="flex flex-col justify-center mt-3 mb-3">
              <a href="https://www.linkedin.com/in/dipesh-kumar-b8580020b/" target="_blank" className="h-8 w-8 p-1 border-[1px] cursor-pointer border-white hover:text-purple-400 bg-[#020c10f0] rounded-full mr-2">
                <BiLogoLinkedin className="w-full h-full" />
              </a>
            </div>
            <div className="flex flex-col justify-center">
              <a href="https://www.instagram.com/kal.se_padhai.shuru/" target="_blank" className="h-8 w-8 p-1 border-[1px] cursor-pointer border-white hover:text-purple-400 bg-[#020c10f0] rounded-full ml-2 mr-2">
                <AiOutlineInstagram className="w-full h-full" />
              </a>
            </div>
            <div className="flex flex-col justify-center">
              <a href="https://github.com/DipeshKumarDK" target="_blank" className="h-8 w-8 p-1 border-[1px] cursor-pointer border- hover:text-purple-400 bg-[#020c10f0] rounded-full ml-2">
                <BsGithub className="w-full h-full" />
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-center mt-3 mb-3">
            <Link
              to={"contact"}
              smooth={true}
              offset={-50}
              duration={800}
              className="pt-3 pb-3 pl-4 pr-4 border-[1px] hover:text-purple-400 cursor-pointer sm:text-base text-sm border-white font-semibold"
            >
              Let's Connect
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Header;
