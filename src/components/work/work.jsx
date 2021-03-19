import React from 'react'
import Image from './image'
import cradle from '../../assets/gif/cradle.gif';
import absalon from '../../assets/gif/absalon.gif';
export default function Work(props) {
    return (
        <div className="content">

            <div id="illistration" className="square">
                <div className="square-content">
                    <div className="table">
                        <div className="table-cell">
                            <Image caption="FLAMES OF MY HOMELAND"></Image>
                        </div>
                    </div>
                </div>
            </div>

            <div className="square">
                <div className="square-content">
                    <div className="table">
                        <div className="table-cell">
                            <Image caption="2D ANIMATION"></Image>

                        </div>
                    </div>
                </div>
            </div>
            <div className="square">
                <div className="square-content">
                    <div className="table">
                        <div className="table-cell">
                            <Image caption="CRADLE TO GRAVE"></Image>

                        </div>
                    </div>
                </div>
            </div>
            <div className="square">
                <div className="square-content">
                    <div className="table">
                        <div className="table-cell">
                            <Image caption="FRANKENSTEIN"></Image>
                        </div>
                    </div>
                </div>
            </div>

            <div className="square">
                <div className="square-content">
                    <div className="table">
                        <div className="table-cell">
                            <Image caption="CONSPIRACY"></Image>
                        </div>
                    </div>
                </div>
            </div>
            <div className="square">
                <div className="square-content">
                    <div className="table">
                        <div className="table-cell">
                            <Image caption="ABSALON VISUAL IDENTITY"></Image>
                        </div>
                    </div>
                </div>
            </div>
           
            <div id="illistration" className="square">
                <div className="square-content">
                    <div className="table">
                        <div className="table-cell">

                        </div>
                    </div>
                </div>
            </div>
             <div id="illistration" className="square">
                <div className="square-content">
                    <div className="table">
                        <div className="table-cell">
                            <Image caption="ILLUSTRATION"></Image>
                        </div>
                    </div>
                </div>
            </div>
           

            <div className="small-square">

            </div>

            {/* <div className="column">
                <div className="square">
                    <div></div>
                </div>
                <Image caption="2D ANIMATION"></Image>
                <Image caption="CRADLE TO GRAVE"></Image>
                <Image caption="FRANKENSTEIN"></Image>
            </div>
            <div className="column">
                <Image caption="CONSPIRACY"></Image>
                <Image caption="ABSALON VISUAL IDENTITY"></Image>
                <Image caption="ILLUSTRATION"></Image>
            </div> */}
            <div className='mobile-row-alignment'>
                <div className='mobile-row'>
                     <Image caption="FLAMES OF MY HOMELAND"></Image>
                    <Image caption="2D ANIMATION"></Image>
                    
                </div>
                <div className='mobile-row'>
                    <Image caption="CRADLE TO GRAVE"></Image>
                    <Image caption="FRANKENSTEIN"></Image>
                    
                </div>
                <div className='mobile-row'>
                    <Image caption="CONSPIRACY"></Image>
                    <Image caption="ABSALON VISUAL IDENTITY"></Image>
                    
                </div>
                <div className='mobile-row-center'>
                    <Image caption="ILLUSTRATION"></Image>
                </div>

            </div>


        </div>

    )
}