import React, { Component } from 'react';
import { Modal } from  'react-bootstrap';

class ModalStructure extends Component {
    constructor(){
        super();

        this.state = {
            show: false
        }
    }

    close = () => {
        this.setState({ show: false });
    };

    open = () => {
        this.setState({ show: true });
    };

    render() {
        return (
            <div className={ this.props.className }>
                <Modal
                    show={ this.state.show }
                    onHide={ this.close }
                    bsSize="large"
                    aria-labelledby="contained-modal-title-lg"
                >

                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-lg">{ this.props.description.review }</Modal.Title>
                    </Modal.Header>

                    { this.props.modalBody }

                </Modal>

                <button className="button" onClick={ this.open }>{ this.props.description.buttonAdd }</button>
            </div>
        );
    }
}

export default ModalStructure;