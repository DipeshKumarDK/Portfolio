import React from "react";
import OverviewCard from "./OverviewCard";
import back from "../assets/backlight.png";

function Overview() {
  return (
    <div className="xl:pl-44 xl:pr-44 lg:pl-32 lg:pr-32 md:pl-8 md:pr-8 sm:pl-8 sm:pr-8 pl-3 pr-3 lg:pt-[60px] lg:pb-[60px] md:pt-[45px] md:pb-[45px] pt-[35px] pb-[35px] bg-black text-white" style={{ backgroundImage: `url(${back})` }} id="overview">
      <h2 className="xl:text-5xl md:text-4xl sm:text-3xl text-[27px] font-semibold text-center">
        An{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#54cefa] to-[#f767dd]">
          Overview
        </span>
      </h2>
      <div className="flex flex-row justify-center">
      <h3 className="text-slate-300 lg:text-base sm:text-sm text-xs mt-2 lg:w-3/4 sm:w-4/5 text-center">
        I'm a skilled software developer with a sound knowledge of TypeScript
        and JavaScript and a good command on frameworks like React, Node.js,
        NextJs. I have good problem solving skills and a good knowledge of
        various Data Structures and Algorithms. I can develop Decentralized web
        application (DApps) using Smart Contracts, Web3.js and Ether.js.
      </h3>
      </div>
      <section className="grid md:grid-cols-3 md:gap-y-[0px] gap-y-[14px] grid-cols-1 lg:gap-x-[30px] gap-x-[18px] mt-10">
        <OverviewCard title={"MERN"} title2={"Development"} pic={"webdev"} index={10} />
        <OverviewCard title={"Data"} title2={"Structures"} pic={"dsa"} index={20} />
        <OverviewCard
          title={"Blockchain"}
          title2={"Development"}
          pic={"blockchain"}
          index={30} 
        />
      </section>
    </div>
  );
}

export default Overview;
