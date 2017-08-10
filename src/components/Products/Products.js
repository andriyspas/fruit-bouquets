import React, {Component} from 'react';
import Swiper from 'react-id-swiper'
import {Grid, Row, Col} from 'react-bootstrap';
import ModalStructure from  '../Modal/Modal';
import ModalBody from './ModalBody/ModalBody'

const slides = [
    {
        image: 'https://rus-buket.ru/files/1556-serdtse-okeana-3399.jpg',
        modal: {
            gallery: [
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7ICJulf-eQTt5u2AmnU4ClH6Zo7WUeqTkm1Ws9KvlHn0m2EiXCXr3v90',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7ICJulf-eQTt5u2AmnU4ClH6Zo7WUeqTkm1Ws9KvlHn0m2EiXCXr3v90'
            ],
            title: 'Lorem ipsum dolor',
            description: 'Lorem ipsum dolor sit amet, consectetur adipi ipsum dolor sit amet, consectetur adipi'
        }
    },
    {
        image: 'https://rus-buket.ru/files/1556-serdtse-okeana-3399.jpg',
        modal: {
            gallery: [
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7ICJulf-eQTt5u2AmnU4ClH6Zo7WUeqTkm1Ws9KvlHn0m2EiXCXr3v90',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7ICJulf-eQTt5u2AmnU4ClH6Zo7WUeqTkm1Ws9KvlHn0m2EiXCXr3v90',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7ICJulf-eQTt5u2AmnU4ClH6Zo7WUeqTkm1Ws9KvlHn0m2EiXCXr3v90'
            ],
            title: 'Lorem ipsum dolor',
            description: 'Lorem ipsum dolor sit amet, consectetur adipi'
        }
    },
];

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
                                {
                                    slides.map((slide, index) => (
                                        <div key={ index }>
                                            <div className="products__tile">
                                                <img src={ slide.image } alt=""/>

                                                <ModalStructure
                                                    description={ Description }
                                                    className={ ClassName }
                                                    modalBody={ <ModalBody dataModal={ slide.modal }/> }
                                                />
                                            </div>
                                        </div>
                                    ))
                                }
                            </Swiper>
                        </Col>
                    </Row>
                </Grid>

            </section>
        )
    }
}

export default Products;