import React, { Component } from "react";
import { NavItem, Nav, NavDropdown, MenuItem } from "react-bootstrap";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";

class HeaderLinks extends Component {
  render() {
    const notification = (
      <div>
        <i className="glyphicon glyphicon-comment" />
        <b className="caret" />
        <span className="notification">5</span>
        <p className="hidden-lg hidden-md">Notification</p>
      </div>
    );
    return (
      <div>
        <Nav>
          <NavItem eventKey={1} href="#">
            <i className="fa fa-dashboard" />
            <p className="hidden-lg hidden-md">HeaderLinks</p>
          </NavItem>
          <NavDropdown
            eventKey={2}
            title={notification}
            noCaret
            id="basic-nav-dropdown"
          >
            <MenuItem eventKey={2.1}>message from Julien</MenuItem>
          </NavDropdown>
          <NavItem eventKey={3} href="#">
            <i className="fa fa-search" />
            <p className="hidden-lg hidden-md">Search</p>
          </NavItem>
        </Nav>
        <Nav pullRight>
          {/* <NavItem eventKey={1} href="#">
            Karangwa Hirwa Julien
          </NavItem> */}
          <NavDropdown
            eventKey={2}
            title="Settings"
            id="basic-nav-dropdown-right"
          >
            
            {/* <MenuItem eventKey={2.2}>Another action</MenuItem>
            <MenuItem eventKey={2.3}>Something</MenuItem>
            <MenuItem eventKey={2.4}>Another action</MenuItem>
            <MenuItem eventKey={2.5}>Something</MenuItem> */}
            <MenuItem divider />
            <MenuItem eventKey={2.1}>Edit Profile</MenuItem>
            <MenuItem divider />
            {/* <MenuItem eventKey={2.5}>Separated link</MenuItem> */}
          </NavDropdown>
          <NavItem eventKey={3} href="#">
            Log out
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default HeaderLinks;
