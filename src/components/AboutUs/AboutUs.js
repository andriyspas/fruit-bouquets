import React, {Component} from 'react';
import {Parallax, Background} from 'react-parallax';
import {Grid, Row, Col}  from 'react-bootstrap'

class AboutUs extends Component {
    render() {
        return (
            <div className="about-us">
                <Parallax strength={300} bgHeight='100%'>
                    <Background>
                        <img src={require('../../images/bouquet.jpg')}/>
                    </Background>

                    <div className="about-us__content">
                        <Grid>
                            <Row>
                                <Col xs={12}>
                                    <div className="about-us__title">About Us</div>
                                    <div className="about-us__description">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing
                                        elit, sed do eiusmod ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                        eiusmod ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod ipsum
                                        dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs={12}>
                                    <div className="about-us__single--wrapper">
                                        <div className="about-us__single">
                                            <div className="about-us__round--wrapper">
                                                <div className="about-us__round">
                                                    <img src={require('../../images/money-bag.svg')} alt=""/>
                                                </div>
                                            </div>

                                            <div className="about-us__description">
                                                <div className="about-us__name">24/7 Support</div>
                                                <div className="about-us__details">Lorem ipsum dolor sit amet,
                                                    consectetur adipisicing elit, sed do eiusmod
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="about-us__single--wrapper">
                                        <div className="about-us__single">
                                            <div className="about-us__round--wrapper">
                                                <div className="about-us__round">
                                                    <img src={require('../../images/piggy-bank.svg')} alt=""/>
                                                </div>
                                            </div>

                                            <div className="about-us__description">
                                                <div className="about-us__name">Great Ideas</div>
                                                <div className="about-us__details">Lorem ipsum dolor sit amet,
                                                    consectetur adipisicing elit, sed do eiusmod
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="about-us__single--wrapper">
                                        <div className="about-us__single">
                                            <div className="about-us__round--wrapper">
                                                <div className="about-us__round">
                                                    <img src={require('../../images/price-tag.svg')} alt=""/>
                                                </div>
                                            </div>

                                            <div className="about-us__description">
                                                <div className="about-us__name">Unique Design</div>
                                                <div className="about-us__details">Lorem ipsum dolor sit amet,
                                                    consectetur adipisicing elit, sed do eiusmod /div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Grid>
                    </div>
                </Parallax>
            </div>
        )
    }
}

export default AboutUs;
