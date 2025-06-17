import React from 'react'
import "./About.css";
import Header from "./../Header/Header.jsx"
import Footer from "./../Footer/Footer.jsx"
import aboutVector from "./../../assets/about_vector.png";
import aboutAnime from "./../../assets/Web Address registration.gif";
function About() {
  return (
    <div className='section-container'>
      <Header
        heading="About Me"
        subHeading="Mern Full Stack Engineer">
      </Header>
      <div className='about-main'>
        <div className='about-main-left'>
          <h3 className='about-sub-heading'>Developer</h3>
          <p className='about-sub-heading-details'>
            I’m a passionate <u>MERN full-stack developer</u> with expertise in building dynamic, responsive, and user-friendly web applications. With a strong foundation in MongoDB, Express.js, React, and Node.js, I specialize in creating seamless end-to-end solutions. Problem-solving is at the core of my development approach, and I take pride in analyzing challenges, designing efficient solutions, and delivering high-quality results. Whether it's designing a robust backend, crafting intuitive frontend interfaces, or integrating APIs, I bring a creative and methodical mindset to every project. My portfolio showcases my ability to turn ideas into functional applications, highlighting my commitment to excellence and innovation in web development
          </p>
          {/* <h3 className='about-sub-heading'>Blogger</h3> */}
          {/* <p className='about-sub-heading-details'>
              I've been writing blogs from around 3 years now, i used to write on Quora then i moved to hashnode now. you can read my articles <a href="https://anandbaraik.hashnode.dev/" target="_blank" rel="noreferrer">here!</a>
            </p> */}
        </div>
        <div className='about-main-right'>
          <img
            src={aboutAnime}
            alt="about-anime"
            className="about-anime"
            loading="lazy"
          />
        </div>
      </div>
      <Footer
        phrase="Check out my "
        link="projects!"
        toAddress="/projects">
      </Footer>
      <div className='vector-frame'>
        <img src={aboutVector}
          alt="about"
          className='about-vector'
          loading="lazy"
        />
      </div>
    </div>
  )
}

export default About