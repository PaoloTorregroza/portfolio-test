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
                        text="Conway's game of life, an excellent 
                                way to show algorithm skills and in this case frontend skills"
                        skills="Vuejs Sass Html Css JavaScript"
                    />
                    <Card
                        link="https://paolotorregroza.github.io/portfolio/"
                        image={Portfoio}
                        title="My Portfolio"
                        text="This portfolio you are reviewing is 
                                built with ReactJS the powerful Facebook frontend framework"
                        skills="ReactJs Sass Html Css JavaScript React-Router"
                    />
                </div>
            </div>
        );
    }
}

export default Projects;