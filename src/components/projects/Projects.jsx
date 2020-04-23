import React from 'react';
import Card from '../card/Card';
import '../../styles/Project.scss';
import GameOfLife from '../../assets/game-of-life.png';
import GoLife from '../../assets/GoLife.png';
import Amazon from '../../assets/Amazon.jpg';

class Projects extends React.Component {
    render() {
        return (
            <div>
                <div className="projectCards">
                    <Card
                        link="https://paolotorregroza.github.io/game-of-life/"
                        image={GameOfLife}
                        title="Game Of Life"
                        text="Conway's game of life, an excellent 
                                way to show algorithm skills and in this case frontend skills"
                        skills="Vuejs Sass Html Css JavaScript GitHub-Pages"
                    />
                    <Card link=""
                        image={Amazon}
                        title="Amazon web scrapper"
                        text="Un bot programado en python encargado de recolectar cientos de datos de productos de 
                        amazon y guardarlos en una hoja de calculo ubicada en google drive. El bot se ejecuta en heroku." 
                        skills="Heroku Python Selenium Linux Git" />
                    <Card
                        link="https://github.com/PaoloTorregroza/GoLife"
                        image={GoLife}
                        title="GoLife"
                        text="Esta es mi versión del juego de la vida de Conway implementada en Go, 
                        uno de mis lenguajes favoritos."
                        skills="Golang Linux Pixel"
                    />
                </div>
            </div>
        );
    }
}

export default Projects;