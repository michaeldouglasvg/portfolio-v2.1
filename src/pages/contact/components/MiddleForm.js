import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const MiddleForm = () => {
    const[onsubmit, setOnsubmit] = useState(false);
    useEffect(() => {
        AOS.init();
    })

  return (
    <section>
     <div className="top-message" data-aos="zoom-out-up">
     <p>Welcome to my portfolio! Stay connected by reaching out through the contact form. Share your thoughts, inquiries, or collaboration ideas with ease. Your message is valuable, and I'm here to listen.</p>
     </div>
     <div className="form">
        <form name="contact" netlify>
            <div className="headings"><h3>Enter valid information *</h3></div>
            <div className="groups">
                <div className="form-group">
                    <span>Your Full Name</span>
                    <input type='text' placeholder='Eg: Michael Douglas' name='name'/>
                </div>
                <div className="form-group">
                    <span>Email Address</span>
                    <input type='text' placeholder='Eg: gtechmb27.infinity@gmail.com' name='email'/>
                </div>
            </div>
            <div className="form-group">
                <span>Subject</span>
                <input type='text' placeholder='Eg: Requesting for...' name='subject'/>
            </div>
            <div className="form-group">
                <span>Your message</span>
                <textarea placeholder='Eg: Is there a possibility we can merge out thoughts and work on....(Must be below 200words)' name='message'/>
            </div>
            <div className="form-group">
                <button onClick={() => setOnsubmit()} type="submit" style={{cursor: onsubmit?"pointer":"not-allowed"}} disabled={!onsubmit}>Send Message</button>
            </div>
        </form>
     </div>
     <div className="notice">
        <p><span>Note:&nbsp;</span>To send the message you must fill all the infomation to enable the submit button.</p>
     </div>
    </section>
  )
}

export default MiddleForm
