import React, { Component } from 'react';
import Swiper from 'react-id-swiper'
import { Grid, Row, Col } from 'react-bootstrap';
import ModalStructure from  '../Modal/Modal';

const Description = {
    buttonAdd: 'View details',
    buttonClose: 'Close'
};

const ClassName = 'products__tile--plug';

class Products extends Component {
    render() {
        const params = {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            paginationBulletRender: (swiper, index, className) => {
                return '<span class="' + className + '">' + (index + 1) + '</span>';
            },
            paginationType: 'fraction',
            slidesPerView: 3,
            slidesPerColumn: 3,
            breakpoints: {
                1200: {
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
                                        <img src={require('../../images/bouquet_simple.jpg')} alt=""/>
                                        <ModalStructure description={ Description } className={ ClassName }/>
                                    </div>
                                </div>
                                <div>
                                    <div className="products__tile">
                                        <img src={require('../../images/bouquet_simple.jpg')} alt=""/>
                                        <ModalStructure description={ Description } className={ ClassName }/>
                                    </div>
                                </div>
                                <div>
                                    <div className="products__tile">
                                        <img src={require('../../images/bouquet_simple.jpg')} alt=""/>
                                        <ModalStructure description={ Description } className={ ClassName }/>
                                    </div>
                                </div>
                                <div>
                                    <div className="products__tile">
                                        <img src={require('../../images/bouquet_simple.jpg')} alt=""/>
                                        <ModalStructure description={ Description } className={ ClassName }/>
                                    </div>
                                </div>
                                <div>
                                    <div className="products__tile">
                                        <img src={require('../../images/bouquet_simple.jpg')} alt=""/>
                                        <ModalStructure description={ Description } className={ ClassName }/>
                                    </div>
                                </div>
                                <div>
                                    <div className="products__tile">
                                        <img src={require('../../images/bouquet_simple.jpg')} alt=""/>
                                        <ModalStructure description={ Description } className={ ClassName }/>
                                    </div>
                                </div>
                                <div>
                                    <div className="products__tile">
                                        <img src={require('../../images/bouquet_simple.jpg')} alt=""/>
                                        <ModalStructure description={ Description } className={ ClassName }/>
                                    </div>
                                </div>
                                <div>
                                    <div className="products__tile">
                                        <img src={require('../../images/bouquet_simple.jpg')} alt=""/>
                                        <ModalStructure description={ Description } className={ ClassName }/>
                                    </div>
                                </div>
                                <div>
                                    <div className="products__tile">
                                        <img src={require('../../images/bouquet_simple.jpg')} alt=""/>
                                        <ModalStructure description={ Description } className={ ClassName }/>
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