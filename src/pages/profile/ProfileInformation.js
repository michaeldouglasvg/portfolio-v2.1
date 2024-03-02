import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import Experience from './components/Experience';

const ProfileInformation = ({ functionClose }) => {
  const [activateScreen, setActivateScreen] = useState("Experience");

  return (
    <div className='ProfilePage'>
      <div className="close"><FaTimes color='white' size={30} onClick={functionClose}/></div>
      <div className="ContentSection">

        <div className="topsection">
            <button className="btns" onClick={() => setActivateScreen("Experience")}>
                <span>Experience</span>
            </button>
            <button className="btns" onClick={() => setActivateScreen("Resume")}>
                <span>Resume/CV</span>
            </button>
            <button className="btns" onClick={() => setActivateScreen("Certificates")}>
                <span>Certificates</span>
            </button>
        </div>

        <div className="midcontent">
            {activateScreen === "Resume" && <div className="resumecontent">
                <p>Resume Loading...</p>
            </div>}
           {activateScreen === "Experience" && <div className="experiencecontent">
                <Experience />
            </div>}
            {activateScreen === "Certificates" && <div className="certifications">
                <p>Certificates Loading...</p>
            </div>}
        </div>
        <div className="footersection">
            <p>&copy;2020gtech || All rights reserved.</p>
            <p>Contacts: +254712176534</p>
        </div>
      </div>
    </div>
  )
}

export default ProfileInformation
