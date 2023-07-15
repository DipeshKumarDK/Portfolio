import React from "react";
import back from "../assets/backlight.png";
import EducationCard from "./EducationCard";
import rps1 from "../assets/rps1.jpg";
import rps2 from "../assets/rps2.jpg";
import college from "../assets/college.png";

function Education() {
  return (
    <div
      className="xl:pl-36 xl:pr-36 lg:pl-24 lg:pr-24 md:pl-8 md:pr-8 sm:pl-8 sm:pr-8 pl-3 pr-3 lg:pt-[100px] lg:pb-[100px] md:pt-[75px] md:pb-[75px] pt-[50px] pb-[50px] text-white"
      style={{ backgroundImage: `url(${back})` }}
      id="education"
    >
      <h3 className="font-semibold text-slate-300 lg:text-2xl md:text-xl text-center">
        Have a look on
      </h3>
      <h2 className="xl:text-5xl md:text-4xl sm:text-3xl text-[27px] mt-1 font-semibold text-center">
        My{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#54cefa] to-[#f767dd]">
          Education
        </span>
      </h2>
      <section className="lg:mt-12 md:mt-8 mt-6">
        <div className="flex">
          <div className="md:w-1/2 w-full">
            <EducationCard
              direction="r"
              school={"Indian Institute Of Information Technology, Kota"}
              grade={"B.Tech"}
              year={"2020-2024"}
              type={"CGPA"}
              till={"Till Now"}
              marks={"8.42"}
              index={-10}
            />
          </div>
          <div className="md:flex justify-center hidden w-1/2 pl-4 pr-4 pt-2 pb-2">
            <div className="flex flex-col justify-center">
              <img
                src={college}
                alt=""
                className="bg-white lg:h-64 lg:w-64 h-56 w-56 rounded-full border-[2px] border-slate-200"
              />
            </div>
          </div>
        </div>
        <div className="flex">
        <div className="md:flex justify-center hidden w-1/2 pl-4 pr-4 pt-2 pb-2">
            <div className="flex flex-col justify-center">
              <img
                src={rps1}
                alt=""
                className="bg-white lg:h-64 lg:w-64 h-56 w-56 rounded-full border-[2px] border-slate-200"
              />
            </div>
          </div>
          <div className="md:w-1/2 w-full">
            <EducationCard
              direction="r"
              school={"Rao Pahlad Singh Senior Secondary School, Mahendergarh"}
              grade={"12th Class"}
              year={"2019-2020"}
              type={"Percentage"}
              marks={"85.6%"}
              index={10}
            />
          </div>
        </div>
        <div className="flex">
          <div className="md:w-1/2 w-full">
            <EducationCard
              direction="r"
              school={"Rao Pahlad Singh Senior Secondary School, Mahendergarh"}
              grade={"10th Class"}
              year={"2017-2018"}
              type={"Percentage"}
              marks={"88.4%"}
              index={-10}
            />
          </div>
          <div className="md:flex justify-center hidden w-1/2 pl-4 pr-4 pt-2 pb-2">
            <div className="flex flex-col justify-center">
              <img
                src={rps1}
                alt=""
                className="bg-white lg:h-64 lg:w-64 h-56 w-56 rounded-full border-[2px] border-slate-200"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Education;
