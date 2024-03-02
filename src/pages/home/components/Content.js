import React, { useEffect, useState } from 'react'
import { images } from "../../../constants/AssetsFile"
import Typed from 'typed.js';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useSweetAlert } from '../../../context/alerts/Sweetalert';
import ProfileInformation from '../../profile/ProfileInformation';

const Content = () => {
  const {toastAlert} = useSweetAlert();
  const [openProfile, setOpenProfile] = useState(false);
  const closeProfile = () => setOpenProfile(false)

  const alertMessage = (name) => {
    if(name === "me") {
      setOpenProfile(true);
      // toastAlert("top-end", "info", "About me content is being uploaded, wait while am updating the site")
    }else if(name === "hire") {
      toastAlert("top-end", "success", "Am available to work use contact form or reach out to me through email.")
    }else{
      return false;
    }
  }

  useEffect(() => {
    AOS.init();
    const options = {
      strings: ['Web Development.', 'UI/UX Designer.', 'Data Science.', 'App Develoment.', 'Machine Learning.'],
      typeSpeed: 50,
      loop: true,
      cursorChar: "|",
      cursorBlinking: true,
      startDelay: 1000,
      backDelay: 1000,
    };
    const typedElement = document.querySelector('.element');
    const typed = new Typed(typedElement, options);
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className='content-section'>
      <article className="left">
        <div className="image"><img src={images.contact} alt="" width={200} data-aos="zoom-out-up"/></div>
      </article>
      <article className="middle">
        <div className="heading" data-aos="zoom-out-up"><h1>Hi,</h1> <h2>I'm Michael Douglas,</h2></div>
        <div className="skill-sets" data-aos="zoom-out-up"><p>Passionate:</p> &nbsp; <span className='element'></span></div>
        <div className="description" data-aos="zoom-out-up"><p>Passionate about crafting innovative solutions through web and app development, I delve into the realms of Machine Learning and Data Science to drive meaningful insights and create impactful experiences. With a fervent dedication to technology, I strive to push boundaries and make a difference.</p></div>
        <div className="buttons">
            <button onClick={() => alertMessage("hire")}>Hire&nbsp;me</button>
            <button onClick={() => alertMessage("me")}>Who&nbsp;I&nbsp;am</button>
        </div>
      </article>
      <article className="right">
        <img src={images.portraitone} alt="" width={200} data-aos="zoom-out-up"/>
      </article>
      {openProfile && <ProfileInformation functionClose={closeProfile}/>}
    </section>
  )
}
export default Content
