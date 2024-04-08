import React from 'react'
import "./client.css"

function Client() {
    return (
        <div>
            <section id='client'>
                <h2>My Clients</h2>
                <p className='detail'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus unde expedita facilis eius commodi</p>

                <div className="gallery">
                    <img src="https://cdn-icons-png.flaticon.com/128/3670/3670263.png" alt="" />
                    <img src="https://cdn-icons-png.flaticon.com/128/3665/3665280.png" alt="" />
                    <img src="https://cdn-icons-png.flaticon.com/128/3256/3256010.png" alt="" />
                    <img src="https://cdn-icons-png.flaticon.com/128/3291/3291669.png" alt="" />
                    <img src="https://cdn-icons-png.flaticon.com/128/3800/3800024.png" alt="" />
                    <img src="https://cdn-icons-png.flaticon.com/128/2504/2504929.png" alt="" />
                </div>

            </section>
        </div>
    )
}

export default Client
