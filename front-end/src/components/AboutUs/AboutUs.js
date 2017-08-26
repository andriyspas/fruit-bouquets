import React, {Component} from 'react';
import {Parallax, Background} from 'react-parallax';
import {Grid, Row, Col}  from 'react-bootstrap';

import VisibilitySensor from 'react-visibility-sensor';

class AboutUs extends Component {
    constructor() {
        super();

        this.state = {
            visibility: false
        }
    }

    handleOnChange = (isVisible) => {
        this.setState({visibility: isVisible});
    };

    render() {
        return (
            <section className={ "about-us " + (this.state.visibility ? 'active' : 'inactive')}>
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
                                    <div className="round-item__wrapper">
                                        <div className="round-item">
                                            <div className="round-item__image--wrapper">
                                                <div className="round-item__image">
                                                    <img src={require('../../images/money-bag.svg')} alt=""/>
                                                </div>
                                            </div>

                                            <div className="round-item__description--wrapper">
                                                <div className="round-item__description">
                                                    <div className="round-item__name">Unique Design</div>
                                                    <div className="round-item__details">
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                        eiusmod
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="round-item__wrapper">
                                        <div className="round-item">
                                            <div className="round-item__image--wrapper">
                                                <div className="round-item__image">
                                                    <img src={require('../../images/idea.svg')} alt=""/>
                                                </div>
                                            </div>

                                            <div className="round-item__description--wrapper">
                                                <div className="round-item__description">
                                                    <div className="round-item__name">Great Ideas</div>
                                                    <div className="round-item__details">
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                        eiusmod
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="round-item__wrapper">
                                        <div className="round-item">
                                            <div className="round-item__image--wrapper">
                                                <div className="round-item__image">
                                                    <img src={require('../../images/money-bag.svg')} alt=""/>
                                                </div>
                                            </div>

                                            <div className="round-item__description--wrapper">
                                                <div className="round-item__description">
                                                    <div className="round-item__name">24/7 Support</div>
                                                    <div className="round-item__details">
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                        eiusmod
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Grid>
                    </div>
                </Parallax>

                <VisibilitySensor onChange={ this.handleOnChange } intervalDelay={ 0 }>
                    <div className="detect__position"></div>
                </VisibilitySensor>
            </section>
        )
    }
}

export default AboutUs;
