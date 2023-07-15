import React, {useEffect} from 'react'
import {RiGraduationCapFill} from "react-icons/ri"
import { motion , useAnimation } from "framer-motion"
import {useInView} from "react-intersection-observer";


function EducationCard({direction, school, grade, year, type, marks, till, index}) {

  const {ref , inView} = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if(inView){
      animation.start({
          opacity:1,
          transition:{
              duration:3.5  , type:"spring"
          }
      })
  }
  if(!inView){
      animation.start({
          opacity:0
      })
  }
  }, [inView])

  return (
    <motion.div animate={animation} ref={ref} className={`bg-gradient-to-${direction} from-[#100c2c] to-[#151030] lg:p-5 p-4 xl:pt-12 xl:pb-12 lg:pt-10 lg:pb-10 pt-8 pb-8 w-full border-b-[4px] border-slate-100 rounded-md mt-2 mb-2`}>
      <RiGraduationCapFill className="md:h-16 md:w-16 h-12 w-12 text-slate-300"/>
      <h2 className='font-semibold lg:text-2xl text-xl mt-3 bg-clip-text text-transparent bg-gradient-to-r from-[#d4d3d5] to-[#f1e0ec]'>{school}</h2>
      <h3 className='lg:text-xl text-lg text-slate-300 mt-1 bg-clip-text text-transparent bg-gradient-to-r from-[#6af874] to-[#fc78cc]'>{grade}</h3>
      <h3 className='font-semibold lg:text-lg text-base mt-5 text-slate-300'>Duration: {year}</h3>
      <h3 className='font-semibold lg:text-lg text-base mt-1 text-slate-300'>{type} {till}: {marks}</h3>
    </motion.div>
  )
}

export default EducationCard