import React from 'react';
import BreadCums from './BreadCums.jsx';
import MainContent from './MainContent.jsx';
import PopularPost from './PopularPost.jsx';
import BlogDesc from './BlogDesc.jsx';
import PageNav from './PageNav.jsx';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';

class MainBody extends React.Component {
    constructor(){
        super();
        this.state = {
            
        }
    }
    
    render(){
        return(
            
            <div >
                <PageNav />
                <div className="container">
                    
                    <BreadCums />
                    <Router>
                        <Switch>
                                <Route exact path="/blog/:id" component={BlogDesc} />
                                <Route exact path="/" component={MainContent} />
                        </Switch>
                    </Router>
                    <PopularPost />
                </div>
                
            </div>
        );
    }
    
}

export default MainBody;