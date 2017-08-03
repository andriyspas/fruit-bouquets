import React, { Component } from 'react'
import { Navbar, NavItem, NavDropdown, MenuItem, Nav, OverlayTrigger } from  'react-bootstrap';
import PopoverPhone from './Popover/Popover';
import {FormattedMessage} from 'react-intl'


class Header extends Component {

  handleSelect = (eventKey) => {
    this.props.onLanguageChange(eventKey)
  }

    render() {
        return (
            <Navbar fluid>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/"><FormattedMessage id="title"/></a>
                    </Navbar.Brand>

                    <Navbar.Toggle />
                </Navbar.Header>

                <Navbar.Collapse>
                    <Nav pullRight onSelect={this.handleSelect}>
                        <NavDropdown eventKey={1} title="Lang" id="dropdown">
                            <MenuItem eventKey='en'>ENG</MenuItem>
                            <MenuItem eventKey='pl'>POL</MenuItem>
                            <MenuItem eventKey='ua'>UKR</MenuItem>
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