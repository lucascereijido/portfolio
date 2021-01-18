import React from 'react'; 
import {Link} from 'react-router-dom'; 

export default function ComputerHeader() {

    return (
          <div className='computer-menu'>
            <Link className='name' to="/">Lucas Cerijido</Link> 
            <div className='computer-links'>
                <div class="dropdown">
                    <button class="dropbtn">WORK</button>
                    <div class="dropdown-content">
                        <Link to='/animation'>2D ANIMATION</Link>
                        <Link to='/cradle'>CRADLE TO GRAVE</Link>
                        <Link to='/frankenstein'>FRANKENSTEIN</Link>
                        <Link to='/conspiracy'>CONSPIRACY</Link>
                        <Link to='absalon'>ABSALON VISUAL IDENTITY</Link>
                        <Link to='illustration'>ILLUSTRATION</Link>
                    </div>
                </div>
                <Link className='name' to="/about">ABOUT</Link> 
            </div> 
        </div >
    )
}