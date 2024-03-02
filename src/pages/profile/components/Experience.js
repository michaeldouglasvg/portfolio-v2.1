import React from 'react'
import { ExperienceLevel } from '../../../constants/DataFlow'

const Experience = () => {

  return (
    <div className='Experiencecontainer'>
    {
        ExperienceLevel && ExperienceLevel.map((item, idx) => {
            return   <div className="singlecontainer" key={idx}>
            <div className="names">
                <p className='topics'>{idx + 1}. {item.level} Level</p>
                <p className='topics'>Years: 2Years</p>
            </div>
               {
                item.data.map((data, idx) => {
                    return (
                        <div className="innercontentskills">
                            <div className="left">
                                <div className="bars">
                                    <p className='topics'>Position: <span className='automated'>{item.position}</span></p>
                                </div>
                                <div className="bars">
                                    <p className='topics'>Category: <span className='automated'>{data.category}</span></p>
                                    <p className='topics'>Project: <span className='automated'>{data.name}</span></p>
                                </div>
                                <div className="bars">
                                    <p className='topics'>Technologies</p>
                                    {
                                        data.technologies.map((tech, index) => {
                                            return <span key={index} className='automated'>{tech}, </span>
                                        })
                                    }
                                </div>
                                <div className="bars">
                                    <p className='topics'>Problem solved</p>
                                    <p className='automated'>{data.problemSolved}</p>
                                </div>
                            </div>
                            <div className="mid">
                            <div className="descriptions">
                                    <p className='topics'>Description</p>
                                    {
                                        data.description.map((description, index) => {
                                            return <p className='automated'>{index + 1}. {description}</p>
                                        })
                                    }
                            </div>
                            </div>
                            <div className="right">
                                <div className="descriptions">
                                    <p className='topics'>Achievements</p>
                                    {
                                        data.achivements.map((achieve, index) => {
                                            return <p className='automated'>{index + 1}. {achieve}</p>
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    )
                })
               }
                
            </div>
        })
    }
    </div>
  )
}

export default Experience
