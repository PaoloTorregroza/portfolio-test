import React from 'react';
import Skill from '../skillcard/Skill';
import '../../styles/skills.scss';
import Vue from '../../assets/vue.png';
import ReactImage from '../../assets/react.png';
import Golang from '../../assets/golang.png';
import Python from '../../assets/python.png';
import Node from '../../assets/node.svg';
import webDev from '../../assets/htmlcssjs.png';
import Sass from '../../assets/sass.png';
import Java from '../../assets/java.png';
import Cpp from '../../assets/c.png';
import Godot from '../../assets/godot.svg';
import Csharp from '../../assets/csharp.png';
import MathPower from '../../assets/math.png';
import Postgres from '../../assets/postgresql.webp';

class Skills extends React.Component {
    render() {
        return (
            <div className="skillsContainer">
                <h1>EN PROCESO :3 UwU</h1>
                <Skill image={Golang} title="Golang" text="I really love Golang, 
                It is and amazing language, with him I built some APIs with database 
                connection for university projects."/>
                <Skill image={Node} title="Node" text="I have little experience and 
                contact with this way of writing JS, But thanks to platzi.com 
                I know that node have a great documentation and comunity. Whit 
                node I implemented a CRUD while following a platzi course."/>
                <Skill image={Python} title="Python" text="Python is a programming 
                language that lets you work more quickly and integrate your 
                systems more effectively. I know how to use python with libraries 
                like Pygame (For game dev), flask (for backend) and the math 
                and plotting libraries"/>
                <Skill image={webDev} title="HTML/CSS/JS" text="HTML, CSS and JS 
                are the parts of all websites that users directly interact with."/>
                 <Skill image={ReactImage} title="Reactjs" text="React (also known 
                as React.js or ReactJS) is a JavaScript library[3] for building 
                user interfaces. It is maintained by Facebook and a community of 
                individual developers and companies."/>
                <Skill image={Vue} title="Vuejs" text="Vue is a progressive 
                framework for building user interfaces. Unlike other monolithic 
                frameworks, Vue is designed from the ground up to be incrementally 
                adoptable."/>  
                <Skill image={Postgres} title="PosttgreSQL" text="PostgreSQL is a 
                powerful, open source object-relational database system with 
                over 30 years of active development that has earned it a strong 
                reputation for reliability, feature robustness, and performance." />              
                <Skill image={Sass} title="Sass" text="Sass is the most mature, 
                stable, and powerful professional grade CSS extension language 
                in the world. "/>
                <Skill image={MathPower} title="Maths" text="Thanks to my 
                engineering studies I have a strong mathematical knowledge 
                applicable to machine learning or data analysis" />
                <Skill image={Csharp} title="C# (Unity)" text="C# is a 
                general-purpose, multi-paradigm programmin language. It was developed
                around 2000 by microsoft as part of its .NET initiative. C# is the
                language used by unity. Unity is a cross-platform game engine 
                developed by Unity Technologies"/>
                <Skill image={Godot} title="Godot Game Engine" text=" Godot 
                provides a huge set of common tools, so you can just focus on 
                making your game without reinventing the 
                wheel. Godot is completely free and open-source under the very 
                permissive MIT license."/>
                <Skill image={Cpp} title="C/C++" text="C++ is a high-level, 
                general-purpose programming language created by Bjarne Stroustrup
                as an extension of the C programming language, The language has
                expanded significantly over time, and modern C++ has 
                object-oriented, generic, and functional features in addition to 
                facilities for low-level memory manipulation."/>
                <Skill image={Java} title="Java" text="Java is a general-purpose 
                programming language that is class-based, object-oriented, and 
                designed to have as few implementation dependencies as 
                possible."/>
            </div>
        );
    }
}

export default Skills;