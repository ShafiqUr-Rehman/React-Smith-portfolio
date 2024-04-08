import React from 'react'
import { IoBagRemove } from "react-icons/io5";
import './hero.css'

function hero() {
    return (
        <div>
            <section id='hero' className="hero">
                <h3>hello</h3>
                <h1>I'm <span>Smith</span> <br /> Website Designer</h1>
                <p>Experienced web developer proficient in HTML, CSS, JavaScript, and React. Skilled in creating responsive and dynamic websites. Passionate about clean code and user-centric design.</p>
                <button className="btn"><IoBagRemove className='icon' /><h6>Hire me</h6></button>
            </section>
        </div>
    )
}

export default hero
