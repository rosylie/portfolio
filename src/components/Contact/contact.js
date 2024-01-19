import React, { useRef } from 'react';
import './contact.css';
import brand1 from '../../assets/brand1.png';
import brand2 from '../../assets/brand2.png';
import brand3 from '../../assets/brand3.png';
import brand4 from '../../assets/brand4.png';
import fbIcon from '../../assets/facebook-icon.png';
import igIcon from '../../assets/instagram.png';
import ytIcon from '../../assets/youtube.png';
import twIcon from '../../assets/twitter.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_5fanbyr', 'template_kuze25c', form.current, 'iejpKZ9IgA-8YyxZ6')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                alert('Email send');
            }, (error) => {
                console.log(error.text);
        });
    };

    return (
    <section id="contactPage">
        <div id="clients">
            <h1 className="contactPageTitle">My Clients</h1>
            <p className="clientDesc">
                I have had the oppurtunity to work with a diverse group of companies. Some of the notable companies I have worked with includes
            </p>
            <div className="clientImgs">
                <img src={brand1} alt="client" className="clientImg" />
                <img src={brand2} alt="client" className="clientImg" />
                <img src={brand3} alt="client" className="clientImg" />
                <img src={brand4} alt="client" className="clientImg" />
            </div>
        </div>
        <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">
                I design and build captivating online experiences to amplify your business success. 
            </span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder='Your Name' name='your_name'/>
                <input type="text" className="email" placeholder='Your Email' name='your_email'/>
                <textarea className='msg' name="message" rows="5" placeholder='Your Message'></textarea>
                <button type='submit' value='Send' className="submitBtn">Submit</button>
                <div className="links">
                    <img src={fbIcon} alt="Facebook" className="link" />
                    <img src={igIcon} alt="Instagram" className="link" />
                    <img src={ytIcon} alt="Youtube" className="link" />
                    <img src={twIcon} alt="Twitter" className="link" />
                </div>
            </form>
        </div>
    </section>
    )
}

export default Contact