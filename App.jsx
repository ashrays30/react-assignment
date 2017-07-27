import React from 'react';
import TopHeader from "./component/TopHeader.jsx";
import Header from "./component/Header.jsx";
import MainBody from "./component/MainBody.jsx";
import Footer from "./component/Footer.jsx";

class App extends React.Component {

   render() {   
      return (
          <div>
            <TopHeader/>
            <Header />
            <MainBody />
                  
            <Footer />
              </div>
      );
   }
   
}



export default App;