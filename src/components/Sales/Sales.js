import React, { Component } from 'react';
import { Parallax, Background } from 'react-parallax';

class Sales  extends Component {
    render () {
        return (
            <div className="sales">
                <Parallax strength={100}>
                    <Background>
                        <img src={require('../../images/bouquet.jpg')}/>
                    </Background>

                    <div className="sales__content">
                        <div className="sales__round"></div>
                        <div className="sales__round"></div>
                        <div className="sales__round"></div>
                    </div>
                </Parallax>
            </div>
        )
    }
}

export default Sales;
