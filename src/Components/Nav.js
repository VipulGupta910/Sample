import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Nav extends Component {

   render() {

    const navStyle = {
      color:'white'
    }

    return (
      <nav>
          <ul className="nav-links">
              <Link style={navStyle} to='/'>
                <li>Home</li>
              </Link>

              <Link style={navStyle} to='/about'>
                <li>About</li>
              </Link>
              
              <Link style={navStyle} to='/shop'>
                <li>Shop</li>
              </Link>
          </ul>
      </nav>
    );
  }
}

  export default Nav