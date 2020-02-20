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
                    <p>I'm an engineering student at the university of cundinamarca (Colombia), self learner and software development lover. </p>
                    <h2>What I do?</h2>
                    <p>
                    In my toolbox you can find variety of skills, from frontend (react and vue), backend (Go, Node, Python), maths and general software development skills.
                    </p>
                    <h2>My studies</h2>
                    <p>
                       My more remarkable knowledges are obtained from  Platzi.com and my constant learning, but not for that I deprecate the teoric and academic knowledge aquired from the university
                    </p>
                    <h2>My interests</h2>
                    <p>
                    I'm interested in full stack software development and Machine learning. I really like the open source and I think the more valuable thing in a company at the time of select a job is it's philosophy
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