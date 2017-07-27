import React from 'react';

class MainNav extends React.Component {

	constructor(){
        super();
        this.state = {
            tabs:[
                {
                    name:"ABOUT",
                    url:"#"
                },
                {
                    name:"MEMBERSHIP BENIFITS",
                    url:"#"
                },
                {
                    name:"RESOURCES",
                    url:"#"
                },
                {
                    name:"BLOG",
                    url:"#"
                },
                {
                    name:"CONTACT",
                    url:"#"
                },
            ],
            activeIndex: 3,
            mainNavButtons:[
                {
                    name:"CLAIM FREE REPORT",
                    url:"#"
                },
                {
                    name:"LOGIN",
                    url:"#"
                },
            ],
            buttonActiveIndex : 0
        }
    }
	
	
   render() {
       var tabIndex = this.state.activeIndex;
       var buttonIndex = this.state.buttonActiveIndex;
      return (
          <div className="menu-margin">
            <div className="main-menu container">
            <div >
             <ul>
                    {this.state.tabs.map((tab, i) => {return <li key={i}><a className={tabIndex === i?'active':''} href={tab.url}>{tab.name}</a></li>})}
              </ul>

            </div>
              <div className="nav-buttons">
                    {this.state.mainNavButtons.map((tab, i) => {return <a key={i} className={buttonIndex === i?'active':''} href={tab.url}>{tab.name}</a>})}

                </div>
            </div>
        </div>
      );
   }
}

export default MainNav;