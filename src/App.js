import React, { Component } from 'react';
import { Header, Home, Contact, Navigation } from './components/index';
import ScrollableAnchor from 'react-scrollable-anchor'

class App extends Component {
    render() {
        return (
            <div>
                <Header/>

                <Navigation/>

                <ScrollableAnchor id={'home'}>
                    <Home/>
                </ScrollableAnchor>

                {/*<ScrollableAnchor id={'about-me'}>*/}

                {/*</ScrollableAnchor>*/}

                {/*<ScrollableAnchor id={'products'}>*/}

                {/*</ScrollableAnchor>*/}

                {/*<ScrollableAnchor id={'reviews'}>*/}

                {/*</ScrollableAnchor>*/}

                <ScrollableAnchor id={'contact'}>
                    <Contact/>
                </ScrollableAnchor>
            </div>
        )
    }
}

export default App;
