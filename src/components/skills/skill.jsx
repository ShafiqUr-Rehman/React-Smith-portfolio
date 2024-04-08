import React from 'react'
import "./skill.css"

function Skill() {
    return (
        <div>
            <section id='skills'>
                <h2>What I Do</h2>
                <p className='detail'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus unde expedita facilis eius commodi velit magni perferendis. Eveniet eos officiis voluptate voluptatem quasi labore autem sunt modi mollitia error! Sequi, necessitatibus sed magnam earum neque officiis. Quasi aperiam culpa at! Quaerat inventore rerum illum veniam.</p>

                <div className="card-container">
                    <div className="card">
                        <div>
                            <img src="https://cdn-icons-png.flaticon.com/128/3308/3308315.png" alt="UI Design" />
                        </div>
                        <div className='cardInfo'>
                            <h3>UI/UX Design</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div>
                            <img src="https://cdn-icons-png.flaticon.com/128/922/922699.png" alt="UI Design" />
                        </div>
                        <div className='cardInfo'>
                            <h3>Web Design</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div>
                            <img src="https://cdn-icons-png.flaticon.com/128/3437/3437364.png" alt="UI Design" />
                        </div>
                        <div className='cardInfo'>
                            <h3>App Design</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Skill
