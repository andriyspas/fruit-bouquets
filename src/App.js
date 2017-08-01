import React, { Component } from 'react';
import { Header } from './components/index';

import Scroll from 'react-scroll';
let Element = Scroll.Element;

class App extends Component {
    render() {
        return (
            <div>
                <Header/>

                <Element name="test1" className="element">
                    test 1
                </Element>

                <Element name="test2" className="element">
                    test 2
                </Element>

                <Element name="test3" className="element">
                    test 3 (anchor)
                </Element>
            </div>
        )
    }
}

export default App;
