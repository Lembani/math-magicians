import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

class Navbar extends React.PureComponent {
  render() {
    return (
      <>
        <nav className="navbar">
          <Link className="brand nav-link" to="/">Math Magicians</Link>
          <ul className="nav-list-container">
            <li className="nav-list-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            |
            <li className="nav-list-item">
              <Link to="/calculator" className="nav-link">Calculator</Link>
            </li>
            |
            <li className="nav-list-item">
              <Link to="/quote" className="nav-link">Quote</Link>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}

export default Navbar;
