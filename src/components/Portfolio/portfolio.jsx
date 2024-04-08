import React from 'react'
import "./portfolio.css"

function Portfolio() {
    return (
        <div>
            <section id='portfolio'>
                <h2>My Portfolio</h2>
                <p className='detail'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus unde expedita facilis eius commodi velit magni perferendis. Eveniet eos officiis voluptate voluptatem quasi labore autem sunt modi mollitia error! Sequi, necessitatibus sed magnam earum neque officiis. Quasi aperiam culpa at! Quaerat inventore rerum illum veniam.</p>

                <div className="potfolio-gallery">
                    <img src="https://img.freepik.com/free-vector/ui-ux-designers-isometric-composition-with-small-people-creating-custom-design-web-site-3d-vector-illustration_1284-68939.jpg?size=626&ext=jpg&ga=GA1.1.606099105.1704345729&semt=ais" alt="" />
                    <img src="https://img.freepik.com/free-vector/new-app-development-desktop_23-2148684987.jpg?size=626&ext=jpg&ga=GA1.1.606099105.1704345729&semt=ais" alt="" />
                    <img src="https://img.freepik.com/premium-vector/website-design-building-website-working-layout_113065-54.jpg?size=626&ext=jpg&ga=GA1.1.606099105.1704345729&semt=ais" alt="" />
                    <img src="https://img.freepik.com/premium-vector/ui-designer-illustration-concept-white-background_701961-1261.jpg?size=626&ext=jpg&ga=GA1.1.606099105.1704345729&semt=ais" alt="" />
                    <img src="https://img.freepik.com/free-vector/software-development-team-abstract-concept-illustration_335657-2235.jpg?size=626&ext=jpg&ga=GA1.1.606099105.1704345729&semt=ais" alt="" />
                    <img src="https://img.freepik.com/free-vector/user-interface-development-isometric-concept-with-young-woman-creating-custom-design-mobile-application-vector-illustration_1284-72341.jpg?size=626&ext=jpg&ga=GA1.1.606099105.1704345729&semt=ais" alt="" />
                </div>

                <div className="btn">See More</div>
            </section>
        </div>
    )
}

export default Portfolio
