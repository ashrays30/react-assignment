import React from 'react';
import MainNav from './MainNav.jsx';
import PageNav from './PageNav.jsx';

class Header extends React.Component {
	
   render() {
      return (
          <div>
            <MainNav />
            <PageNav />
        </div>
      );
   }
}

export default Header;