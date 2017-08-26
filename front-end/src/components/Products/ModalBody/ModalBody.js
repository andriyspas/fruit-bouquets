import React, {Component} from 'react';
import Swiper from 'react-id-swiper';
import {Modal} from 'react-bootstrap';

class ModalBody extends Component {
    constructor(props) {
        super(props);
        this._swiper = null;
        this._swiperThumbs = null;
    }

    handleThumbsInit() {
        this._swiperThumbs.params.control = this._swiper;
        this._swiper.params.control = this._swiperThumbs;
    }

    render() {
        const params = {
            runCallbacksOnInit: true,
            onInit: swiper => {
                this._swiper = swiper;
            },
        };

        const paramsThumbs = {
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            spaceBetween: 10,
            centeredSlides: true,
            slidesPerView: 'auto',
            touchRatio: 0.2,
            slideToClickedSlide: true,
            onInit: swiper => {
                this._swiperThumbs = swiper;
                this.handleThumbsInit();
            },
        };

        return (
            <Modal.Body>
                <div className="swiper-product">
                    <Swiper { ...params }>
                        {
                            this.props.productsDetails.gallery.map((image, index) => (
                                <div key={ index }>
                                    <img src={ image } alt=""/>
                                </div>
                            ))
                        }
                    </Swiper>
                </div>

                <div className="swiper-thumbs">
                    <Swiper { ...paramsThumbs }>
                        {
                            this.props.productsDetails.gallery.map((image, index) => (
                                <div key={ index }>
                                    <img src={ image } alt=""/>
                                </div>
                            ))
                        }
                    </Swiper>
                </div>

                <div className="products__details">
                    <div>
                        <div className="products__details--title">{ this.props.productsDetails.title }</div>
                        <div className="products__details--desription">
                            { this.props.productsDetails.description }
                        </div>
                    </div>
                </div>
            </Modal.Body>
        )
    }
}

export default ModalBody;