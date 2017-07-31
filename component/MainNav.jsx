import React from 'react';
import {Link} from 'react-router-dom'

class MainNav extends React.Component {

	constructor(props){
        super(props);
        this.state = {
            tabs:[
                {
                    name:"ABOUT",
                    url:"other/This is about page"
                },
                {
                    name:"MEMBERSHIP BENIFITS",
                    url:"other/This is Member benifits page"
                },
                {
                    name:"RESOURCES",
                    url:"other/This is resource page"
                },
                {
                    name:"BLOG",
                    url:""
                },
                {
                    name:"CONTACT",
                    url:"other/This is contact page"
                },
            ],
            activeIndex: null,
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
        this.updateActiveIndex = this.updateActiveIndex.bind(this);
    }
	
    updateActiveIndex(){
        console.log(key);
        this.setState({activeIndex: key});
    }
   render() {
       var tabIndex = this.state.activeIndex;
       var buttonIndex = this.state.buttonActiveIndex;
      return (
          <div className="menu-margin">
            <div className="main-menu container">
            <div >
             <ul>
                    {this.state.tabs.map((tab, i) => {return <li key={i}><Link className={tabIndex === i?'active':''} to={'/'+tab.url}>{tab.name}</Link></li>})}
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