import React, { Component } from 'react';
import { Parallax, Background } from 'react-parallax';
import { Grid, Row, Col } from 'react-bootstrap'

class Sales extends Component {
    render() {
        return (
            <div className="sales">
                <Parallax strength={300} bgHeight='100%'>
                    <Background>
                        <img src={require('../../images/bouquet.jpg')}/>
                    </Background>

                    <div className="sales__content">
                        <Grid>
                            <Row>
                                <Col xs={12}>
                                    <div className="sales__title">Sales</div>
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

                                            <div className="round-item__description">
                                                <div className="round-item__name">Lorem ipsum</div>
                                                <div className="round-item__details">Lorem ipsum doloresm test big
                                                    name
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="round-item__wrapper">
                                        <div className="round-item">
                                            <div className="round-item__image--wrapper">
                                                <div className="round-item__image">
                                                    <img src={require('../../images/piggy-bank.svg')} alt=""/>
                                                </div>
                                            </div>

                                            <div className="round-item__description">
                                                <div className="round-item__name">Lorem ipsum</div>
                                                <div className="round-item__details">Lorem ipsum doloresm test big
                                                    name
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="round-item__wrapper">
                                        <div className="round-item">
                                            <div className="round-item__image--wrapper">
                                                <div className="round-item__image">
                                                    <img src={require('../../images/price-tag.svg')} alt=""/>
                                                </div>
                                            </div>

                                            <div className="round-item__description">
                                                <div className="round-item__name">Lorem ipsum</div>
                                                <div className="round-item__details">Lorem ipsum doloresm test big
                                                    name
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

export default Sales;
