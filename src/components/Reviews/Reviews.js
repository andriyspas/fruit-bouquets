import React, { Component } from 'react'
import Swiper from 'react-id-swiper'
import { Grid, Row, Col } from 'react-bootstrap';

class Reviews extends Component {
    render() {
        const params = {
            loop: true,
            autoplay: 2500,
            autoplayDisableOnInteraction: false,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            spaceBetween: 30
        };

        return (
            <section className="reviews">
                <Grid>
                    <Row>
                        <Col sm={12}>
                            <Swiper { ...params }>
                                <div>Slide 1</div>
                                <div>Slide 2</div>
                                <div>Slide 3</div>
                                <div>Slide 4</div>
                                <div>Slide 5</div>
                            </Swiper>
                        </Col>
                    </Row>
                </Grid>
            </section>
        )
    }
}

export default Reviews;