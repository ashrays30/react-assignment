import React from 'react';
import TopHeader from "./component/TopHeader.jsx";
import Header from "./component/Header.jsx";
import MainBody from "./component/MainBody.jsx";
import Footer from "./component/Footer.jsx";
import OtherPages from "./component/OtherPages.jsx";

import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';

class App extends React.Component {

   render() {   
      return (
          <div>
            <TopHeader/>
              <Router>
                  <div>
                    <Header />
                    <Switch>
                            <Route exact path="/" component={MainBody} />
                            <Route exact path="/other/:content" component={OtherPages} />
                    </Switch>
                        
                    </div>
                </Router>  
            <Footer />
              </div>
      );
   }
   
}



export default App;