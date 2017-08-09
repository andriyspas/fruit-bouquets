import React, {Component} from 'react';
import {Parallax, Background} from 'react-parallax';

class Sales extends Component {
    render() {
        return (
            <div className="sales">
                <Parallax strength={100} bgHeight='100%'>
                    <Background>
                        <img src={require('../../images/bouquet.jpg')}/>
                    </Background>

                    <div className="sales__content">

                        <div className="sales__single">
                            <div className="sales__round--wrapper">
                                <div className="sales__round">
                                    <img src={require('../../images/money-bag.svg')} alt=""/>
                                </div>
                            </div>
                            <div>
                                <div className="sales__name">Lorem ipsum</div>
                                <div className="sales__details">Lorem ipsum doloresm test big name</div>
                            </div>
                        </div>

                        <div className="sales__single">
                            <div className="sales__round--wrapper">
                                <div className="sales__round">
                                    <img src={require('../../images/piggy-bank.svg')} alt=""/>
                                </div>
                            </div>
                            <div>
                                <div className="sales__name">Lorem ipsum</div>
                                <div className="sales__details">Lorem ipsum doloresm test big name</div>
                            </div>
                        </div>

                        <div className="sales__single">
                            <div className="sales__round--wrapper">
                                <div className="sales__round">
                                    <img src={require('../../images/price-tag.svg')} alt=""/>
                                </div>
                            </div>
                            <div>
                                <div className="sales__name">Lorem ipsum</div>
                                <div className="sales__details">Lorem ipsum doloresm test big name</div>
                            </div>
                        </div>
                    </div>
                </Parallax>
            </div>
        )
    }
}

export default Sales;
