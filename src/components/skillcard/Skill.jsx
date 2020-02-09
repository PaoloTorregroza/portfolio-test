import React from 'react';
import '../../styles/skillCard.scss';

class Skill extends React.Component {
    render() {
        return (
            <div className="skillCard">
                <img src={this.props.image} alt="skill image" />
                <div className="cardContent">
                    <h2 className="skillTitle">{this.props.title}</h2>
                    <p>{this.props.text}</p>
                </div>
            </div>
        );
    }
}

export default Skill;