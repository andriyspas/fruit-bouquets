import React, { Component } from 'react';
import Scroll from 'react-scroll';

let Link = Scroll.Link;
let scroll = Scroll.animateScroll;

class Navigation extends Component {
    constructor(){
        super();

        this.state = {
            active: 'home'
        }
    }

    scrollToTop = () => {
        scroll.scrollToTop();
    };

    handleSetActive = (to) => {
        this.setState({ active: to })
    };

    handelHeightViewport = () => {
        return (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight) / 2 * (-1);
    };

    render() {

        return (
            <div className="navigation">
                <Link
                    to="home"
                    activeClass="navigation__href--active"
                    spy={ true }
                    smooth={ true }
                    duration={ 500 }
                    onSetActive={ this.handleSetActive }
                    className="navigation__href"
                >
                    <div className="navigation__dot"></div>
                    <div className="navigation__dot--border"></div>
                    <div className="navigation__section-name">Home</div>
                </Link>

                <Link
                    to="reviews"
                    activeClass="navigation__href--active"
                    spy={ true }
                    smooth={ true }
                    duration={ 500 }
                    offset={ this.handelHeightViewport() }
                    onSetActive={ this.handleSetActive }
                    className="navigation__href"
                >
                    <div className="navigation__dot"></div>
                    <div className="navigation__dot--border"></div>
                    <div className="navigation__section-name">Reviews</div>
                </Link>

                <Link
                    to="sale"
                    activeClass="navigation__href--active"
                    spy={ true }
                    smooth={ true }
                    duration={ 500 }
                    offset={ this.handelHeightViewport() }
                    className="navigation__href"
                    onSetActive={ this.handleSetActive }
                >
                    <div className="navigation__dot"></div>
                    <div className="navigation__dot--border"></div>
                    <div className="navigation__section-name">Sale</div>
                </Link>

                <Link
                    to="contact"
                    activeClass="navigation__href--active"
                    spy={ true }
                    smooth={ true }
                    duration={ 500 }
                    offset={ this.handelHeightViewport() }
                    className="navigation__href"
                    onSetActive={ this.handleSetActive }
                >
                    <div className="navigation__dot"></div>
                    <div className="navigation__dot--border"></div>
                    <div className="navigation__section-name">Contact</div>
                </Link>

                {/*<a onClick={ this.scrollTo } className="navigation__href">*/}
                    {/*<div className="navigation__dot"></div>*/}
                {/*</a>*/}

            </div>
        );
    }
}

export default Navigation;