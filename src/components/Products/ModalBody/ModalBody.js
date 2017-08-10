import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import { Modal } from 'react-bootstrap';

class ModalBody extends Component {
    render() {
        const params = {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            paginationBulletRender: (swiper, index, className) => {
                return '<span class="' + className + '"><img src="' + this.props.productsDetails.gallery[index] + '" alt="" /></span>';
            },
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev'
        };

        return (
            <Modal.Body>
                <Swiper { ...params }>
                    {
                        this.props.productsDetails.gallery.map((image, index) => (
                            <div key={ index }>
                                <img src={ image } alt=""/>
                            </div>
                        ))
                    }
                </Swiper>

                <div className="products__details">
                    <div>
                        <div className="products__details--title">{this.props.productsDetails.title}</div>
                        <div className="products__details--desription">
                            {this.props.productsDetails.description}
                        </div>
                    </div>
                </div>
            </Modal.Body>
        )
    }
}

export default ModalBody;