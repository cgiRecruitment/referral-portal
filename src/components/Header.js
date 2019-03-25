import React from 'react'
import NavBar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";


class Header extends React.Component{

    render() {
        return(
            <NavBar bg="dark" variant="dark" expand="lg">
                <NavBar.Brand href="#home">Referral portal</NavBar.Brand>
                <NavBar.Toggle aria-controls="basic-navbar-nav" />
                <NavBar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#/">Dashboard</Nav.Link>
                        <Nav.Link href="#/profiles">View Profiles</Nav.Link>
                        <Nav.Link href="#link">Add Profiles</Nav.Link>
                    </Nav>
                </NavBar.Collapse>
            </NavBar>
        )
    }

}

export default Header
