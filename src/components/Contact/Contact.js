import React, { Component } from 'react';
import Map from './Map/Map';
import { Grid, Row, Col } from 'react-bootstrap';

class Contact extends Component {
    render() {
        return (
            <Grid fluid>
                <Row>
                    <Col xs={12}>
                        <Row>
                            <Col xs={6}>

                            </Col>

                            <Col xs={6}>

                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Map/>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default Contact;