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
                <Skill image={Vue} title="Vuejs" text="Whit VueJs I started my front-end learning, one of my projects is purely made whit VueJs and Sass"/>
                <Skill image={ReactImage} title="Reactjs" text="The powerful front-end javascript framework, This website is built with this technology"/>
                <Skill image={Golang} title="Golang" text="One of my favorites languages, Whit golang I started my backend learning, so, I know how to build APIs"/>
                <Skill image={Golang} title="Golang" text="One of my favorites languages, Whit golang I started my backend learning, so, I know how to build APIs"/>
                <Skill image={Golang} title="Golang" text="One of my favorites languages, Whit golang I started my backend learning, so, I know how to build APIs"/>
            </div>
        );
    }
}

export default Skills;