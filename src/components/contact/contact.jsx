import React from 'react'
import "./contact.css"

function Contact() {
    return (
        <div>
            <section id='contact'>
                <h2>Contact Me</h2>
                <p className='detail'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus unde expedita facilis eius commodi velit magni perferendis. Eveniet eos </p>

                <form action="">
                    <input type="text" placeholder='Your Name' />
                    <input type="email" placeholder='Your Email' />
                    <textarea name="" placeholder='Your Message' id="" cols="30" rows="10"></textarea>
                </form>

                <div className="btn">Send Message</div>

                <div className="social-icons">
                    <img src="https://cdn-icons-png.flaticon.com/128/733/733585.png" alt="" />
                    <img src="https://cdn-icons-png.flaticon.com/128/4138/4138124.png" alt="" />
                    <img src="https://cdn-icons-png.flaticon.com/128/4494/4494497.png" alt="" />
                    <img src="https://cdn-icons-png.flaticon.com/128/2626/2626269.png" alt="" />
                </div>
                
            </section>
        </div>
    )
}

export default Contact
