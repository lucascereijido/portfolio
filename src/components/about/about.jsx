import React from 'react'
import resume from '../../assets/resume/resume.pdf'
export default function About() {
    return (<div className="about">
        Download resume <a href={resume} target="_blank" rel="noreferrer">here</a>
    </div>)
}