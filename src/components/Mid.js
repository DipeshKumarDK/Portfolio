import React , {useEffect} from "react";
import pic from "../assets/back.png";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-scroll";
import back from "../assets/backlight.png";
import { motion , useAnimation } from "framer-motion"
import {useInView} from "react-intersection-observer";
import computer from "../assets/computer.json"
import Lottie from "lottie-react";

function Mid() {

  const {ref , inView} = useInView();
  const animation = useAnimation();

  return (
    <div
      className="xl:pl-36 xl:pr-36 lg:pl-8 lg:pr-8 md:pl-6 md:pr-6 sm:pl-7 sm:pr-7 pl-3 pr-3 pt-12 pb-12 text-white flex"
      id="intro"
      style={{ backgroundImage: `url(${back})` }}
    >
      <section ref={ref} className="md:w-1/2 w-full pr-8 flex flex-col justify-center">
        <motion.h1 className="xl:text-7xl lg:text-5xl md:text-4xl text-3xl md:text-left text-center font-semibold">
          Hi! I Am{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-green-400">
            Dipesh
          </span>
        </motion.h1>
        <h2 className="xl:text-3xl lg:text-2xl text-xl md:text-left text-center md:text-xl font-semibold text-slate-100 mt-1">
          Blockchain And MERN Developer
        </h2>
        {/* <h3 className="font-semibold lg:text-base md:text-left text-center text-sm text-slate-300 mt-2">
          I'm an undergrad from IIIT Kota, having a keen interest in blockchain
          development. My web development skills include HTML5, CSS, Javascript,
          Typescript, React Js, Next Js, Node Js, Express Js, MongoDb, Tailwind
          CSS, etc. I also like to develop decentralized applications using
          Solidity, Smart Contracts, Ether Js, Web3 Js, etc. Apart from tech, I
          am a state-level cricket and volleyball player and an esports athlete.
        </h3> */}
        <h3 className="font-semibold lg:text-base md:text-left text-center text-sm text-slate-300 mt-2">
          I'm a final year student persuing my B.Tech from IIIT Kota, native of
          a small village named Kosli in Rewari district of Haryana and a
          blockchain development enthusiast. I'm a self-motivated person with a
          keen desire to keep learning and getting better. Apart from tech, I am
          a state-level cricket and volleyball player and an esports athlete. I
          like reading about astronomy and watching documentaries.
        </h3>
        <div className="flex mt-3 md:justify-start justify-center">
          <div className="flex flex-col justify-center">
            <Link
              to={"contact"}
              smooth={true}
              offset={-50}
              duration={800}
              className="font-semibold cursor-pointer"
            >
              Get in touch
            </Link>
          </div>
          <Link
            to={"contact"}
            smooth={true}
            offset={-50}
            duration={800}
            className="h-9 w-9 cursor-pointer p-1 border-[1px] border-slate-200 ml-3 rounded-full"
          >
            <BsArrowRightShort className="h-full w-full" />
          </Link>
        </div>
      </section>
      <section className="md:flex hidden lg:justify-center justify-end w-1/2">
      <Lottie
        animationData={computer}
        loop={true}
        className="h-[500px] shadow-xl rounded-xl border border-[#00040f]"
      />
      </section>
    </div>
  );
}

export default Mid;
