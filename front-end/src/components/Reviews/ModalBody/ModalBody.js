import React, { Component } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { Modal, Form, FormGroup, FormControl, Row, Col } from 'react-bootstrap';

class ModalBody extends Component {
    constructor() {
        super();

        this.state = {
            captchaValue: '',
            name: '',
            city: '',
            message: ''
        }
    };

    validateField = (value) => {
        return value !== '' && value !== undefined;
    };

    fieldValid = () => {
        return this.validateField(this.state.name) && this.validateField(this.state.message) && this.state.captchaValue
    };

    handleNameChange = (event) => {
        this.setState({name: event.target.value})
    };

    handleMessageChange = (event) => {
        this.setState({message: event.target.value})
    };

    onChange = (value) => {
        this.setState({captchaValue: value});
    };

    submitReview = () => {
        let data = {
            name: this.state.name,
            city: this.state.city,
            message: this.state.message,
            date_post: new Date(),
            recaptcha: this.state.captchaValue
        };

        fetch('http://localhost:8080/api/reviews',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', 'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(res => this.setState({ captchaValue: res.success }))
    };

    render() {
        return (
            <Modal.Body className="clearfix form">
                <Form autoComplete="off" onSubmit={ this.submitReview }>
                    <Row>
                        <Col xs={12}>
                            <FormGroup controlId="name">
                                <FormControl
                                    type="text"
                                    placeholder="Full name"
                                    onChange={ this.handleNameChange }
                                />
                            </FormGroup>
                        </Col>

                        <Col xs={12}>
                            <FormGroup controlId="city">

                                <FormControl
                                    type="text"
                                    placeholder="City"
                                />
                            </FormGroup>
                        </Col>

                        <Col xs={12}>
                            <FormGroup controlId="message">
                                <FormControl
                                    componentClass="textarea"
                                    placeholder="Message"
                                    onChange={ this.handleMessageChange }
                                />
                            </FormGroup>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={12}>
                            <ReCAPTCHA
                                className="pull-right recaptcha"
                                ref="recaptcha"
                                sitekey="6LePfiwUAAAAAMtjzN666LlPkICwKkf4gaM_MQp9"
                                onChange={ this.onChange }
                            />

                        </Col>
                    </Row>

                    <Row>
                        <Col xs={12}>
                            <button
                                className="button pull-right"
                                type="submit"
                                disabled={ !this.fieldValid() }
                            >
                                { this.props.addReview }
                            </button>

                        </Col>
                    </Row>

                </Form>
            </Modal.Body>
        )
    }
}


export default ModalBody;