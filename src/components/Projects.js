import React , {useEffect} from "react";
import back from "../assets/backlight.png";
import crowd from "../assets/crowd.png";
import freelance from "../assets/freelance.png";
import esports from "../assets/esports.png";
import { BsGithub } from "react-icons/bs";
import { motion , useAnimation } from "framer-motion"
import {useInView} from "react-intersection-observer";

function Projects() {

  const {ref , inView} = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if(inView){
      animation.start({
        rotateY: 0,
          transition:{
              duration:4  , type:"spring"
          }
      })
  }
  if(!inView){
      animation.start({
        rotateY: 180
      })
  }
  }, [inView])
  // initial: { rotateY: 180 },
  // animate: { rotateY: 170, transition: { duration: 3 } },
  // exit: { rotateY: 170, transition: { duration: 3 } }


  return (
    <div ref={ref}
      className="xl:pl-36 xl:pr-36 lg:pl-24 lg:pr-24 md:pl-8 md:pr-8 sm:pl-14 sm:pr-14 xs:pl-6 xs:pr-6 pl-3 pr-3 lg:pt-[100px] lg:pb-[100px] md:pt-[75px] md:pb-[75px] pt-[50px] pb-[50px] bg-black text-white"
      id="project"
    >
      <h2 className="xl:text-5xl md:text-4xl sm:text-3xl text-[27px] font-semibold text-center">
        My Recent{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#54cefa] to-[#f767dd]">
          Projects
        </span>
      </h2>
      <div className="flex flex-row justify-center">
        <h3 className="text-slate-300 md:text-base text-sm md:mt-3 mt-2 lg:w-3/4 sm:w-4/5 text-center">
          Have a look on various projects I have worked upon. These include
          projects made using MERN stack and blockchain.
        </h3>
      </div>
      <section className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-[35px] lg:gap-[15px] gap-[20px] lg:mt-10 md:mt-8 mt-6 justify-between">
        <motion.div animate={animation}
          className="bg-[#110c33] p-[16px] rounded-xl"
          style={{ position: "relative" }}
        >
          <a
            href="https://github.com/DipeshKumarDK/Freebee---A-Blockchain-Based-Freelancing-Platform"
            target="_blank"
          >
            <BsGithub
              className="h-10 w-10 p-2 bg-slate-200 text-slate-900 rounded-full cursor-pointer"
              style={{ position: "absolute", top: "30px", right: "30px" }}
            />
          </a>
          <a href="https://freebee-tau.vercel.app/" target="_blank">
            <img
              src={freelance}
              className="xl:h-[250px] h-[200px] w-full rounded-xl"
            />
            <section className="pt-5 pb-3">
              <h2 className="font-semibold text-xl">Freebee</h2>
              <h3 className="text-slate-300 mt-2">
                A blockchain-based web platform where companies can create jobs
                and hire various freelancers.
              </h3>
            </section>
            <section className="mt-1 flex">
              <h4 className="text-green-500">#react</h4>
              <h4 className="ml-2 text-purple-500">#mongodb</h4>
              <h4 className="ml-2 text-orange-500">#blockchain</h4>
            </section>
          </a>
        </motion.div>
        <motion.div animate={animation}
          className="bg-[#110c33] p-[16px] rounded-xl"
          style={{ position: "relative" }}
        >
          <a
            href="https://github.com/DipeshKumarDK/Fund-Chain---A-Blockchain-Based-Crowdfunding-Platform"
            target="_blank"
          >
            <BsGithub
              className="h-10 w-10 p-2 bg-slate-200 text-slate-900 rounded-full cursor-pointer"
              style={{ position: "absolute", top: "30px", right: "30px" }}
            />
          </a>
          <a
            href="https://fund-chain-a-blockchain-based-crowdfunding-platform.vercel.app/"
            target="_blank"
          >
            <img
              src={crowd}
              className="xl:h-[250px] h-[200px] w-full rounded-xl"
            />
            <section className="pt-5 pb-3">
              <h2 className="font-semibold text-xl">FundChain</h2>
              <h3 className="text-slate-300 mt-2">
                A blockchain based crowdfunding platfrom where entrepreneurs can
                raise financial support for their business.
              </h3>
            </section>
            <section className="mt-1 flex">
              <h4 className="text-green-500">#react</h4>
              <h4 className="ml-2 text-purple-500">#mongodb</h4>
              <h4 className="ml-2 text-orange-500">#blockchain</h4>
            </section>
          </a>
        </motion.div>
        <motion.div animate={animation}
          className="bg-[#110c33] p-[16px] rounded-xl lg:block md:hidden"
          style={{ position: "relative" }}
        >
          <a
            href="https://github.com/DipeshKumarDK/Esports-Empire---An-Esports-Team-Up-Platform"
            target="_blank"
          >
            <BsGithub
              className="h-10 w-10 p-2 bg-slate-200 text-slate-900 rounded-full cursor-pointer"
              style={{ position: "absolute", top: "30px", right: "30px" }}
            />
          </a>
          <a href="https://myesportsempire.vercel.app/" target="_blank">
            <img
              src={esports}
              className="xl:h-[250px] h-[200px] w-full rounded-xl"
            />
            <section className="pt-5 pb-3">
              <h2 className="font-semibold text-xl">Esports Empire</h2>
              <h3 className="text-slate-300 mt-2">
                A web platform where esports athletes can find new teams to
                start a new competitive career.
              </h3>
            </section>
            <section className="mt-1 flex">
              <h4 className="text-green-500">#react</h4>
              <h4 className="ml-2 text-purple-500">#mongodb</h4>
              <h4 className="ml-2 text-orange-500">#tailwind</h4>
            </section>
          </a>
        </motion.div>
      </section>
      <section className="lg:hidden md:flex hidden justify-center mt-5">
        <motion.div animate={animation}
          className="bg-[#110c33] p-[16px] rounded-xl w-[400px]"
          style={{ position: "relative" }}
        >
          <a
            href="https://github.com/DipeshKumarDK/Esports-Empire---An-Esports-Team-Up-Platform"
            target="_blank"
          >
            <BsGithub
              className="h-10 w-10 p-2 bg-slate-200 text-slate-900 rounded-full cursor-pointer"
              style={{ position: "absolute", top: "30px", right: "30px" }}
            />
          </a>
          <a href="https://myesportsempire.vercel.app/" target="_blank">
            <img
              src={freelance}
              className="xl:h-[250px] h-[200px] w-full rounded-xl"
            />
            <section className="pt-5 pb-3">
              <h2 className="font-semibold text-xl">Freebee</h2>
              <h3 className="text-slate-300 mt-2">
                A blockchain-based web platform where companies can create jobs
                and hire various freelancers.
              </h3>
            </section>
            <section className="mt-1 flex">
              <h4 className="text-green-500">#react</h4>
              <h4 className="ml-2 text-purple-500">#mongodb</h4>
              <h4 className="ml-2 text-orange-500">#blockchain</h4>
            </section>
          </a>
        </motion.div>
      </section>
    </div>
  );
}

export default Projects;
