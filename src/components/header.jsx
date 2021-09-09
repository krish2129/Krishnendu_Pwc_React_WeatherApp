import React from 'react';

import { Navbar} from 'react-bootstrap';


class Header extends React.Component {
  render() {
    return (
      <Navbar fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">
              <img src="/images/pwc-logo.png" alt="PwC" />
            </a>
          </Navbar.Brand>
            <span></span>
            <label><h2>Weather Widget</h2></label>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}


export default Header;