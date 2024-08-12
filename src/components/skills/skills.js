import React from 'react'
import './skills.css'
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'


const Skills = () => {
  return (
    <section id="skills">
        <span className="skillTitle">What I Do</span>
        <span className="skillDesc">
        I'm an Experienced Software Developer Who has Hands-on working Experience on JAVA with tomcat and jboss server,
        <br />Pro*C, PL-SQL Languages and Softwares such as Gitlab, Jira, Beatle, SVN, Eclipse, VS-Code, Docker. Other
        <br />than this I do have few more skills Up My Sleeves Such as React, JavaScript, HTML, CSS.</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={UIDesign} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Front End Development</h2>
                    <p>A Frontend Developer with expertise in React, HTML, CSS, and JavaScript is highly capable of creating modern, interactive, and responsive web applications.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={WebDesign} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Backend Development</h2>
                    <p>A Backend Developer proficient in JavaScript, Node.js, MongoDB, MySQL, and Oracle is well-equipped to build and maintain robust, scalable, and secure server-side applications.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={AppDesign} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Java Development</h2>
                    <p>A Java Developer proficient in Java, Eclipse, and Data Structures and Algorithms is highly skilled in developing efficient and robust software solutions.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills