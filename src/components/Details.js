import {
  SiGithub,
  SiLinkedin,
  SiInstagram,
  SiTwitter,
  SiGmail,
} from "react-icons/si";

import dk from "../assets/dk.jpg";

const Details = () => {
  return (
    <section className="bg-gradient-to-r from-[#110c33] to-[#120c38] text-slate-200 sm:p-3 sm:pt-7 pt-5 sm:pb-7 pb-5 p-3 font-['Poppins']">
      <div className="rounded-2xl mx-2 sm:flex justify-between lg:pl-7 lg:pr-7 md:pl-4 md:pr-4 pt-7 pb-7 mb-7">
        <div className="lg:p-7">
          <h2 className="font-semibold leading-7 text-2xl tracking-wider sm:text-left text-center">
            Dipesh Kumar
          </h2>
          <h3 className="text-gray-100 leading-[30.8px] mt-6 sm:text-left text-center">
            Blockchain Development Enthusiast | IIITK'24
          </h3>
          <div className="flex sm:justify-start justify-center mt-4">
            <div className="h-8 w-8 p-1 bg-slate-200 rounded-full text-slate-800">
              <SiGmail className="h-full w-full" />
            </div>
            <p className="ml-3 mt-[3px]">dipesh23062003@gmail.com</p>
          </div>
          <div className="text-white text-2xl flex sm:justify-start justify-center gap-7 mt-6">
            <a
              href="https://github.com/DipeshKumarDK"
              target="_blank"
              className=" hover:text-slate-500  dark:hover:text-sky-300"
            >
              <SiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/dipesh-kumar-b8580020b/"
              target="_blank"
              className=" hover:text-slate-500  dark:hover:text-sky-300"
            >
              <SiLinkedin />
            </a>
            <a
              href="https://www.instagram.com/kal.se_padhai.shuru/"
              target="_blank"
              className=" hover:text-slate-500  dark:hover:text-sky-300"
            >
              <SiInstagram />
            </a>
            <a
              href="https://twitter.com/DipeshK71331890"
              target="_blank"
              className=" hover:text-slate-500  dark:hover:text-sky-300"
            >
              <SiTwitter />
            </a>
          </div>
          <div className="flex gap-5 sm:justify-start justify-center">
            <button className="py-3 px-4 bg-gradient-to-t dark:from-cyan-500 dark:to-slate-300 font-medium text-[12px] text-black outline-none mt-10 mr-3 rounded ">
              <a
                href="https://drive.google.com/file/d/1r9_SVCeWBVrd-AzXckIyyk4sniIDrf4j/view?usp=sharing" target="_blank"
                className="flex gap-2 items-center justify-center"
              >
                Resume
              </a>
            </button>
            <button className="py-3 px-4 bg-gradient-to-t dark:from-cyan-500 dark:to-slate-300 font-medium text-[12px] text-black outline-none mt-10 mr-3 rounded ">
              <a
                href="https://github.com/DipeshKumarDK" target="_blank"
                className="flex gap-2 items-center justify-center"
              >
                <SiGithub />
                Star
              </a>
            </button>
          </div>
        </div>

        <div className="flex sm:justify-end justify-center">
          <div className="flex flex-col justify-center">
            <img
              src={dk}
              alt="Dipesh Kumar"
              className="sm:h-[200px] h-[150px] border-slate-300 border-4 rounded-full mt-12"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Details;
