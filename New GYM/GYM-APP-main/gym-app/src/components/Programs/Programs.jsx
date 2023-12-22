import React from 'react'
import './Programs.css'
import {programsData} from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'

const Programs = () => {
  return (
    <div className='programs' id='programs'>
{/* programs headers//////// */}
      <div className="programs-headers">
        <span className='stroke-text'>Explore Our</span>
        <span>Programe</span>
        <span className='stroke-text'>to shape you</span>
      </div>

      {/* mapping data */}

      <div className="program-categories">
        {programsData.map((program,i)=>(
          <div className="category" key={i}>
            {program.image}
            <span> {program.heading}</span>
              <span>{program.details}</span>
              <div className="join-now"><span>Join Now</span> <img src={RightArrow} alt="" /></div>
          </div>
        ))}
      </div>
        
      
    </div>
  )
}

export default Programs
