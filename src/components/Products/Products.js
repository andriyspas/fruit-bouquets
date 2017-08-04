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
            spaceBetween: 30
        };

        return (
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
        )
    }
}

export default Products;