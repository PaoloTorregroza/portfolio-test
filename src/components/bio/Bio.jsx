import React from 'react';
import MyFace from '../../assets/Paolo.jpg'
import '../../styles/bio.scss';

class Bio extends React.Component {
    render() {
        return (
            <div className="aboutContainer">
                <img src={MyFace} alt="" />
                <div className="content">
                    <h2>Who I am?</h2>
                    <p>Self learner, software developer, systems engineer... At the end, I'm a programmer. In my academic life I get some great achievements, like the Andrés Bello recognition, awarded to the best results at the national level of the Colombian standardized tests. What somehow lives up to my 138 certified IQ</p>
                    <h2>What I do?</h2>
                    <p>
                        (For the great part of the technologies mentioned here I have a certificate on my LinkedIn) I'm not afraid of learning new things, ¡I love learn new things! In my toolbox you can find: Backend (Golang, Node/express and python), front-end (Html, css/sass javascript, VueJs and ReactJs), programming languages, C# (For unity 3d), GdScript (For Godot game engine), C++, Java, JavaScript and SQL, and don't forget databases (MySql and PostgreSQL).
                    <br /><br />To end this paragraph I want to highlight my mathematical skills for AI and my current training in machine learning.
                    </p>
                    <h2>My studies</h2>
                    <p>
                        My best master is Platzi and the internet, not only for technical skills, but also for soft skills. There I get a lot of technical and practical knowledge, but I'dont despite the university, which in my case is the University of Cundinamarca where I am currently studying systems engineering. where I get strong mathematical, physical and electronic fundamentals (My certificates can be found on LinkedIn)
                    </p>
                    <h2>Contact me</h2>
                    <p>Email: paolinskypdtn@outlook.com Twitter: <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/TorregrozaPaolo">@TorregrozaPaolo </a>,
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/paolo-donato-torregrosa-navarro-61947a191/"> LinkedIn</a> and <a target="_blank" rel="noopener noreferrer" href="https://github.com/PaoloTorregroza">Github</a></p>
                </div>
            </div>
        );
    }
}

export default Bio;