import React from 'react'
import navLogo from '../images/troll-face.png'

export default function Header(){
    return (
        <nav>
            <img src={navLogo} className="nav--icon"/>
            <h3 className="nav--logo_text white">Meme Generator</h3>
            <h4 className="nav--title white">React Course - Project 3</h4> 
        </nav>
    )
}