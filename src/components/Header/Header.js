import React,{ Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import './style.css';
class Header extends Component{
    render(){
        return(
            <>
            <Navbar bg="light" expand="md">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Form inline>
                        <FormControl type="text" placeholder="Search"  placeholder="Search for Movie,Events,Plays,Sports and Activities" />
                    </Form>
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                   
                </Navbar.Collapse>
                </Navbar>

                <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto custom-nav-font">
                            <Nav.Link href="#features">Movies</Nav.Link>
                            <Nav.Link href="#Events">Events</Nav.Link>
                            <Nav.Link href="#Plays">Plays</Nav.Link>
                            <Nav.Link href="Sports">Sports</Nav.Link>
                            <Nav.Link href="Activities">Activities</Nav.Link>
                            <Nav.Link href="Monuments">Monuments</Nav.Link>
                            <Nav.Link href="Fanhood">Fanhood</Nav.Link>
                            <Nav.Link href="Buzz">Buzz</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#Corporates">Corporates</Nav.Link>
                            <Nav.Link href="#Offers"> Offers </Nav.Link>
                            <Nav.Link href="#GiftCards"> Gift Cards </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    </Navbar>
            </>
            
        )
    }
}
 export default Header