import React, { Component } from 'react';
import Video from './Video/Video';

class Home extends Component {
    render() {
        return (
            <section className="home">
                <Video/>

                <div className="home__logo">
                    <img src={require('../../images/flower-bouquet.svg')} alt="" width='50px'/>
                    <div className="home__name">bouquets of fruits</div>
                    <div className="home__title">When an unknown printer. Took a galley of type</div>
                </div>

                <div className="home__scroll-mouse"></div>
            </section>
        )
    }
}

export default Home;