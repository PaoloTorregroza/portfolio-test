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
                <Skill image={Golang} title="Golang" text="Go es uno de mis lenguajes favoritos, al ser tipado y compilado es muy eficiente
                tanto en desarrollo como en producción, normalmente se usa en el desarrollo backend, pero el desarrollo de otro tipo de sistemas
                y software también es posible y muy bueno. Ademas que según yo... Tiene una de las mascotas mas lindas de todas."/>
                <Skill image={Node} title="Node" text="Node. Un estándar muy importante conocerlo tanto en frontend como en backend. 
                Donde mas hago uso de él es en programación de servidores con express y testing con mocha. No soy muy fan de tener 
                lenguajes interpretados en el backend pero tengo que admitir que su excelente documentación y comunidad son de gran ayuda."/>
                <Skill image={Python} title="Python" text="Python es uno de los lenguajes en los que probablemente he escrito 
                mas código. Con el he escrito bot que se encargan de hacer tareas repetitivas con selenium (Como recolectar 
                datos de amazon), juego con pygame, y actualmente los conocimientos de machine learning que adquiero los suelo 
                implementar en python."/>
                <Skill image={webDev} title="HTML/CSS/JS" text="La trinidad web, fundamentales para cualquier persona quiera 
                hacer algo relacionado con internet, con css he tenido la oportunidad de trabajar con bootstrap 4 y con Sass"/>
                 <Skill image={ReactImage} title="Reactjs" text="ReactJS es una librería de JS muy utilizada en el 
                 desarrollo de aplicaciones web, al ser creada por facebook cuenta con un excelente soporte ademas de una 
                 comunidad muy grande, probablemente mi opción preferida al trabajar en el frontend."/>
                <Skill image={Vue} title="Vuejs" text="Vuejs es un framework genial para proyectos no demasiado grandes, 
                es muy fácil de usar y de integrar y por eso decidí tomarlo como primer framework frontend mientras aprendía."/>  
                <Skill image={Postgres} title="PosttgreSQL" text="Postrgesql es mi base de datos SQL favorita, es poderosa, 
                opensource y al ser una de las bases de datos mas utilizadas es fácil encontrar documentación y ayuda. 
                En cada proyecto que tengo que requiere una base de datos SQL postgres es mi primera opción." />              
                <Skill image={Sass} title="Sass" text="Sass es una herramiento que encuentro sumamente util en proyectos 
                en los que no utilizo un framework de css como bootstrap o material-ui. "/>
                <Skill image={MathPower} title="Matemáticas" text="Algunas ramas de las matemáticas son realmente interesantes 
                y resulta realmente divertido estudiarlas. Este pensamiento y mis estudios en ingeniería me permiten 
                decir que tengo un solido trasfondo de matemáticas." />
                <Skill image={Java} title="Java" text="Java es un lenguaje famoso, muy versátil y poco complejo con 
                montones de posibilidades, también lo estudie en la universidad pero tengo conocimientos de antes de eso, 
                como lenguaje a pesar de lo que muchos digan me gusta. Creo que me gusta programar en lenguajes tipados y 
                compilados, pero java es el que mas fácilmente puede llevarse a cualquier sistema operativo."/>
                <Skill image={Cpp} title="C/C++" text="C y C++ son dos lenguajes retadores de dominar, comencé a estudiarlos
                 realmente en la universidad, pero mi curiosidad por como funcionan los lenguajes de programación y sistemas 
                 operativos me llevo a profundizar un poco mas en estos potentes lenguajes."/>
                <Skill image={Csharp} title="C#" text="C# fue el primer lenguaje de programación que aprendí, 
                me permitió entender la programación orientada a objetos, y los conceptos de programación en general."/>
                <Skill image={Godot} title="Godot Game Engine" text=" Godot es un motor de videojuegos que me encanta, 
                opino que es una opción realmente buena para estudios indie, a diferencia de unity godot si cuenta con un 
                motor gráfico 2D. Tiene soporte para programar con C# o C++ pero el lenguaje propio que utiliza llamado 
                GDscript no esta nada mal y es muy sencillo y rápido de aprender."/>
            </div>
        );
    }
}

export default Skills;