import React from 'react';
import './intro.css';
import bg from '../../assets/profile2.jpeg'
import btnImg from '../../assets/hireme.png'
import { Link } from 'react-scroll';


const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Lily</span><br />Website Designer</span>
                <p className="introParag"> I am enthusiastic about diving into the world of coding and design, <br /> eager to create impactful and user-friendly digital experiences.</p>
                <Link to='#'><button className="btn"><img src={btnImg} alt="Hire me" className='btnImg'/>Hire Me</button></Link>
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    );
}

export default Intro;
