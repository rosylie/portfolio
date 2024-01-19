import React from 'react';
import './works.css';
import Portf1 from '../../assets/portfolio-1.jpeg';
import Portf2 from '../../assets/portfolio-2.jpeg';
import Portf3 from '../../assets/portfolio-3.jpeg';
import Portf4 from '../../assets/portfolio-4.jpeg';
import Portf5 from '../../assets/portfolio-5.jpeg';
import Portf6 from '../../assets/portfolio-6.jpeg';

const Works = () => {
  return (
    <section id="works">
        <h2 className="worksTitle">My Portfolio</h2>
        <span className="worksDesc">As a web developer, responsible for designing, coding, and implementing visually appealing and intuitive web applications, ensuring seamless user experiences, and collaborating with cross-functional teams to deliver high-quality digital solutions.</span>
        <div className="worksImgs">
            <img src={Portf1} alt="portfolio-1" className="worksImg" />
            <img src={Portf2} alt="portfolio-2" className="worksImg" />
            <img src={Portf3} alt="portfolio-3" className="worksImg" />
            <img src={Portf4} alt="portfolio-4" className="worksImg" />
            <img src={Portf5} alt="portfolio-5" className="worksImg" />
            <img src={Portf6} alt="portfolio-6" className="worksImg" />
        </div>
        <button className="workBtn">See More</button>
    </section>
    )
}

export default Works
