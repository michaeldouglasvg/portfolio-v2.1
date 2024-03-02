import React, { useState } from 'react'
import { ExperienceLevel } from '../../../constants/DataFlow'
import { FaChevronCircleDown } from 'react-icons/fa';

const Experience = () => {
    const [openSections, setOpenSections] = useState({});

    const toggleSection = (sectionId) => {
      setOpenSections((prevOpenSections) => ({
        ...prevOpenSections,
        [sectionId]: !prevOpenSections[sectionId]
      }));
    };
    
  return (
    <div className='Experiencecontainer'>
    {
        ExperienceLevel && ExperienceLevel.map((item, idx) => {
            return   <div className="singlecontainer" key={idx}>
            <div className="names" onClick={() => toggleSection(item.id)}>
                <p className='topics'>{idx + 1}. {item.level} Level ({item.workplace})</p>
                <div className="figures">
                  <p className='topics'>Duration: {item.duration} Months.</p>
                  <FaChevronCircleDown
                    color='black'
                    size={20}
                    style={{
                        transform: openSections[item.id] ? 'rotate(-180deg)' : 'rotate(0deg)'
                    }}
                    />
                </div>
            </div>
            {openSections[item.id] && 
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
                                    <p className='topics'>Skills Gained</p>
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
