import React, {Component} from "react";
import Swiper from "react-id-swiper"
import {Grid, Row, Col} from "react-bootstrap";
import ModalStructure from  "../Modal/Modal";
import ModalBody from "./ModalBody/ModalBody"
import ProductsData from "../../constants/ProductsData";
import VisibilitySensor from "react-visibility-sensor";

const Description = { openModal: "View details" };
const ClassName = "products__tile--plug";
const size = "large";

class Products extends Component {
    constructor() {
        super();

        this.state = {
            visibility: false
        }
    }

    handleOnChange = (isVisible) => {
        this.setState({ visibility : isVisible});
    };


    render() {
        const params = {
            nextButton: ".swiper-button-next",
            prevButton: ".swiper-button-prev",
            pagination: ".swiper-pagination",
            paginationClickable: true,
            paginationBulletRender: (swiper, index, className) => {
                return '<span class="' + className + '">' + (index + 1) + '</span>';
            },
            paginationType: "fraction",
            spaceBetween: 15,
            slidesPerView: 3,
            slidesPerColumn: 2,
            breakpoints: {
                1200: {
                    slidesPerView: 2,
                    slidesPerColumn: 2,
                },
                767: {
                    slidesPerView: 1,
                    slidesPerColumn: 2,
                },
            }
        };

        return (
            <section className={"products " + (this.state.visibility ? "active" : "inactive")}>
                <Grid>
                    <Row>
                        <Col xs={12}>
                            <div className="products__title">Our Production</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <Swiper { ...params }>
                                {
                                    ProductsData.map((item, index) => (
                                        <div key={ index }>
                                            <div className="products__tile">
                                                <div className="products__thumb--wrapper">
                                                    <div className="products__thumb" style={{backgroundImage: "url(" + item.image + ")"}}></div>
                                                </div>

                                                <ModalStructure
                                                    description={ Description }
                                                    className={ ClassName }
                                                    size={ size }
                                                    modalBody={ <ModalBody productsDetails={ item.modal }/> }
                                                />
                                            </div>
                                        </div>
                                    ))
                                }
                            </Swiper>
                        </Col>
                    </Row>
                </Grid>

                <VisibilitySensor onChange={ this.handleOnChange }>
                    <div className="detect__position"></div>
                </VisibilitySensor>
            </section>
        )
    }
}

export default Products;