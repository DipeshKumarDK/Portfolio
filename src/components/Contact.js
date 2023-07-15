import React , {useEffect,useRef, useState} from "react";
import emailjs from '@emailjs/browser';
import pic from "../assets/contact.svg";
import back from "../assets/backlight.png";
import { motion , useAnimation } from "framer-motion"
import {useInView} from "react-intersection-observer";
import { MdOutlineErrorOutline } from "react-icons/md";

function Contact() {

  const {ref , inView} = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if(inView){
      animation.start({
          scale:1,
          transition:{
              duration:2.3  , type:"spring"
          }
      })
  }
  if(!inView){
      animation.start({
          scale:0
      })
  }
  }, [inView])


  const form = useRef();

  
  const [modal, setModal] = useState("N");

  const changeModal = () => {
    setModal("N");
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zc77mqb', 'template_7hywnyj', form.current, 'LUnYIlet7n_mbuXeU')
      .then((result) => {
          console.log(result.text);
          setModal("Y");
          setTimeout(changeModal, 5000);
      }, (error) => {
          console.log(error.text);
          setModal("P");
          setTimeout(changeModal, 5000);
      });
  };


  return (
    <div ref={ref} 
      className="xl:pl-36 xl:pr-36 lg:pl-24 lg:pr-24 md:pl-8 md:pr-8 sm:pl-8 sm:pr-8 pl-3 pr-3 lg:pt-[70px] lg:pb-[80px] md:pt-[65px] md:pb-[65px] pt-[45px] pb-[55px] text-white flex"
      style={{ backgroundImage: `url(${back})` }} id="contact"
    >
      <section className="md:flex hidden justify-center w-1/2 pr-4">
        <img src={pic} alt="image" className="h-[500px] animate-bounce" />
      </section>
      <motion.section animate={animation} className="md:w-1/2 w-full flex flex-col justify-center">
        <h2 className="xl:text-5xl md:text-4xl sm:text-3xl text-[27px] font-semibold">
          Get In{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#54cefa] to-[#f767dd]">
            Touch
          </span>
        </h2>
        <form ref={form} onSubmit={sendEmail} className="mt-6">
          <div className="grid xs:grid-cols-2 grid-cols-1 gap-[10px]">
            <input name="from_name"
              className="bg-[#020b0e] border-[1px] border-slate-300 text-slate-200 placeholder:text-slate-400 p-3 rounded-[15px] w-full md:h-[60px] sm:h-[50px] h-[45px]"
              placeholder="First name"
              type="text"
            />
            <input name="from_name2"
              className="bg-[#020b0e] border-[1px] border-slate-300 text-slate-200 placeholder:text-slate-400 p-3 rounded-[15px] w-full md:h-[60px] sm:h-[50px] h-[45px]"
              placeholder="Last Name"
              type="text"
            />
          </div>
          <div className="grid xs:grid-cols-2 grid-cols-1 gap-[10px] mt-3">
            <input name="from_email"
              className="bg-[#020b0e] border-[1px] border-slate-300 text-slate-200 placeholder:text-slate-400 p-3 rounded-[15px] w-full md:h-[60px] sm:h-[50px] h-[45px]"
              placeholder="Email Address"
              type="email"
            />
            <input name="from_phone"
              className="bg-[#020b0e] border-[1px] border-slate-300 text-slate-200 placeholder:text-slate-400 p-3 rounded-[15px] w-full md:h-[60px] sm:h-[50px] h-[45px]"
              placeholder="Phone No."
              type="text"
            />
          </div>
          <textarea name="message"
            rows={7}
            className="bg-[#020b0e] border-[1px] border-slate-300 text-slate-200 placeholder:text-slate-400 p-2 rounded-[15px] w-full mt-3"
            placeholder="Elaborate your concern"
          />
          <div
              className={`${
                modal === "Y" ? "" : "hidden"
              } bg-green-600 border-[2px] mt-3 mb-1 border-slate-300 shadow-lg text-white pt-3 pb-3 pl-4 pr-4 rounded-md flex relative w-auto transition duration-3000 ease-in-out`}
              // style={{ position: "absolute", top: "60px", right: "4px" }}
            >
              <MdOutlineErrorOutline className="h-8 w-8 animate-bounce mt-[5px]" />
              <div className="mt-[8px] ml-3 sm:text-base text-sm">Thanks for initiating a conversation</div>
            </div>
            <div
              className={`${
                modal === "P" ? "" : "hidden"
              } bg-red-600 border-[2px] mt-3 mb-1 border-slate-300 shadow-lg text-white pt-3 pb-3 pl-4 pr-4 rounded-md flex relative w-auto transition duration-3000 ease-in-out`}
              // style={{ position: "absolute", top: "60px", right: "4px" }}
            >
              <MdOutlineErrorOutline className="h-8 w-8 animate-bounce mt-[5px]" />
              <div className="mt-[8px] ml-3 sm:text-base text-sm">Oop! Some error occured</div>
            </div>
          <button type="submit" className="w-24 pt-2 pb-2 bg-purple-700 text-white text-center rounded-md mt-2 border-[1px] border-slate-300 cursor-pointer">
            Submit
          </button>
        </form>
      </motion.section>
    </div>
  );
}

export default Contact;
