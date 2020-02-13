import React from 'react';
import '../../styles/contact.scss'
import Twitter from '../../assets/twitter.png';
import Github from '../../assets/github.png';
import Linkedin from '../../assets/linkedin.png';

class Contact extends React.Component {
    render() {
        return (
            <div className="imgContainer">
                <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/TorregrozaPaolo"><img id="twitter" src={Twitter} alt="@TorregrozaPaolo"/></a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/PaoloTorregroza"><img id="github" src={Github} alt="PaoloTorregroza"/></a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/paolo-donato-torregrosa-navarro-61947a191/"><img id="linkedin" src={Linkedin} alt="Paolo Torregrosa"/></a>
            </div>
        );
    }
}

export default Contact;