import React from 'react';
import '../../styles/Project.scss';

class Card extends React.Component {
    render() {
        return (
            <div className="projectCard">
                <img src={this.props.image} alt="" />
                <div className="cardContent">
                    <a target="_blank" href={this.props.link}><h3>{this.props.title}</h3></a>
                    <p>{this.props.text}</p>
                    <br />
                    <h4>Skills</h4>
                    <div className="skills">
                        {this.plotSkills(this.props.skills)}
                    </div>
                </div>
            </div>
        );
    }

    plotSkills(skills) {
        let skillStrings = skills.split(" ");
        let skillArr = [];
        for (let i = 0; i < skillStrings.length; i++) {
            skillArr.push(<div key={i} className="singleSkill">{skillStrings[i]}</div>)
        }
        return skillArr;
    }
}

export default Card;