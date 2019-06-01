import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import HeaderLinks from "./../Header/HeaderLinks.jsx";

import imagine from "./../../assets/img/sidebar-3.jpg";
import logo from "./../../assets/img/ciat-logo-2018.png";

//import dashboardRoutes from "./../../routes/dashboard.jsx";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth
    };
  }
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }
  updateDimensions() {
    this.setState({ width: window.innerWidth });
  }
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }
  render() {
    const sidebarBackground = {
      backgroundImage: "url(" + imagine + ")"
    };
    return (
      <div
        id="sidebar"
        className="sidebar"
        data-color="black"
        data-image={imagine}
      >
        <div className="sidebar-background" style={sidebarBackground} />
        <div className="logo">
          <a
            href="/"
            className="simple-text logo-mini"
          >
            <div className="logo-img">
              <img src={logo} alt="logo_image" />
            </div>
          </a>
          <a
            href="/dashboard"
            className="simple-text logo-normal"
          >
            DAC
          </a>
        </div>
        <div className="sidebar-wrapper">
          <ul className="nav">
            {this.state.width <= 991 ? <HeaderLinks /> : null}
            <li>
                <NavLink
                    to="/"
                    className="nav-link"
                    activeClassName="active"
                >
                    <i className="" />
                    <p>Dashboard</p>
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/subscribers"
                    className="nav-link"
                    activeClassName="active"
                >
                    <i className="" />
                    <p>Subscribers</p>
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/trees"
                    className="nav-link"
                    activeClassName="active"
                >
                    <i className="" />
                    <p>Trees</p>
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/calls"
                    className="nav-link"
                    activeClassName="active"
                >
                    <i className="" />
                    <p>Calls</p>
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/responses"
                    className="nav-link"
                    activeClassName="active"
                >
                    <i className="" />
                    <p>Responses</p>
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/messages"
                    className="nav-link"
                    activeClassName="active"
                >
                    <i className="" />
                    <p>Messages</p>
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/settings"
                    className="nav-link"
                    activeClassName="active"
                >
                    <i className="" />
                    <p>Settings</p>
                </NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
