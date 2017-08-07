import React, { Component } from 'react';
import Map from './Map/Map';
import { Grid, Row, Col, Form, FormGroup, FormControl } from 'react-bootstrap';

class Contact extends Component {
    constructor() {
        super();

        this.state = {
            visibility: false
        }
    }

    // toggleClass = () => {
    //     const currentState = this.state.visibility;
    //     this.setState({ visibility: !currentState });
    // };

    render() {
        return (
            <section className="contact">
                <Grid>
                    <Row bsClass="row contact__details">
                        <Col xs={12}>
                            <Row>
                                <Col xs={12} sm={6}>
                                    <div className="contact__title">Contact us</div>

                                    <div className="contact__information">
                                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </span>
                                        <a href="mailto:test@test.com">test@test.com</a>
                                        <span> incididunt ut labore et dolore magna aliqua.</span>
                                    </div>

                                    <h4>Company Name</h4>

                                    <Row className="contact__address">
                                        <Col xs={4}>
                                            Address:
                                        </Col>
                                        <Col xs={8}>
                                            <div>871 Seventh Avenue at 55th Street</div>
                                            <div>New York, NY 10019 - USA</div>
                                        </Col>
                                    </Row>

                                    <Row className="contact__phone">
                                        <Col xs={4}>
                                            Phone:
                                        </Col>
                                        <Col xs={8}>
                                            <div>+38 999 999 99 88</div>
                                            <div>+38 999 999 99 88</div>
                                        </Col>
                                    </Row>

                                    <Row className="contact__email">
                                        <Col xs={4}>
                                            E-mail:
                                        </Col>
                                        <Col xs={8}>
                                            <a href="mailto:test@test.com">test@test.com</a>
                                        </Col>
                                    </Row>
                                </Col>

                                <Col xs={12} sm={6}>
                                    <div className="contact__title">Contact Form</div>

                                    <Form autoComplete="off" className="form contact__form">
                                        <Row>
                                            <Col xs={12} md={6}>
                                                <FormGroup controlId="nameText">
                                                    <FormControl
                                                        type="text"
                                                        placeholder="Name"
                                                    />
                                                </FormGroup>
                                            </Col>

                                            <Col xs={12} md={6}>
                                                <FormGroup controlId="surnameText">
                                                    <FormControl
                                                        type="text"
                                                        placeholder="Surname"
                                                    />
                                                </FormGroup>

                                            </Col>

                                            <Col xs={12} md={6}>
                                                <FormGroup controlId="phoneText">
                                                    <FormControl
                                                        type="text"
                                                        placeholder="Phone"
                                                    />
                                                </FormGroup>
                                            </Col>

                                            <Col xs={12} md={6}>
                                                <FormGroup controlId="emailText">
                                                    <FormControl
                                                        type="email"
                                                        placeholder="Email"
                                                    />
                                                </FormGroup>
                                            </Col>

                                            <Col xs={12}>
                                                <FormGroup controlId="messageText">
                                                    <FormControl
                                                        componentClass="textarea"
                                                        maxLength="1000"
                                                        placeholder="Message"
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>

                                        <Row className={ this.state.visibility ? 'hide__button': null } >
                                            <Col xs={12}>
                                                <button
                                                    className="button pull-right"
                                                    type="submit"
                                                >
                                                    Send e-mail
                                                </button>
                                            </Col>
                                        </Row>
                                    </Form>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Grid>

                <div className="contact__map">
                    <Map/>
                </div>
            </section>
        )
    }
}

export default Contact;