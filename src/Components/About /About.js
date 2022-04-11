import React from "react";
import './About.css'

const About = () => {
    return(
        <div className="aboutcontainer">
            <div className="aboutcard">
            <div className="underlay"></div>
            <div className="overlay">
            <iframe src="https://giphy.com/embed/l46CCnESyYqtXKsyQ" width="480" height="480" className="overlayimage" frameBorder="0"  allowFullScreen></iframe>
                <p className="overlaytext">Troy Domio</p>
                <div>〰️</div>
                <p className="overlayskills">I work with: <span></span></p>
            </div>
            <div className="social">
                <a href="https://www.linkedin.com/in/troydomio/" target="_blank"><img src='https://www.shareicon.net/data/512x512/2016/07/13/606885_linkedin_2048x2048.png'/></a>
                <a href="https://github.com/troydomio" target="_blank"><img src='https://pngimg.com/uploads/github/github_PNG58.png'/></a>
                <a href="https://www.behance.net/troydomio" target="_blank"><img src='https://cdn-icons-png.flaticon.com/512/48/48975.png'/></a>
                
            </div>
            </div>
            <div className="abouttext">
                <p className="howdy">Howdy</p>
                <p className="aboutdesc">I'm Troy, a former teacher turned software engineer currently focused on building (as well as designing) seamless, human-centered experiences and interactions for the web! </p>
                <div className="aboutbuttons">
                    <div><a href="https://drive.google.com/file/d/1JF9371StD-sTLO5nITatQB1agGYqiLH0/view?usp=sharing" target='_blank'>↦ Resume</a></div>
                    <div><a href="/projects">↦ Projects</a></div>
                </div>
            </div>
        </div>
    )
}

export default About;