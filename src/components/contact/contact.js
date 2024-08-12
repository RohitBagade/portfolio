import React, {useRef} from 'react'
import emailjs from '@emailjs/browser';
import './contact.css'
import Walmart from '../../assets/walmart.png'
import Adobe from '../../assets/adobe.png'
import Microsoft from '../../assets/microsoft.png'
import Facebook from '../../assets/facebook.png'
import FacebookIcon from '../../assets/facebook-icon.png'
import TwitterIcon from '../../assets/twitter.png'
import YoutubeIcon from '../../assets/youtube.png'
import InstagramIcon from '../../assets/instagram.png'

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_gj1rkle', 'template_fhivvtd', form.current, 'j3_wZAOI5-qWNXK8Y')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert('Email Sent!')
          }, (error) => {
              console.log(error.text);
          });
      };

  return (
    <section id="contactPage">
        <div id="clients">
            <h1 className="contactPageTitle">My Clients</h1>
            <p className="clientDesc">
                I have Had the Opportunity to work with a diverse group of companies.
                Some of the notable companies I have worked with includes.
            </p>
            <div className="clientsImgs">
                <img src={Walmart} alt="Client" className="clientImg" />
                <img src={Adobe} alt="Client" className="clientImg" />
                <img src={Microsoft} alt="Client" className="clientImg" />
                <img src={Facebook} alt="Client" className="clientImg" />
            </div>
        </div>
        <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">
                Please fill out below form to discuss any work opportunities.
            </span>
            <form action="" className="contactForm" ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder='Your Name' name="your_name"/>
                <input type="text" className="email" placeholder='Your Email ID' name="your_email"/>
                <textarea name="message" rows="5" className='msg' placeholder='Your Message' />
                <button type="submit" value='Send' className="submitBtn">Submit</button>
                <div className="links">
                    <img src={FacebookIcon} alt="Facebook" className="link" />
                    <img src={TwitterIcon} alt="Twitter" className="link" />
                    <img src={YoutubeIcon} alt="Youtube" className="link" />
                    <img src={InstagramIcon} alt="Instagram" className="link" />
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact