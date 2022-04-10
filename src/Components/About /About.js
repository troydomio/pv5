import React from "react";
import './About.css'

const About = () => {
    return(
        <div className="aboutcontainer">
            <div className="aboutcard">
            <div className="underlay"></div>
            <div className="overlay">
                <img  className="overlayimage" src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"></img>
                <p className="overlaytext">Troy Domio</p>
                <div>〰️</div>
                <p className="overlayskills">I work with: <span></span></p>
            </div>
            <div className="social">
                <img src='https://www.shareicon.net/data/512x512/2016/07/13/606885_linkedin_2048x2048.png'/>
                <img src='https://pngimg.com/uploads/github/github_PNG58.png'/>
                <img src='https://cdn-icons-png.flaticon.com/512/48/48975.png'/>
                
            </div>
            </div>
            <div className="abouttext">
                <p className="howdy">Howdy</p>
                <p className="aboutdesc">I'm Troy, a former teacher turned software engineer currently focused on building (as well as designing) seamless, human-centered experiences and interactions for the web! </p>
                <div className="aboutbuttons">
                    <div><a href="/resume">↦ Resume</a></div>
                    <div><a href="/projects">↦ Projects</a></div>
                </div>
            </div>
        </div>
    )
}

export default About;