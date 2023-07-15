import React , {useEffect, useState} from "react";
import back from "../assets/backlight.png";
import crowd from "../assets/crowd.png";
import freelance from "../assets/freelance.png";
import esports from "../assets/esports.png";
import expense from "../assets/expense.png"
import { BsGithub } from "react-icons/bs";
import { motion , useAnimation } from "framer-motion"
import {useInView} from "react-intersection-observer";

function Projects() {

  const {ref , inView} = useInView();
  const animation = useAnimation();

  const [pro, setPro] = useState(1);

  const changePro = (i) => {
    setPro(i);
  }

  useEffect(() => {
    if(inView){
      animation.start({
        rotateX: 0,
          transition:{
              duration:4  , type:"spring"
          }
      })
  }
  if(!inView){
      animation.start({
        rotateX: 180
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
      <section className="grid lg:grid-cols-1 md:grid-cols-1 grid-cols-1 xl:gap-[35px] lg:gap-[15px] gap-[20px] lg:mt-10 md:mt-8 mt-6 justify-between">
        <motion.div animate={animation}
          className={`md:p-[16px] p-[8px] rounded-xl ${pro === 1 ? '' : 'hidden'} border-[2px] border-slate-200 flex justify-center md:min-h-[300px] min-h-[250px]`}
          style={{ position: "relative", backgroundImage: `url(${freelance})`, backgroundSize: 'cover', height: '450px' }}
        >
        <div className="md:w-2/3 w-full md:pl-0 md:pr-0 pl-2 pr-2 flex flex-col justify-center">
          <a
            href="https://github.com/DipeshKumarDK/Freebee---A-Blockchain-Based-Freelancing-Platform"
            target="_blank"
          >
            <BsGithub
              className="h-10 w-10 p-2 bg-slate-200 text-slate-900 rounded-full cursor-pointer"
              style={{ position: "absolute", top: "30px", right: "30px" }}
            />
          </a>
            <section className="pt-5 pb-3">
              <h2 className="font-semibold md:text-4xl sm:text-3xl text-2xl text-center">Freebee</h2>
              <h3 className="text-slate-300 mt-2 sm:text-base text-sm text-center">
              Freebe is a blockchain-based web platform where companies can create jobs 
              on the portal and get applications from various freelancers. The job creator 
              selects the best suitable freelancer and the corresponding amount of money is 
              deducted from their wallet. When the freelancer achieves a milestone of a particular job, 
              the corresponding proportion of money is transferred to their wallet.
              </h3>
            </section>
            <section className="mt-1 flex justify-center">
              <h4 className="text-green-500">#react</h4>
              <h4 className="ml-2 text-purple-500">#mongodb</h4>
              <h4 className="ml-2 text-orange-500">#blockchain</h4>
            </section>
            <section className="mt-4">
              <a href="https://freebee-tau.vercel.app/" target="_blank" className="flex justify-center">
                <h3 className="pt-3 pb-3 bg-gradient-to-r from-purple-800 to-purple-700 text-white w-[100px] text-center rounded-md">Visit</h3>
              </a>
            </section>
        </div>
        </motion.div>
        


         {/* 2 */}




         <motion.div animate={animation}
          className={`md:p-[16px] p-[8px] rounded-xl ${pro === 2 ? '' : 'hidden'} border-[2px] border-slate-200 flex justify-center md:min-h-[300px] min-h-[250px]`}
          style={{ position: "relative", backgroundImage: `url(${crowd})`, backgroundSize: 'cover', height: '450px' }}
        >
        <div className="md:w-2/3 w-full md:pl-0 md:pr-0 pl-2 pr-2 flex flex-col justify-center">
          <a
            href="https://github.com/DipeshKumarDK/Fund-Chain---A-Blockchain-Based-Crowdfunding-Platform"
            target="_blank"
          >
            <BsGithub
              className="h-10 w-10 p-2 bg-slate-200 text-slate-900 rounded-full cursor-pointer"
              style={{ position: "absolute", top: "30px", right: "30px" }}
            />
          </a>
            <section className="pt-5 pb-3">
              <h2 className="font-semibold md:text-4xl sm:text-3xl text-2xl text-center">FundChain</h2>
              <h3 className="text-slate-300 mt-2 sm:text-base text-sm text-center">
              Fund Chain is a blockchain-base crowdfunding platform where entrepreneurs 
              can raise financial support for their business. 
              Any entrepreneur who wants to raise funds can create a 
              project on the platform by providing the necessary details. 
              Any user who finds the project worth investing can fund the project. 
              In this way, the funded amount for a project keeps on increasing and the 
              list of funders keeps on growing. 
              </h3>
            </section>
            <section className="mt-1 flex justify-center">
              <h4 className="text-green-500">#react</h4>
              <h4 className="ml-2 text-purple-500">#mongodb</h4>
              <h4 className="ml-2 text-orange-500">#blockchain</h4>
            </section>
            <section className="mt-4">
              <a href="https://fund-chain-a-blockchain-based-crowdfunding-platform.vercel.app/" target="_blank" className="flex justify-center">
                <h3 className="pt-3 pb-3 bg-gradient-to-r from-purple-800 to-purple-700 text-white w-[100px] text-center rounded-md">Visit</h3>
              </a>
            </section>
        </div>
        </motion.div>


        {/* 3 */}



        <motion.div animate={animation}
          className={`md:p-[16px] p-[8px] rounded-xl ${pro === 3 ? '' : 'hidden'} border-[2px] border-slate-200 flex justify-center md:min-h-[300px] min-h-[250px]`}
          style={{ position: "relative", backgroundImage: `url(${esports})`, backgroundSize: 'cover', height: '450px' }}
        >
        <div className="md:w-2/3 w-full md:pl-0 md:pr-0 pl-2 pr-2 flex flex-col justify-center">
          <a
            href="https://github.com/DipeshKumarDK/Esports-Empire---An-Esports-Team-Up-Platform"
            target="_blank"
          >
            <BsGithub
              className="h-10 w-10 p-2 bg-slate-200 text-slate-900 rounded-full cursor-pointer"
              style={{ position: "absolute", top: "30px", right: "30px" }}
            />
          </a>
            <section className="pt-5 pb-3">
              <h2 className="font-semibold md:text-4xl sm:text-3xl text-2xl text-center">Esports Empire</h2>
              <h3 className="text-slate-300 mt-2 sm:text-base text-sm text-center">
              Esports Empire is a web platform where esports athletes can find new teams 
              to start a new competitive career. Any team that needs a player for a particular 
              role can invite new players by going through the list of players listed on the platform. 
              The player can see the details and stats of the team and decide whether or not to accept the invite. 
              Any esports athlete who wants to find a perfect team can make their profile on the platform by 
              providing all necessary details and listing his stats of a particular game.
              </h3>
            </section>
            <section className="mt-1 flex justify-center">
              <h4 className="text-green-500">#react</h4>
              <h4 className="ml-2 text-purple-500">#mongodb</h4>
              <h4 className="ml-2 text-orange-500">#tailwind</h4>
            </section>
            <section className="mt-4">
              <a href="https://myesportsempire.vercel.app/" target="_blank" className="flex justify-center">
                <h3 className="pt-3 pb-3 bg-gradient-to-r from-purple-800 to-purple-700 text-white w-[100px] text-center rounded-md">Visit</h3>
              </a>
            </section>
        </div>
        </motion.div>



        {/* 4 */}


        <motion.div animate={animation}
          className={`md:p-[16px] p-[8px] rounded-xl ${pro === 4 ? '' : 'hidden'} border-[2px] border-slate-200 flex justify-center md:min-h-[300px] min-h-[250px]`}
          style={{ position: "relative", backgroundImage: `url(${expense})`, backgroundSize: 'cover', height: '450px' }}
        >
        <div className="md:w-2/3 w-full md:pl-0 md:pr-0 pl-2 pr-2 flex flex-col justify-center">
          <a
            href="https://github.com/DipeshKumarDK/Expense-Tracker"
            target="_blank"
          >
            <BsGithub
              className="h-10 w-10 p-2 bg-slate-200 text-slate-900 rounded-full cursor-pointer"
              style={{ position: "absolute", top: "30px", right: "30px" }}
            />
          </a>
            <section className="pt-5 pb-3">
              <h2 className="font-semibold md:text-4xl sm:text-3xl text-2xl text-center">Expense-Tracker</h2>
              <h3 className="text-slate-300 mt-2 sm:text-base text-sm text-center">
              Expense-Tracker is a personal daily expense tracker where users can track their 
              expenses and incomes. Any user can create a new income or expense, view the previous 
              transactions and delete any previous transaction. The users can also view the transaction 
              data for past 30 days separately. Also, the users can visualize their expenses with the help 
              of a graph.
              </h3>
            </section>
            <section className="mt-1 flex justify-center">
              <h4 className="text-green-500">#react</h4>
              <h4 className="ml-2 text-purple-500">#mongodb</h4>
              <h4 className="ml-2 text-orange-500">#tailwind</h4>
            </section>
            <section className="mt-4">
              <a href="https://expense-tracker-jade-sigma.vercel.app/" target="_blank" className="flex justify-center">
                <h3 className="pt-3 pb-3 bg-gradient-to-r from-purple-800 to-purple-700 text-white w-[100px] text-center rounded-md">Visit</h3>
              </a>
            </section>
        </div>
        </motion.div>
      </section>
      <div className="flex justify-center gap-[15px] mt-4">
          <div onClick={()=>changePro(1)} className={`border-[1px] cursor-pointer border-slate-200 hover:bg-purple-700 ${pro === 1 ? 'bg-sky-600 text-slate-200':'bg-white text-slate-800'} rounded-full bg-slate-200 hover:text-purple-200 font-semibold h-10 w-10 flex flex-col justify-center`}>
            <h4 className="text-center">1</h4>
          </div>
          <div onClick={()=>changePro(2)} className={`border-[1px] cursor-pointer border-slate-200 hover:bg-purple-700 ${pro === 2 ? 'bg-sky-600 text-slate-200':'bg-white text-slate-800'} rounded-full bg-slate-200 hover:text-purple-200 font-semibold h-10 w-10 flex flex-col justify-center`}>
            <h4 className="text-center">2</h4>
          </div>
          <div onClick={()=>changePro(3)} className={`border-[1px] cursor-pointer border-slate-200 hover:bg-purple-700 ${pro === 3 ? 'bg-sky-600 text-slate-200':'bg-white text-slate-800'} rounded-full bg-slate-200 hover:text-purple-200 font-semibold h-10 w-10 flex flex-col justify-center`}>
            <h4 className="text-center">3</h4>
          </div>
          <div onClick={()=>changePro(4)} className={`border-[1px] cursor-pointer border-slate-200 hover:bg-purple-700 ${pro === 4 ? 'bg-sky-600 text-slate-200':'bg-white text-slate-800'} rounded-full bg-slate-200 hover:text-purple-200 font-semibold h-10 w-10 flex flex-col justify-center`}>
            <h4 className="text-center">4</h4>
          </div>
        </div>
    </div>
  );
}

export default Projects;


