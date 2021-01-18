import React from 'react'; 
import {Link} from 'react-router-dom'; 

export default function ComputerHeader() {

    return (
          <div className='computer-menu'>
            <Link className='name' to="/">Lucas Cerijido</Link> 
            <div className='computer-links'>
                <a className="name" >WORK</a>
                <a className="name" >ABOUT</a>
            </div> 
        </div >
    )
}