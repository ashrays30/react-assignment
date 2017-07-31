import React from 'react';

class PageNav extends React.Component {

	constructor(){
		super();
		this.state = {
         tabs:[
                {
                    name:"ALL",
                    url:"#"
                },
                {
                    name:"INVESTMENT",
                    url:"#"
                },
                {
                    name:"FINANCE",
                    url:"#"
                },
                {
                    name:"CRDIT",
                    url:"#"
                },
                {
                    name:"OTHER",
                    url:"#"
                },
                {
                    name:"MORE",
                    url:"#"
                },
                {
                    name:"FAMILY",
                    url:"#"
                },
                {
                    name:"RUPEE",
                    url:"#"
                },
            ],
            activeIndex: 0,
      }

	}
	
	
   render() {
   	var tabIndex =  this.state.activeIndex;
      return (

         <div className="page-nav">
             <ul className="container">
                    {this.state.tabs.map((tab, i) => {return <li key={i}><a className={tabIndex === i?'active':''} href={tab.name}>{tab.name}</a></li>})}
              </ul>
        </div>
      );
   }
}

export default PageNav;