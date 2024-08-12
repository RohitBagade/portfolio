import React from 'react'
import './works.css'
import Portfolio1 from '../../assets/portfolio-1.png'
import Portfolio2 from '../../assets/portfolio-2.png'
import Portfolio3 from '../../assets/portfolio-3.png'
import Portfolio4 from '../../assets/portfolio-4.png'
import Portfolio5 from '../../assets/portfolio-5.png'
import Portfolio6 from '../../assets/portfolio-6.png'

const Works = () => {
  return (
    <section id="works">
        <h2 className="worksTitle">My PortFolio</h2>
        <span className="worksDesc">I take Pride in Paying Attention to the Smallest Details and Making Sure that My Work is Pixel Perfect. I'm Excited to Bring My Skills and Experience to Help Business Achieve their Goals and Create a Strong Online Presence.</span>
        {/* <div className="worksImgs">
            <img src={Portfolio2} alt="Portfolio" className="worksImg" />
            <img src={Portfolio1} alt="Portfolio" className="worksImg" />
            <img src={Portfolio3} alt="Portfolio" className="worksImg" />
            <img src={Portfolio4} alt="Portfolio" className="worksImg" />
            <img src={Portfolio5} alt="Portfolio" className="worksImg" />
            <img src={Portfolio6} alt="Portfolio" className="worksImg" />
        </div> */}
        <div className="worklist">
          <div className="listitem">
            <h1><a href='https://drive.google.com/file/d/1L9xBEgCNaiApWfvG4aF-pu5YeNcikGn0/view'>NUTRICHAT - AN AUTOMATED DIET CHATBOT</a></h1>
            <span className="worksDes">Tools : JavaScript,HTML,CSS,PHP,XAMPPCP,SQL
              <br/>with this Project, I was Aiming to Solve the problem of Nutritionist Influencers. Nowadays because of Social media Influencers gets a lot of Leads (Customer).
To Handle them this Chatbot was Created, Client can get his/her diet Chart by Interacting with the Bot.
To make it User Friendly, I have made an Interface Inspired by Messengers.
interacting with the Bot, one can get his/her diet Chart for one Week. you can make e new Chart every week Or try one chart for a month to get the Desired results which is also recommended.</span>
          </div>

          <div className="listitem">
            <h1><a href='https://netflix-clone-4c27d.web.app/'>NETFLIX CLONE</a></h1>
            <span className="worksDes"> Tools : React JS, TMDB API, react-youtube & movie-trailer Modules, Firebase
 <br/>Made Frontend of Netflix website using react js, TMDB API. getting all the
 Data from TMDB API and putting it on my cloned Netflix</span>
          </div>

          <div className="listitem">
            <h1><a href='https://drive.google.com/file/d/1FABqJnrd-vzUNQ6HPWwUvCQJKliKad-j/view'>ECOMMERCE WEBSITE</a></h1>
            <span className="worksDes">Tools : React, Node, Express, Strapi, Postgres, Stripe, Vercel, Render
            <br />ECom full-stack Website to sell Headphones & earbuds. It's a fully
              functioning site with a stripe payment Integration. User-friendly UI for
              Android and Desktop users.</span>
          </div>

          <div className="listitem">
            <h1><a href='https://my-portfolio-9f0b1.web.app/'>PORTFOLIO</a></h1>
            <span className="worksDes"> Tools : React.js, Node, email.js, firebase
 <br/>I have Built this Project using Node, React and email.js for Contact
 purposes. For Deployment, I have Used Firebase. I have Mentioned All My
 Small Projects, Click on Link for Checkout.</span>
          </div>

          <div className="listitem">
            <h1>TIC-TAC-TOE</h1>
            <span className="worksDes">Tools : Java, Eclipse
            <br/>Its a Two player Tic Tac Toe game which runs on Console.</span>
          </div>
        </div>
        <button className="workBtn">See More</button>
    </section>
  )
}

export default Works