import React from 'react'; 
import cradle from '../../assets/gif/cradle.gif'; 
import conspiracy from '../../assets/gif/conspiracy.gif'; 
import frankenstein from '../../assets/gif/frankenstein.gif'; 
import illustration from '../../assets/gif/illustration.gif'; 
import absalon from '../../assets/gif/absalon.gif'; 
import animation from '../../assets/gif/animation.gif'; 
export default function Icon(props){
    
    let gifs = {
        "CONSPIRACY": conspiracy, 
        "CRADLE TO GRAVE": cradle, 
        "FRANKENSTEIN": frankenstein, 
        "ILLUSTRATION": illustration,
        "ABSALON VISUAL IDENTITY": absalon, 
        "2D ANIMATION": animation 
    }
    return(
    <div className="image-wrapper">
        <img alt="hello" src={gifs[props.caption]}></img>
        <div className='caption'>{props.caption}</div>
    </div>
    
    )
}