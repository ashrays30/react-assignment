import React from 'react';

class BreadCums extends React.Component {
    
    constructor(){
        super();
        this.state = {
            crums:[
                {
                    name:'HOME',
                    url:'#'
                },
                {
                    name:'BLOG',
                    url:'#'
                }
            ],
            activeCrums: 1
        }
    }
    
    render(){
        var crumIndex = this.state.activeCrums;
        return(
            <div className="breadcums">
            {this.state.crums.map((tab, i) => {return <a className={crumIndex === i?'active':''} key={i} href={tab.url}>{
            crumIndex === i?tab.name:tab.name+" / "}</a>})}
            </div>
        );
    }
}

export default BreadCums;