import React, { Component } from 'react'
import Video from './Video/Video';
import { Grid, Row, Col } from 'react-bootstrap';

class Home extends Component {
    render() {
        return (
            <section className="home">
                <Video/>

                <Grid fluid>
                    <Row>
                        <Col xs={12}>

                        </Col>
                    </Row>
                </Grid>
            </section>
        )
    }
}

export default Home;