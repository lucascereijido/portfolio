import React from 'react'
import resume from '../../assets/resume/resume.pdf'; 
import about from '../../assets/about/about.jpeg'
export default function About() {
    return (<div className="content">
        <div className="about">
            <img alt="profile" src={about}></img>
        <div className="about-text">
                <div>
                    Hi, I’m Lucas Cereijido. I’m a visual designer, illustrator and animator.
                    I recently graduated from Wesleyan University with a BA in Studio Art and
                    a concentration in Graphic Design. 
                </div>
                
                <div>
                    I’ve always been fascinated with visual
                    culture. My unique perspective, informed as much by my experience as a first-generation
                    American as it is by my SoCal upbringing, compels me to produce work that communicates
                    with, investigates and challenges visual norms. 
                </div>
                <div>
                    As a designer, I hope to use this
                    perspective as well as my broad technical background to create culturally cognizant
                    work that clearly and elegantly communicates ideas.
                </div>
                <div>
                    Download resume <a className="resume-download" href={resume} target="_blank" rel="noreferrer">here</a>
                </div>
        </div>
           
        </div>
       
    </div>)
}