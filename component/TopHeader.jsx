import React from 'react';


class TopHeader extends React.Component {

	constructor(){
		super();
		this.state = {
         socialIcon: 
         [
            {
               url: '/images/facebook_icon.png',
               name: "linked In"
            },
             {
               url: '/images/Twitter_icon.png',
               name: "linked In"
            },
             {
               url: '/images/linkedin_icon.png',
               name: "linked In"
            },
             {
               url: '/images/Youtube_icon.png',
               name: "linked In"
            }
         ]
      }

	}
	
	
   render() {
   	var x = 7;
      return (

         <div className="top-header">
            <div className="container">
                {this.state.socialIcon.map((dynamicComponent, i) => {return <img src={dynamicComponent.url} key={i} className="social-Icon" />})}
              </div>
         </div>
      );
   }
}

export default TopHeader;