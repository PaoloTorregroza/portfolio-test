import React from 'react';
import Card from '../card/Card';
import '../../styles/Project.scss';
import GameOfLife from '../../assets/game-of-life.png';
import Portfoio from '../../assets/portfolioImg.png';

class Projects extends React.Component {
    render() {
        return (
            <div>
                <div className="projectCards">
                    <Card
                        link="https://paolotorregroza.github.io/game-of-life/"
                        image={GameOfLife}
                        title="Game Of Life"
                        text="This is my version of the Conway's game of life"
                        skills="Vuejs Sass Html Css JavaScript"
                    />
                    <Card
                        link="https://paolotorregroza.github.io/portfolio/"
                        image={Portfoio}
                        title="My Portfolio"
                        text="What better project than something you've already used. This page is made using react and sass"
                        skills="ReactJs Sass Html Css JavaScript React-Router"
                    />
                </div>
            </div>
        );
    }
}

export default Projects;