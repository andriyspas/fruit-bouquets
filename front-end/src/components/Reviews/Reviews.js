import React, { Component } from 'react'
import Swiper from 'react-id-swiper'
import { Grid, Row, Col } from 'react-bootstrap';
import ModalStructure from  '../Modal/Modal';
import ModalBody from './ModalBody/ModalBody'

const Description = {
    addReview: 'Submit review',
    openModal: 'Add review',
};
const ClassName = 'reviews__modal';
const ModalWindow = <ModalBody addReview={ Description.addReview }/>;

class Reviews extends Component {
    constructor() {
        super();

        this.state = {
            reviews: []
        };
    }

    getReviews = () => {
        fetch('http://localhost:8080/api/reviews',
            {
                method: 'GET',
            })
            .then(res => res.json())
            .then(res => { this.setState({ reviews: res.data }) })
    };

    componentDidMount() {
        this.getReviews();
    };

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

        console.log(this.state.reviews);

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
                                    {
                                        this.state.reviews.map((item, index) => (
                                            <div key={ index }>
                                                <div className="reviews__single">
                                                    <div className="reviews__person">{ item.name }</div>
                                                    <div className="reviews__description">{ item.message }</div>
                                                    <div className="reviews__date">{ item.date_post }</div>
                                                </div>
                                            </div>
                                        ))
                                    }
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