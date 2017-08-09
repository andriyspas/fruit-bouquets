import React, { Component } from 'react'
import Swiper from 'react-id-swiper'
import { Grid, Row, Col } from 'react-bootstrap';
import ModalStructure from  '../Modal/Modal';
import ModalBody from './ModalBody/ModalBody'

const Description = {
    buttonAdd: 'Add review',
    buttonClose: 'Close'
};
const ClassName = 'reviews__modal';
const ModalWindow = <ModalBody buttonClose={ Description.buttonClose }/>;

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
                            <div className="reviews__title">Testimonials</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <div className="reviews__slider">
                                <Swiper { ...params }>
                                    <div>
                                        <div className="reviews__single">
                                            <div className="reviews__person">Name Surname</div>
                                            <div className="reviews__description">{text}</div>
                                            <div className="reviews__date">January 28, 2016</div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="reviews__single">
                                            <div className="reviews__person">Name Surname</div>
                                            <div className="reviews__description">{text}</div>
                                            <div className="reviews__date">January 28, 2016</div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="reviews__single">
                                            <div className="reviews__person">Name Surname</div>
                                            <div className="reviews__description">{text}</div>
                                            <div className="reviews__date">January 28, 2016</div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="reviews__single">
                                            <div className="reviews__person">Name Surname</div>
                                            <div className="reviews__description">{text}</div>
                                            <div className="reviews__date">January 28, 2016</div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="reviews__single">
                                            <div className="reviews__person">Name Surname</div>
                                            <div className="reviews__description">{text}</div>
                                            <div className="reviews__date">January 28, 2016</div>
                                        </div>
                                    </div>
                                </Swiper>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <ModalStructure description={ Description } className={ ClassName } modalBody={ ModalWindow }/>
                        </Col>
                    </Row>
                </Grid>
            </section>
        )
    }
}

export default Reviews;