import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import { Modal } from 'react-bootstrap';

class ModalBody extends Component {
    constructor() {
        super();

        this.state = {

        }
    }

    render() {
        const params = {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            paginationBulletRender: (swiper, index, className) => {
                return '<span class="' + className + '">' + ( index + 1 ) + '</span>';
            }
        };

        const images = [
            {
                id: 1,
                url: [
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7ICJulf-eQTt5u2AmnU4ClH6Zo7WUeqTkm1Ws9KvlHn0m2EiXCXr3v90',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7ICJulf-eQTt5u2AmnU4ClH6Zo7WUeqTkm1Ws9KvlHn0m2EiXCXr3v90',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7ICJulf-eQTt5u2AmnU4ClH6Zo7WUeqTkm1Ws9KvlHn0m2EiXCXr3v90'
                ],
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
                title: 'Lorem ipsum dolor'
            },
            {
                id: 2,
                url: [
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7ICJulf-eQTt5u2AmnU4ClH6Zo7WUeqTkm1Ws9KvlHn0m2EiXCXr3v90',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7ICJulf-eQTt5u2AmnU4ClH6Zo7WUeqTkm1Ws9KvlHn0m2EiXCXr3v90'
                ],
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod ipsum dolor sit amet, , consectetur adipisicing elit, sed do eiusmod ipsum dolor sit amet, consectetur adipisicing elit, consectetur adipisicing elit, sed do eiusmod ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
                title: 'Lorem ipsum dolor'
            }
        ];

        return (
            <div>
                {
                    images.map((image, index) => (
                        <Modal.Body key={ index }>
                            <Swiper { ...params }>
                                {
                                    image.url.map((img, index) => (
                                        <div style={{height: '200px'}} key={ index }>{ img.url }</div>
                                    ))
                                }
                            </Swiper>

                            <div className="products__details">
                                <div>
                                    <div className="products__details--title">{image.title}</div>
                                    <div className="products__details--desription">
                                        {image.description}
                                    </div>
                                </div>
                            </div>
                        </Modal.Body>
                    ))
                }
            </div>
        )
    }
}

export default ModalBody;