import React from 'react';
import MyFace from '../../assets/Paolo.jpg'
import '../../styles/bio.scss';

class Bio extends React.Component {
    render() {
        return (
            <div className="aboutContainer">
                <img src={MyFace} alt="" />
                <div className="content">
                    <h2>Quien soy</h2>
                    <p>Soy un desarrollador de software autodidacta con estudios universitarios 
                        en ingeniería, me encanta programar, el opensource, linux y participar 
                        en comunidades de desarrollo. </p>
                    <h2>¿Lo que hago?</h2>
                    <p>
                    Me gusta pensar que mi fuerte es el backend, me encanta Golang, es 
                    fantástico, pero no por eso desconozco de tecnologías como express. 
                    En frontend suelo trabajar con ReactJS o con VueJS. Sin embargo la 
                    parte que mas me gusta de la programación es todo lo relacionado 
                    con las ciencias de la computación y/o lenguajes compilados como C++, 
                    golang, java, etc...
                    </p>
                    <h2>Mis estudios</h2>
                    <p>
                    Me considero autodidacta, suelo leer documentación y seguir guias 
                    para aprender y hacer algunas cosas, pero también he tomado cursos 
                    en freecodecamp.org, platzi.com, coursera, #creaentuidioma entre 
                    otros y obviamente, no debo olvidar mi educación universitaria que 
                    llevo en este momento.
                    </p>
                    <h2>Mis intereses</h2>
                    <p>
                    Me llama mucho la atención el mundo del machine learing, he tomado 
                    algún curso e intentado estudiar por mi cuenta alguna ves. Ademas 
                    de eso cualquier tipo de desarrollo relacionado con retos mentales 
                    o algorítmicos me encanta (como se puede apreciar en mis proyectos)
                    </p>
                    <h2>Hablemos</h2>
                    <p>Email: paolinskypdtn@outlook.com Twitter: 
                        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/TorregrozaPaolo">
                            @TorregrozaPaolo 
                        </a>,
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/paolo-donato-torregrosa-navarro-61947a191/"> LinkedIn</a> y <a target="_blank" rel="noopener noreferrer" href="https://github.com/PaoloTorregroza">Github</a></p>
                </div>
            </div>
        );
    }
}

export default Bio;