import React from 'react';
import PropTypes from 'prop-types';
import '../styles/modal.css';

class Modal extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showModal: props.visible ? 'modal display-block' : 'modal display-none'
        };

        this.node = undefined;
    };

    componentWillReceiveProps = ({ visible }) => {
        this.setState({ showModal: visible ? 'modal display-block' : 'modal display-none' });
    };

    componentWillMount = () => {
        window.addEventListener('mousedown', this.handleClick, true);
    };
    
    componentWillUnmount = () => {
        window.addEventListener('mousedown', this.handleClick, false);
    };

    handleClick = ({ target }) => {
        if(this.node.contains(target)) return;

        this.setState({ showModal: 'modal display-none'});
    };

    render = () => {
        return(
            <div className={this.state.showModal}>
                <div ref={ node => this.node = node} className="modal-main">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

Modal.propTypes = {
    visible: PropTypes.bool
};

export default Modal;