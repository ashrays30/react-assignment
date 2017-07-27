import React from 'react';

class SocialIcon extends React.Component {
    
    render(){
        var background = {
            backgroundImage:'url('+this.props.imgUrl+')'
        }
        return(
            <div className="socialIcon" style={background}></div>
        );
    }
}

export default SocialIcon;