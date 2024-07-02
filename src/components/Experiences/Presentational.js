import React from 'react'
import { EXPERIENCES } from '../../constants'
import './Styles.scss'
const Experiences
 = () => {
  return (
    <div className='experience_container'>
     <h1>Experience</h1>
     <div className='experience_content'>
      {EXPERIENCES.map((experience, index) => (
      <div key={index} className='experience_item'>
        <div className='experience_item_date'>
        <p>
          {experience.year}
        </p>
        </div>
        <div className='experience_item_data'>
          <h4>
          {experience.role}
            <span>
              {experience.company}
            </span>
          </h4>
          <p className='experience_description'>
          {experience.description} 
          </p>
          <div className='experience_tech'>
             {experience.technologies.map((tech, index) => (  
            <span key={index} className='experience_tech'>
            {tech}
            </span>
          ))}
          </div>
         
        </div>
      </div>
      ))}
      </div>
    </div>
  )
}

export default Experiences

