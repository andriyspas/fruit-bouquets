import React, { Component } from 'react'
import { Navbar, NavItem, NavDropdown, MenuItem, Nav, OverlayTrigger } from  'react-bootstrap';
import PopoverPhone from './Popover/Popover';

class Header extends Component {

    render() {
        return (
            <Navbar fluid>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">Title</a>
                    </Navbar.Brand>

                    <Navbar.Toggle />
                </Navbar.Header>

                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavDropdown eventKey={1} title="UKR" id="dropdown">
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
                            <NavItem eventKey={2}>
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