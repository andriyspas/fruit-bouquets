import React, {Component} from 'react';

class Navigation extends Component {
    render() {
        return (
            <div className="navigation">
                <a href="#home" className="navigation__href navigation__href--active">
                    <div className="navigation__dot"></div>
                    <div className="navigation__dot--border"></div>
                    <div className="navigation__section-name">Home</div>
                </a>
                <a href="#about-me" className="navigation__href">
                    <div className="navigation__dot"></div>
                    <div className="navigation__dot--border"></div>
                    <div className="navigation__section-name">About Me</div>
                </a>
                <a href="#products" className="navigation__href">
                    <div className="navigation__dot"></div>
                    <div className="navigation__dot--border"></div>
                    <div className="navigation__section-name">Products</div>
                </a>
                <a href="#reviews" className="navigation__href">
                    <div className="navigation__dot"></div>
                    <div className="navigation__dot--border"></div>
                    <div className="navigation__section-name">Reviews</div>
                </a>
                <a href="#contact" className="navigation__href">
                    <div className="navigation__dot"></div>
                    <div className="navigation__dot--border"></div>
                    <div className="navigation__section-name">Contact</div>
                </a>
            </div>
        )
    }
}

export default Navigation;