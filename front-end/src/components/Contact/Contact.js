import React, { Component } from 'react';
import Map from './Map/Map';
import Notification from '../Notification/Notification';
import ReCAPTCHA from 'react-google-recaptcha';
import { Grid, Row, Col, Form, FormGroup, FormControl } from 'react-bootstrap';

class Contact extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            surname: '',
            phone: '',
            email: '',
            message: '',
            visibility: false,
            success: false,
            error: false,
            submitted: false,
            captchaValid: false
        }
    }

    validateField = (value) => {
        return value !== '' && value !== undefined;
    };

    validateFieldEmail = (email) => {
        let regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        return regex.test(email);
    };

    validateFieldPhone = (phone) => {
        if(phone !== '' && phone !== undefined) {
            let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
            return regex.test(phone);
        } else {
            return false;
        }
    };

    fieldValid = () => {
        return this.validateFieldEmail(this.state.email) && this.validateField(this.state.name) && this.validateField(this.state.message) && this.validateFieldPhone(this.state.phone) && this.state.captchaValid
    };

    handleNameChange = (event) => {
        this.setState({name: event.target.value})
    };

    handleSurnameChange = (event) => {
        this.setState({surname: event.target.value})
    };

    handlePhoneChange = (event) => {
        this.setState({phone: event.target.value})
    };

    handleEmailChange = (event) => {
        this.setState({email: event.target.value})
    };

    handleMessageChange = (event) => {
        this.setState({message: event.target.value})
    };

    handleHiddenButton = () => {
        const currentState = this.state.visibility;
        this.setState({ visibility: !currentState });
    };

    sendEmail = (e) => {
        this.handleHiddenButton();

        fetch('https://script.google.com/macros/s/AKfycbyJHc7kems_1GwmiIXGZhirbteTfDtSZzSyELx6BfCbbfj7h-Y/exec?' +
            'name=' + this.state.name +
            '&mail=' + this.state.email +
            '&message=' + this.state.message +
            '&surname=' + this.state.surname +
            '&phone=' + this.state.phone,
            { method: 'GET' })
            .then((res) => {
                if(res.status === 200) {
                    this.setState({ success: true, submitted: true, });
                    this.handleHiddenButton();
                } else {
                    this.setState({ error: true, submitted: true, });
                }

                this.setState({
                    success: false,
                    name: '',
                    surname: '',
                    phone: '',
                    email: '',
                    message: '',
                    submitted: false,
                });
            });

        e.preventDefault();
    };

    onChange = (value) => {
        let data = { recaptcha: value };

        fetch('http://localhost:8080/api/captcha',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', 'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(res => this.setState({captchaValid: res.success}))
    };

    render() {
        return (
            <section className="contact">
                <Grid>
                    <Row>
                        <Col xs={12}>
                            <div className="contact__title">Contact</div>
                        </Col>
                    </Row>

                    <Row bsClass="row contact__details">
                        <Col xs={12}>
                            <Row>
                                <Col xs={12} sm={6}>
                                    <div className="contact__subtitle">Contact us</div>

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
                                    <div className="contact__subtitle">Contact Form</div>

                                    <Form autoComplete="off" className="form contact__form" onSubmit={ this.sendEmail }>
                                        <Row>
                                            <Col xs={12} md={6}>
                                                <FormGroup controlId="nameText">
                                                    <FormControl
                                                        type="text"
                                                        placeholder="Name"
                                                        value={ this.state.name }
                                                        onChange={ this.handleNameChange }
                                                    />
                                                </FormGroup>
                                            </Col>

                                            <Col xs={12} md={6}>
                                                <FormGroup controlId="surnameText">
                                                    <FormControl
                                                        type="text"
                                                        placeholder="Surname"
                                                        value={ this.state.surname }
                                                        onChange={ this.handleSurnameChange }
                                                    />
                                                </FormGroup>

                                            </Col>

                                            <Col xs={12} md={6}>
                                                <FormGroup controlId="phoneText">
                                                    <FormControl
                                                        type="text"
                                                        placeholder="Phone"
                                                        value={ this.state.phone }
                                                        onChange={ this.handlePhoneChange }
                                                    />
                                                </FormGroup>
                                            </Col>

                                            <Col xs={12} md={6}>
                                                <FormGroup controlId="emailText">
                                                    <FormControl
                                                        type="email"
                                                        placeholder="Email"
                                                        value={ this.state.email }
                                                        onChange={ this.handleEmailChange }
                                                    />
                                                </FormGroup>
                                            </Col>

                                            <Col xs={12}>
                                                <FormGroup controlId="messageText">
                                                    <FormControl
                                                        componentClass="textarea"
                                                        maxLength="1000"
                                                        placeholder="Message"
                                                        value={ this.state.message }
                                                        onChange={ this.handleMessageChange }
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>

                                        <Row className={ this.state.visibility ? 'button__hidden' : null }>
                                            <script src='https://www.google.com/recaptcha/api.js' async></script>

                                            <ReCAPTCHA
                                                ref="recaptcha"
                                                sitekey="6LePfiwUAAAAAMtjzN666LlPkICwKkf4gaM_MQp9"
                                                onChange={ this.onChange }
                                            />

                                            <Col xs={12}>
                                                <button
                                                    className="button pull-right"
                                                    type="submit"
                                                    disabled={ !this.fieldValid() }
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

                <Notification
                    success={ this.state.success }
                    error={ this.state.error }
                    submitted={ this.state.submitted }
                />
            </section>
        )
    }
}

export default Contact;