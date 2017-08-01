import React, { Component } from 'react';
import Scroll from 'react-scroll';

let Link = Scroll.Link;

let scroll = Scroll.animateScroll;

class Header extends Component {

    constructor() {
        super();
    }

    scrollToTop = () => {
        scroll.scrollToTop();
    };

    render() {
        return (
            <div style={{ position : 'fixed' }}>
                <Link activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
                    Test 1
                </Link>

                <Link activeClass="active" to="test2" spy={true} smooth={true} offset={50} duration={500}>
                    Test 2 (delay)
                </Link>

                <Link activeClass="active" to="test3" spy={true} smooth={true} offset={50} duration={500}>
                    Test 3 (anchor)
                </Link>

                <a onClick={ this.scrollToTop }>To the top!</a>
            </div>
        );
    }
}

export default Header;