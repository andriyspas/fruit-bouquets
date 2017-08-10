import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import { Modal } from 'react-bootstrap';

class ModalBody extends Component {
    render() {
        const params = {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            paginationBulletRender: (swiper, index, className) => {
                return '<span class="' + className + '"><img src="' + this.props.dataModal.gallery[index] + '" alt="" /></span>';
            }
        };

        return (
            <Modal.Body>
                <Swiper { ...params }>
                    {
                        this.props.dataModal.gallery.map((image, index) => (
                            <div style={{height: '200px'}} key={ index }>
                                <img src={ image } alt=""/>
                            </div>
                        ))
                    }
                </Swiper>

                <div className="products__details">
                    <div>
                        <div className="products__details--title">{this.props.dataModal.title}</div>
                        <div className="products__details--desription">
                            {this.props.dataModal.description}
                        </div>
                    </div>
                </div>
            </Modal.Body>
        )
    }
}

export default ModalBody;