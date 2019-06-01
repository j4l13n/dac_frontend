import React, { Component } from "react";
import { Navbar } from "react-bootstrap";

import HeaderLinks from "./HeaderLinks.jsx";

class Header extends Component {
  render() {
    return (
      <Navbar fluid>
        <Navbar.Collapse>
          <HeaderLinks />
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
