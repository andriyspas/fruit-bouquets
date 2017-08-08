import React, { Component } from 'react';
import PropTypes from "prop-types";
import { FormattedMessage } from 'react-intl';
import Scroll from 'react-scroll';
import { Navbar, NavItem, NavDropdown, MenuItem, OverlayTrigger } from  'react-bootstrap';

import PopoverPhone from './Popover/Popover';

let Link = Scroll.Link;


class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            minimized: false,
        };
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = (event) => {
        const scrollTop = event.srcElement.body.scrollTop;

        this.setState({
            minimized: (scrollTop > 10) || false,
        });
    };

    handleSelect = (eventKey) => {
        this.props.onLanguageChange(eventKey);
    };

    render() {
        const navbarClassName = this.state.minimized ? "navbar__minimized" : null;

        return (
            <Navbar className={ navbarClassName } fixedTop fluid>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#home" className="header__logo">
                            <img src={require('../../images/flower-bouquet.svg')} alt=""/>
                            <div>bouquets of fruits</div>
                        </a>
                    </Navbar.Brand>

                    <Navbar.Toggle />
                </Navbar.Header>

                <Navbar.Collapse>
                    <ul className="nav navbar-nav navbar-right">
                        <li role="presentation">
                            <Link
                                to="home"
                                activeClass="navigation__href--active"
                                spy={ true }
                                smooth={ true }
                                duration={ 500 }
                                onSetActive={ this.handleSetActive }
                                className="navigation__href"
                            >
                                Home
                            </Link>
                        </li>

                        <li role="presentation">
                            <Link
                                to="about-me"
                                activeClass="navigation__href--active"
                                spy={ true }
                                smooth={ true }
                                duration={ 500 }
                                onSetActive={ this.handleSetActive }
                                className="navigation__href"
                            >
                                About Me
                            </Link>
                        </li>

                        <li role="presentation">
                            <Link
                                to="products"
                                activeClass="navigation__href--active"
                                spy={ true }
                                smooth={ true }
                                duration={ 500 }
                                onSetActive={ this.handleSetActive }
                                className="navigation__href"
                            >
                                Products
                            </Link>
                        </li>

                        <li role="presentation">
                            <Link
                                to="reviews"
                                activeClass="navigation__href--active"
                                spy={ true }
                                smooth={ true }
                                duration={ 500 }
                                onSetActive={ this.handleSetActive }
                                className="navigation__href"
                            >
                                Reviews
                            </Link>
                        </li>

                        <li role="presentation">
                            <Link
                                to="contact"
                                activeClass="navigation__href--active"
                                spy={ true }
                                smooth={ true }
                                duration={ 500 }
                                onSetActive={ this.handleSetActive }
                                className="navigation__href"
                            >
                                Contact
                            </Link>
                        </li>

                        <NavDropdown eventKey={1} title={ <FormattedMessage id="language"/> } id="dropdown" onSelect={ this.handleSelect }>
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

                    </ul>
                </Navbar.Collapse>

            </Navbar>
        )
    }
}

Header.propTypes = {
    // sticky: PropTypes.bool,
    onLanguageChange: PropTypes.func.isRequired,
};
//
// Header.defaultProps = {
//     sticky: false,
// };

export default Header;