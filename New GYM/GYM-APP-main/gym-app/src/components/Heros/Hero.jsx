import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'
import {motion} from 'framer-motion'
import NumberCounter from 'number-counter'

const transition ={type:'spring',duration:3}
const Hero = () => {
  return (
    <div className='hero' id='hero'>
    <div className="hero-blur blur"></div>
        <div className="left-h">
            <Header/>
            {/* The best Add */}
            <div className="the-best-ad">
              <motion.div
              initial={{left:'238px'}}
              whileInView={{left:'8px'}}
              transition={{...transition,type:'tween'}}>

              </motion.div>
              <span>the best fitness club in the town</span>
            </div>
            {/* Hero heading */}
            <div className="hero-text">
              <div>
                <span className='stroke-text'>Shape  </span>
                <span>Your</span>
              </div>

              <div>
                <span>Ideal body</span>
              </div>

              <div className="span">
                IN HERE WE WILL HELP YOU TO SHAPE AND BUILD YOUR IDEAL BODY AN LIVE UP YOUR LIFE TO FULLEST
              </div>

            </div>
            {/* figure start//// */}

            <div className="figures">
              <div>
                <span>
                  <NumberCounter end={140} start={100} delay='3' preFix="+"/>
                  </span>
              <span>expert coaches</span>
              </div>
              <div>
              <span> <NumberCounter end={978} start={850} delay='2' preFix="+"/></span>
              <span>members joined</span>
              </div>
              <div>
              <span> <NumberCounter end={50} start={20} delay='3' preFix="+"/></span>
              <span>fitness Programes</span>
              </div>
            </div>
          {/* hero buttons/////////////////// */}
          <div className="hero-buttons">
            <button className='btn'>Get Started</button>
            <button className='btn'>Learn More</button>
          </div>
        </div>
            {/* left h end */}




        <div className="right-h">
           
           <button className='btn'>Join Now</button>

           <motion.div className="heart-rate"
           initial={{right:'-1rem'}}
           whileInView={{right:'4rem'}}
           transition={transition}>
            <img src={Heart} alt="" />
            <span>Heart Rate</span><span>116 bpm</span>
           </motion.div>

           {/* hero images */}

           <img src={hero_image} alt="" className='hero-image' />
           <motion.img
           initial={{right:'11rem'}}
           whileInView={{right:'20rem'}}
           transition={transition}
            src={hero_image_back} alt="" className='hero-image-back' />

           {/* calories div here........ */}

           <motion.div className="calories"
           initial={{right:'37rem'}}
           whileInView={{right:'28rem'}}
           transition={transition}>
            <img src={Calories} alt="" />
            <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
            </div>
          
           </motion.div>
        </div>
      
    </div>
  )
}

export default Hero
