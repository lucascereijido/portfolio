import React, { useState } from 'react'; 
import {Link} from 'react-router-dom'; 

export default function Header(props) {
    const [exposed, setExposed] = useState(false); 
    let content
    if(exposed){
        content = <div className="header">
            <div className='hidden-menu'>
                <Link classname="menu-click" to="/about">ABOUT</Link> 
            </div>
            <div className="menu-click" onClick={() => setExposed(!exposed)}>MENU</div>
            <Link classname="name" to="/">LUCAS CEREIJIDO</Link>
        </div>
    } else{
        content = <div className="header">
            <div className="menu-click" onClick={() => setExposed(!exposed)}>MENU</div>
            <Link classname="name" to="/">LUCAS CEREIJIDO</Link>
        </div>
    }

    return (
        content
    )
}