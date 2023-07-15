import React , {useEffect} from 'react'
import blockchain from "../assets/blockchain.png"
import dsa from "../assets/dsa.png"
import solve from "../assets/problem-solving.png"
import webdev from "../assets/webdev.png"
import { motion , useAnimation } from "framer-motion"
import {useInView} from "react-intersection-observer";

function OverviewCard({title, title2, pic, index}) {

  const {ref , inView} = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if(inView){
      animation.start({
          x:0,
          rotateY: 0,
          transition:{
              duration:4  , type:"spring"
          }
      })
  }
  if(!inView){
      animation.start({
          x:`-${index}vw`,
          rotateY: 180
      })
  }
  }, [inView])

  return (
    <div className='w-full' ref={ref}>
    <motion.div animate={animation}
      // initial={{ x: `-10vw`, opacity: 0 }}
      // animate={{ x: 0, opacity: 1 }}
      // transition={{ duration: 2, type: "spring" }}
      className='w-full green-pink-gradient p-[2px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-[#151030] rounded-[20px] py-5 px-14 md:min-h-[280px] min-h-[200px] flex flex-col justify-center items-center'
      >
        <img
          src={pic==='webdev'?webdev: (pic==='blockchain'?blockchain: (pic === 'solve'? solve : dsa))}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white lg:text-[20px] md:text-[16px] mt-7 font-bold text-center'>
          {title}
        </h3>
        <h3 className='text-white lg:text-[20px] md:text-[16px] font-bold text-center'>
          {title2}
        </h3>
      </div>
    </motion.div>
  </div>
  )
}

export default OverviewCard