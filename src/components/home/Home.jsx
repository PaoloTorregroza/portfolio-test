import React from 'react';
import '../../styles/home.scss'
import PaolinskyLogo from '../../assets/PaolinskyLogo.png'

class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <img className="logo" src={PaolinskyLogo} alt="Paolinsky Logo"/>
                <div className="name">
                    <h1>Paolo</h1>
                    <h1>Torregrosa</h1>
                    <h3>Software developer</h3>
                </div>
            </div>
        );
    }
}

export default Home;