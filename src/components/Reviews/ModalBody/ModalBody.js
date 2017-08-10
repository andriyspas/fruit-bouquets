import React, { Component } from 'react';
import { Modal, Form, FormGroup, FormControl, Row, Col } from 'react-bootstrap';

class ModalBody extends Component {
    render() {
        return (
            <Modal.Body className="clearfix form">
                <Form autoComplete="off">
                    <Row>
                        <Col xs={12}>
                            <FormGroup controlId="nameText">
                                <FormControl
                                    type="text"
                                    placeholder="Name"
                                />
                            </FormGroup>
                        </Col>

                        <Col xs={12}>
                            <FormGroup controlId="cityText">

                                <FormControl
                                    type="text"
                                    placeholder="City"
                                />
                            </FormGroup>
                        </Col>

                        <Col xs={12}>
                            <FormGroup controlId="messageText">
                                <FormControl
                                    componentClass="textarea"
                                    placeholder="Message"
                                />
                            </FormGroup>
                        </Col>
                    </Row>

                    <button
                        className="button pull-right"
                        type="submit"
                    >
                        { this.props.addReview }
                    </button>
                </Form>
            </Modal.Body>
        )
    }
}


export default ModalBody;