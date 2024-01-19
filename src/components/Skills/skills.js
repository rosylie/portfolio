import React from 'react';
import './skills.css';
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import js from '../../assets/js.png';
import react from '../../assets/react.png';
import nodejs from '../../assets/nodejs.png';

const Skills = () => {
    return (
        <section id="skills">
            <span className="skillTitle">What I do</span> 
            <span className="skillDesc">As a web developer, I thrive at the intersection of creativity and technology, weaving code into captivating digital experiences. With a passion for translating ideas into functional and visually appealing websites, I embrace the dynamic challenges of the ever-evolving web landscape. Armed with expertise in HTML, CSS, and JavaScript, I specialize in crafting seamless user interfaces and optimizing performance. My commitment to staying abreast of emerging technologies and dedication to clean, efficient code reflect my aspiration to contribute innovative solutions to the digital realm. Let's embark on a journey of turning visions into interactive realities.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={html} alt="html" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>HTML 5</h2>
                        <p>Proficient in using HTML5, the latest version of Hypertext Markup Language, to structure and organize content on web pages.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={css} alt="css" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>CSS</h2>
                        <p>Skilled in CSS3, the styling language, to enhance the visual presentation of web pages and create engaging user interfaces.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={js} alt="js" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Javascript</h2>
                        <p>SExperienced in JavaScript, a versatile programming language, for implementing dynamic and interactive features on websites</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={react} alt="react" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>React JS</h2>
                        <p>dept at using React, a JavaScript library, to efficiently build modular and interactive user interfaces for web applications.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={nodejs} alt="nodejs" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Node JS</h2>
                        <p>Knowledgeable in using Node.js to build scalable and server-side applications using JavaScript.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills