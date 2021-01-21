import React from 'react'
import Image from './image'

export default function Work(props) {
    return (
        <div className="content">

            <div className="column">
                <Image caption="2D ANIMATION"></Image>
                <Image caption="CRADLE TO GRAVE"></Image>
                <Image caption="FRANKENSTEIN"></Image>
            </div>
            <div className="column">
                <Image caption="CONSPIRACY"></Image>
                <Image caption="ABSALON VISUAL IDENTITY"></Image>
                <Image caption="ILLUSTRATION"></Image>
            </div>
            <div className='mobile-row-alignment'>
                <div className='mobile-row'>
                    <Image caption="2D ANIMATION"></Image>
                    <Image caption="CRADLE TO GRAVE"></Image>
                </div>
                <div className='mobile-row'>
                    <Image caption="FRANKENSTEIN"></Image>
                    <Image caption="CONSPIRACY"></Image>
                </div>
                <div className='mobile-row'>
                    <Image caption="ABSALON VISUAL IDENTITY"></Image>
                    <Image caption="ILLUSTRATION"></Image>
                </div>

            </div>
            
           
        </div>

    )
}