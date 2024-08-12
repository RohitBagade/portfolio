import React from 'react'
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from'../../assets/hireme.png';
import {Link} from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className='hello'>Hello</span>
            <spam className="introText">I'm <span className="introName">Rohit</span><br />Software Developer</spam>
            <p className="introPara">I seek a backend developer role with a prestigious organization to leverage and
            <br />enhance my skills while contributing to high-impact projects and advancing my career.
            <br />I'm a Skilled and Passionate Programmer with a Experience of Professional Development,
            <br />Unit Testing & Debugging from My Previous Company
            <br /><spam className="companyName">Accelya – The Airline's Most Prefered Software Platform</spam></p>
            <Link><button className="btn"><img src={btnImg} alt="Hire Me" className='btnImg'/>Hire Me</button></Link>
        </div>
        <img src={bg} alt="profile" className="bg" />
    </section>
  )
}

export default Intro
