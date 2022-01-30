import React, { Component } from "react";
import {
  Collapse,
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";
import "./NavMenu.css";

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <header>
        <Navbar
          className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3"
          light
        >
          <Container>
            <NavbarBrand className="text-light" tag={Link} to="/">
              Mel's Menu
            </NavbarBrand>

            <NavbarToggler
              onClick={this.toggleNavbar}
              className="mr-2 text-light"
            />

            <Collapse
              className="d-sm-inline-flex flex-sm-row-reverse"
              isOpen={!this.state.collapsed}
              navbar
            >
              <ul className="navbar-nav flex-grow">
                <NavItem id="navItem">
                  <NavLink tag={Link} className="text-light" to="/">
                    Home
                  </NavLink>
                </NavItem>
                <NavItem id="navItem">
                  <NavLink tag={Link} className="text-light" to="/menuItems">
                    All Menu Items
                  </NavLink>
                </NavItem>
                <NavItem id="navItem">
                  <NavLink tag={Link} className="text-light" to="/addRecipe">
                    Add New Recipe
                  </NavLink>
                </NavItem>
                <NavItem id="navItem">
                  <NavLink tag={Link} className="text-light" to="/mealPlanner">
                    Weekly Meal Planner
                  </NavLink>
                </NavItem>

                <NavItem id="navItem">
                  <NavLink tag={Link} className="text-light" to="/myFavorites">
                    My Favorites
                  </NavLink>
                </NavItem>

                <NavItem id="navItem">
                  <NavLink tag={Link} className="text-light" to="/login">
                    Log In / Sign Up
                  </NavLink>
                </NavItem>
              </ul>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-light" type="submit">
                  Search
                </button>
              </form>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}
