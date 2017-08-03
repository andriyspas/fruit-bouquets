import React, { Component } from 'react';
import { Header, Home, Contact, Navigation, Reviews } from './components/index';

import Scroll from 'react-scroll';
let Element    = Scroll.Element;

class App extends Component {
    render() {
        return (
            <div>
                <Header/>

                <Navigation/>

                <Element name="home">
                    <Home/>
                </Element>

                <Element name="reviews">
                    <Reviews/>
                </Element>

                <Element name="contact">
                    <Contact/>
                </Element>

            </div>
        )
    }
}

export default App;
