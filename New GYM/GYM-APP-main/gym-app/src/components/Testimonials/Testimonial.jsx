import React from 'react'
import './Testimonial.css'
import {testimonialsData} from '../../data/testimonialsData'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'
import { useState } from 'react'
import {motion} from 'framer-motion'

const transition ={type:'spring',duration:3}

const Testimonial = () => {
  const [selected,setselected] =useState(0)
const tLength= testimonialsData.length
  return (
    <div className='testimonial' id='testimonials'>

      <div className="left-t">
        <span>Testimonials</span><span>What they</span><span>say about us</span>

        <motion.span
        key={selected}
         initial={{opacity:0,x:-100}}
         animate={{opacity:1,x:0}}
         exit={{opacity:0,x:100}}
         transition={transition}>
          {testimonialsData[selected].review}
        </motion.span>

        <span>
          <span style={{color:"var(--orange)"}}>{testimonialsData[selected].name}</span>{" "}
          <span>- {testimonialsData[selected].status}</span>
        </span>


      </div>

{/* left side end here................... */}


      <div className="right-t">
        <motion.div initial={{opacity:0,x:-100}}
        transition={{...transition,duration:2}}
        whileInView={{opacity:1,x:0}}
        ></motion.div>
        <motion.div 
        initial={{opacity:0,x:100}}
        transition={{...transition,duration:2}}
        whileInView={{opacity:1,x:0}}> </motion.div>
         <motion.img 
         key={selected}
         initial={{opacity:0,x:100}}
         animate={{opacity:1,x:0}}
         exit={{opacity:0,x:-100}}
         transition={transition}
         src={testimonialsData[selected].image} alt="" />

         <div className="arrows">
          <img src={leftArrow} alt=""  onClick={()=>{
                 selected===0?setselected(tLength-1):setselected((prev)=>prev-1)
          }}/>
          <img src={rightArrow} alt="" onClick={()=>{
            selected===tLength-1?setselected(0):setselected((prev)=>prev+1)
          }} />
         </div>

      </div>
      
    </div>
  )
}

export default Testimonial
