import React, { useState } from 'react'; 
import {Link} from 'react-router-dom'; 

export default function Header(props) {
    const [exposed, setExposed] = useState(false); 
    let content
    if(exposed){
        content = <div className="header">
            <div className='hidden-menu'>
                <div className="name" >ABOUT</div>
                 <div className="name" >WORK</div>
            </div>
            <div className="menu-click" onClick={() => setExposed(!exposed)}>MENU</div>
            <Link classname="name" to="/">Lucas Cerijido</Link>
        </div>
    } else{
        content = <div className="header">
            <div className="menu-click" onClick={() => setExposed(!exposed)}>MENU</div>
            <Link classname="name" to="/">Lucas Cerijido</Link>
        </div>
    }

    return (
        content
    )
}