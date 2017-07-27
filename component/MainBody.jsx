import React from 'react';
import BreadCums from './BreadCums.jsx';
import MainContent from './MainContent.jsx';
import PopularPost from './PopularPost.jsx';

class MainBody extends React.Component {
    constructor(){
        super();
        this.state = {
            
        }
    }
    
    render(){
        return(
            <div className="container">
                <div>
                    <BreadCums />
                    <MainContent />
                    <PopularPost />
                </div>
                
            </div>
        );
    }
    
}

export default MainBody;