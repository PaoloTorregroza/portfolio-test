import React from 'react';
import Skill from '../skillcard/Skill';
import '../../styles/skills.scss';
import Vue from '../../assets/vue.png';
import ReactImage from '../../assets/react.png';
import Golang from '../../assets/golang.png';

class Skills extends React.Component {
    render() {
        return (
            <div className="skillsContainer">
                <Skill image={Vue} title="Vuejs" text="I know how to #$%##+&% whit Vuejs"/>
                <Skill image={ReactImage} title="Reactjs" text="I know how to #$%##+&% whit React"/>
                <Skill image={Golang} title="Golang" text="I know how to #$%##+&% whit golang"/>
            </div>
        );
    }
}

export default Skills;