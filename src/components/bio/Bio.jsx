import React from 'react';
import MyFace from '../../assets/Paolo.jpg'
import '../../styles/bio.scss';

class Bio extends React.Component {
    render() {
        return (
            <div className="aboutContainer">
                <img src={MyFace} alt="" />
                <div className="content">
                    <h1>Who I am?</h1>
                    <p>


                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula congue auctor. 
                        Nulla blandit elementum elit, sit amet tincidunt magna egestas et. In hac habitasse platea dictumst. 
                        In nec purus a eros auctor maximus et sit amet arcu. Integer pellentesque, quam sit amet tincidunt venenatis, 
                        nibh ex tincidunt mi, id gravida tellus ante non libero. Donec efficitur ultrices rhoncus. Nulla quis congue velit.<br/><br/>                        
                        Praesent eu est purus. In ut varius tortor. Aliquam maximus ante quis ex bibendum gravida. Phasellus gravida a ipsum et 
                        vestibulum. Integer gravida augue in pharetra facilisis. Ut interdum porta tortor condimentum commodo. Nam aliquet,
                         nisi non mollis malesuada, urna augue dignissim elit, vel fringilla orci ipsum vitae sapien. Morbi gravida libero
                          eu lorem congue, id consectetur mauris semper. Proin at leo quis justo rutrum mattis. Lorem ipsum dolor sit amet,
                           consectetur adipiscing elit. Morbi luctus augue purus, sed mollis urna tempus pellentesque.<br/><br/>
                        Morbi ut enim eu nisl egestas semper quis vel urna. Cras eu porttitor mauris. Maecenas id enim ut ligula fringilla
                         congue. Proin ac dignissim nunc. Nullam quis volutpat elit. Donec in blandit nibh. Orci varius natoque penatibus et magnis
                          dis parturient montes, nascetur ridiculus mus. Ut diam orci, aliquam sit amet tincidunt sit amet, dignissim eget est. Donec a sodales velit.<br/><br/>                        
                        Vestibulum a mauris pretium, scelerisque quam quis, scelerisque ligula. Cras euismod, dolor ac laoreet pretium,
                         leo leo bibendum felis, sed vehicula nulla augue quis eros. Proin condimentum nulla in turpis venenatis ultricies.
                          Donec egestas quis lacus in tristique. Aliquam mollis, dolor vitae vehicula tempor, augue neque semper lorem, id hendrerit tellus
                           metus sit amet ipsum. In a diam semper, fermentum lorem sit amet, commodo justo. Sed convallis efficitur vehicula. 
                        Quisque in neque eu urna finibus vestibulum vitae et magna. Praesent congue dolor id tincidunt dignissim. Aenean est eros, 
                        bibendum nec ante quis, aliquam fringilla velit. Aenean ullamcorper metus et lectus faucibus, in varius ipsum rhoncus. 
                        Nulla ac eros venenatis, porta leo eu, faucibus nisi. In hac habitasse platea dictumst. Aenean non mi ante. Vivamus at 
                        dapibus quam.<br/><br/>                    
                        Pellentesque et porta ante, a laoreet elit. Ut sodales mauris sed nulla finibus ultrices. Maecenas mauris odio,
                         euismod id luctus sed, interdum facilisis dui. Vestibulum at cursus mauris. Curabitur congue libero ut ex commodo,
                          a euismod urna tincidunt. Morbi nec neque ligula. Cras ut luctus ligula. Maecenas pretium fringilla erat, in sagittis 
                          justo mattis nec. Mauris tortor tortor, facilisis quis sollicitudin ac, iaculis at sem. Nulla dolor est, consectetur
                           sit amet condimentum nec, pellentesque at odio.

                           <br/><br/><br/><br/><br/><br/>
                    </p>
                </div>
            </div>
        );
    }
}

export default Bio;