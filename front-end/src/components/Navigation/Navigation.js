import React, { Component } from 'react';
import Scroll from 'react-scroll';

let Link = Scroll.Link;

class Navigation extends Component {
    constructor() {
        super();

        this.state = {
            active: 'section_home'
        }
    };

    handleSetActive = (to) => {
        this.setState({ active: to })
    };

    render() {
        return (
            <div className="navigation">
                <Link
                    to="section_home"
                    activeClass="navigation__href--active"
                    spy={ true }
                    smooth={ true }
                    offset={ -70 }
                    duration={ 500 }
                    onSetActive={ this.handleSetActive }
                    className="navigation__href"
                >
                    <div className="navigation__dot"></div>
                    <div className="navigation__dot--border"></div>
                    <div className="navigation__section-name">Home</div>
                </Link>

                <Link
                    to="section_products"
                    activeClass="navigation__href--active"
                    spy={ true }
                    smooth={ true }
                    offset={ -70 }
                    duration={ 500 }
                    onSetActive={ this.handleSetActive }
                    className="navigation__href"
                >
                    <div className="navigation__dot"></div>
                    <div className="navigation__dot--border"></div>
                    <div className="navigation__section-name">Products</div>
                </Link>

                <Link
                    to="section_about-us"
                    activeClass="navigation__href--active"
                    spy={ true }
                    smooth={ true }
                    offset={ -70 }
                    duration={ 500 }
                    onSetActive={ this.handleSetActive }
                    className="navigation__href"
                >
                    <div className="navigation__dot"></div>
                    <div className="navigation__dot--border"></div>
                    <div className="navigation__section-name">About Us</div>
                </Link>

                <Link
                    to="section_testimonials"
                    activeClass="navigation__href--active"
                    spy={ true }
                    smooth={ true }
                    offset={ -70 }
                    duration={ 500 }
                    onSetActive={ this.handleSetActive }
                    className="navigation__href"
                >
                    <div className="navigation__dot"></div>
                    <div className="navigation__dot--border"></div>
                    <div className="navigation__section-name">Reviews</div>
                </Link>

                <Link
                    to="section_sales"
                    activeClass="navigation__href--active"
                    spy={ true }
                    smooth={ true }
                    offset={ -70 }
                    duration={ 500 }
                    className="navigation__href"
                    onSetActive={ this.handleSetActive }
                >
                    <div className="navigation__dot"></div>
                    <div className="navigation__dot--border"></div>
                    <div className="navigation__section-name">Sales</div>
                </Link>

                <Link
                    to="section_contact"
                    activeClass="navigation__href--active"
                    spy={ true }
                    smooth={ true }
                    offset={ -70 }
                    duration={ 500 }
                    className="navigation__href"
                    onSetActive={ this.handleSetActive }
                >
                    <div className="navigation__dot"></div>
                    <div className="navigation__dot--border"></div>
                    <div className="navigation__section-name">Contact</div>
                </Link>
            </div>
        );
    }
}

export default Navigation;