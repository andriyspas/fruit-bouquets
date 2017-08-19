import React, { Component } from 'react'
import Swiper from 'react-id-swiper'
import { Grid, Row, Col } from 'react-bootstrap';
import ModalStructure from  '../Modal/Modal';
import ModalBody from './ModalBody/ModalBody'
import Moment from 'react-moment';

const Description = {
    addReview: 'Submit review',
    openModal: 'Add review',
    title: 'Leave your review'
};
const ClassName = 'reviews__modal';
const ModalWindow = <ModalBody addReview={ Description.addReview }/>;

class Reviews extends Component {
    constructor() {
        super();

        this.state = {
            reviews: []
        };

        this.getReviews();
    }

    getReviews = () => {
        fetch('http://localhost:8080/api/reviews',
            {
                method: 'GET',
            })
            .then(res => res.json())
            .then(res => { this.setState({ reviews: res.data }) })
    };

    render() {
        const params = {
            loop: true,
            autoplay: 4000,
            autoplayDisableOnInteraction: false,
            spaceBetween: 30
        };

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
                                {
                                    this.state.reviews.length !== 0 &&
                                    <Swiper { ...params }>
                                        {
                                            this.state.reviews.map((item, index) => (
                                                <div key={ index }>
                                                    <div className="reviews__single">
                                                        <div className="reviews__person">{ item.name }</div>
                                                        <div className="reviews__description">{ item.message }</div>
                                                        <div className="reviews__date">
                                                            <Moment format="MMMM / DD / YYYY">{ item.date_post }</Moment>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </Swiper>
                                }
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