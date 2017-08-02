import React, { Component } from 'react'
import { Navbar, NavItem, NavDropdown, MenuItem, Nav, OverlayTrigger } from  'react-bootstrap';
import PopoverPhone from './Popover/Popover';
// import { configureAnchors } from 'react-scrollable-anchor'

class Header extends Component {

    // componentWillMount() {
    //     configureAnchors({
    //         offset: -60
    //     });
    // }

    render() {
        return (
            <Navbar fixedTop>

                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">Title</a>
                    </Navbar.Brand>

                    <Navbar.Toggle />
                </Navbar.Header>

                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#home">Home</NavItem>
                        <NavItem eventKey={2} href="#about-me">About Me</NavItem>
                        <NavItem eventKey={3} href="#products">Products</NavItem>
                        <NavItem eventKey={4} href="#reviews">Reviews</NavItem>
                        <NavItem eventKey={5} href="#contact">Contact</NavItem>

                        <NavItem>|</NavItem>

                        <NavDropdown eventKey={6} title="UKR" id="dropdown">
                            <MenuItem>ENG</MenuItem>
                            <MenuItem>POL</MenuItem>
                            <MenuItem>RUS</MenuItem>
                        </NavDropdown>

                        <OverlayTrigger
                            rootClose
                            trigger="click"
                            placement="bottom"
                            overlay={ PopoverPhone }
                        >
                            <NavItem eventKey={7}>
                                <img src={require('../../images/phone-call-black.svg')} alt="" width='20px'/>
                            </NavItem>
                        </OverlayTrigger>

                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        )
    }
}

export default Header;