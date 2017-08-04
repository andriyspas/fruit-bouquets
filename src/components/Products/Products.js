import React, { Component } from 'react';
import Swiper from 'react-id-swiper'
import {Grid, Row, Col} from 'react-bootstrap';

class Products extends Component {

    render() {
        const params = {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            paginationBulletRender: (swiper, index, className) => {
                return '<span class="' + className + '">' + (index + 1) + '</span>';
            },
            slidesPerView: 3,
            slidesPerColumn: 3,
            breakpoints: {
                992: {
                    slidesPerView: 2,
                    slidesPerColumn: 2,
                },
                768: {
                    slidesPerView: 1,
                    slidesPerColumn: 2,
                },
            }
        };

        return (
            <section className="products">
                <Grid>
                    <Row>
                        <Col sm={12}>
                            <Swiper { ...params }>
                                <div>
                                    <div className="products__tile">
                                        test
                                    </div>
                                </div>
                                <div>
                                    <div className="products__tile">
                                        test
                                    </div>
                                </div>
                                <div>
                                    <div className="products__tile">
                                        test
                                    </div>
                                </div>
                                <div>
                                    <div className="products__tile">
                                        test
                                    </div>
                                </div>
                                <div>
                                    <div className="products__tile">
                                        test
                                    </div>
                                </div>
                                <div>
                                    <div className="products__tile">
                                        test
                                    </div>
                                </div>
                                <div>
                                    <div className="products__tile">
                                        test
                                    </div>
                                </div>
                                <div>
                                    <div className="products__tile">
                                        test
                                    </div>
                                </div>
                                <div>
                                    <div className="products__tile">
                                        test
                                    </div>
                                </div>
                                <div>
                                    <div className="products__tile">
                                        test
                                    </div>
                                </div>
                                <div>
                                    <div className="products__tile">
                                        test
                                    </div>
                                </div>
                                <div>
                                    <div className="products__tile">
                                        test
                                    </div>
                                </div>
                                <div>
                                    <div className="products__tile">
                                        test
                                    </div>
                                </div>
                                <div>
                                    <div className="products__tile">
                                        test
                                    </div>
                                </div>
                                <div>
                                    <div className="products__tile">
                                        test
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

export default Products;