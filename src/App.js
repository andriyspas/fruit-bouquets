import React, { Component } from 'react';
import { Header } from './components/index';
import ScrollableAnchor from 'react-scrollable-anchor'

class App extends Component {
    render() {
        return (
            <div>
                <Header/>

                <ScrollableAnchor id={'home'}>
                    <div style={{height: '500px', padding: '25px 85px', backgroundColor: 'red'}}> Hello World </div>
                </ScrollableAnchor>

                <ScrollableAnchor id={'about-me'}>
                    <div style={{height: '500px', padding: '25px 85px', backgroundColor: 'yellow'}}> How are you world? </div>
                </ScrollableAnchor>

                <ScrollableAnchor id={'products'}>
                    <div style={{height: '500px', padding: '25px 85px', backgroundColor: 'yellow'}}> How are you world? </div>
                </ScrollableAnchor>

                <ScrollableAnchor id={'reviews'}>
                    <div style={{height: '500px', padding: '25px 85px', backgroundColor: 'yellow'}}> How are you world? </div>
                </ScrollableAnchor>

                <ScrollableAnchor id={'contact'}>
                    <div style={{height: '500px', padding: '25px 85px', backgroundColor: 'yellow'}}> How are you world? </div>
                </ScrollableAnchor>
            </div>
        )
    }
}

export default App;
