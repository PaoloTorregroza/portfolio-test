import React from 'react';
import '../../styles/home.scss'
import PaolinskyLogo from '../../assets/PaolinskyLogo.png'

class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <div className="name">
                    <h1>Paolo</h1>
                    <h1>Torregrosa</h1>
                    <h2>Software developer</h2>
                </div>
                <div className="logo">
                    <img src={PaolinskyLogo} alt="Paolinsky Logo" />
                </div>
            </div>
        );
    }
}

export default Home;