import React, {Component} from 'react'
import Swiper from 'react-id-swiper'
import {Grid, Row, Col} from 'react-bootstrap';

class Reviews extends Component {
    render() {
        const params = {
            loop: true,
            autoplay: 4000,
            autoplayDisableOnInteraction: false,
            spaceBetween: 30
        };

        const text = 'Lorem Ipsum is simply dummy text of the printing and ' +
            'typesetting industry. Lorem Ipsum has been the industrys standard dummy' +
            ' text ever since the 1500s, when an unknown printer took a galley of type and' +
            ' scrambled it to make a type specimen book. It has survived not only five centuries, ' +
            'but also the leap into electronic typesetting, remaining essentially unchanged.';

        return (
            <section className="reviews">
                <Grid>
                    <Row>
                        <Col xs={12}>
                            <button className="button">Add review</button>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <Swiper { ...params }>
                                <div>
                                    <div className="reviews__single">
                                        <div className="reviews__description">{text}</div>
                                        <div className="reviews__person">Name Surname</div>
                                    </div>
                                </div>
                                <div>
                                    <div className="reviews__single">
                                        <div className="reviews__description">{text}</div>
                                        <div className="reviews__person">Name Surname</div>
                                    </div>
                                </div>
                                <div>
                                    <div className="reviews__single">
                                        <div className="reviews__description">{text}</div>
                                        <div className="reviews__person">Name Surname</div>
                                    </div>
                                </div>
                                <div>
                                    <div className="reviews__single">
                                        <div className="reviews__description">{text}</div>
                                        <div className="reviews__person">Name Surname</div>
                                    </div>
                                </div>
                                <div>
                                    <div className="reviews__single">
                                        <div className="reviews__description">{text}</div>
                                        <div className="reviews__person">Name Surname</div>
                                    </div>
                                </div>
                            </Swiper>
                        </Col>
                    </Row>
                </Grid>
            </section>
        )
    }
}

export default Reviews;