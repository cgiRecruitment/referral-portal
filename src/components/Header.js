import React from "react";
import NavBar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../GCI.png";
import Container from "react-bootstrap/Container";

class Header extends React.Component {
  render() {
    return (
      <NavBar bg="dark" variant="dark" expand="lg" data-test="headerComponent">
        <Container>
          <NavBar.Brand href="#/">
            <img alt="Cgi" src={logo} height={"70"} />
          </NavBar.Brand>
          <NavBar.Toggle aria-controls="basic-navbar-nav" />
          <NavBar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#/" data-test="headerLinks">
                Dashboard
              </Nav.Link>
              <Nav.Link href="#/profiles" data-test="headerLinks">
                View Profiles
              </Nav.Link>
              <Nav.Link href="#/add-profile" data-test="headerLinks">
                Add Profiles
              </Nav.Link>
              <Nav.Link href="#/calender" data-test="headerLinks">
                Interview Calender
              </Nav.Link>
            </Nav>
            <Nav>Welcome&nbsp;{sessionStorage.getItem("memberName")}&nbsp;</Nav>
            <Nav>
              <a
                href="javascript:void(0)"
                onClick={() => this.props.logout()}
                data-test="logout"
              >
                Logout
              </a>
            </Nav>
          </NavBar.Collapse>
        </Container>
      </NavBar>
    );
  }
}

export default Header;
