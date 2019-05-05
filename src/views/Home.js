import React from 'react';
import Form from '../components/Form';
import Header from '../components/Header';
import Input from '../components/Input';
import Button from '../components/Button';
import { withRouter } from 'react-router-dom';
import '../styles/App.css';
import Modal from '../components/Modal';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            SCREEN_WIDTH: 0,
            SCREEN_HEIGHT: 0,
            visible: false
        };

        this._updateWindowDimensions = this._updateWindowDimensions.bind(this);
    };

    _updateWindowDimensions = () => {
        this.setState({ 
            SCREEN_WIDTH: window.innerWidth, 
            SCREEN_HEIGHT: window.innerHeight, 
            visible: window.innerWidth < 600 ? true : false
        });
    };

    componentDidMount = () => {
        this._updateWindowDimensions();
        window.addEventListener('resize', this._updateWindowDimensions);
    };

    componentWillUnmount = () => {
        window.removeEventListener('resize', this._updateWindowDimensions);
    };

    _renderInvoice = () => {
        return (
            <div
                style={{ border: 1, borderStyle: 'solid', borderRadius: 10, marginTop: 50, width: '300px', backgroundColor: 'white' }}
            >
                {/* HEADER */}
                <div
                    style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginLeft: 5, marginRight: 5 }}
                >
                    <p style={{ fontWeight: 'bold' }}>Product</p>
                    <p style={{ fontWeight: 'bold' }}>Amount</p>
                </div>
                <div style={{ borderBottom: 1, borderBottomStyle: 'solid' }} ></div>
                {/* PRODUCT & QUANTITY & UNIT PRICE*/}
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginLeft: 5, marginRight: 5 }}>
                    <p>Frutas  x2</p>
                    <p>Bs. 400</p>
                </div>
                <div style={{ borderBottom: 1, borderBottomStyle: 'solid' }} ></div>
                {/* FOOTER */}
                <div>
                    {/* TOTAL AMOUNT */}
                    <div
                        style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginLeft: 5, marginRight: 5 }}
                    >
                        <p style={{ fontWeight: 'bold' }}>Total</p>
                        <p>Bs. 800</p>
                    </div>
                </div>
            </div>
        )
    };

    _showModal = () => {
        this.setState({ visible: true });
    };

    render = () => {
        return (
            <div style={{ height: this.state.SCREEN_HEIGHT }} className="App">
                <Header>
                    <h2>Payment</h2>
                </Header>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    {this.state.SCREEN_WIDTH > 600 ?
                        this._renderInvoice()
                        : null
                    }
                </div>
                <div style={this.state.SCREEN_WIDTH < 600 ? {marginTop: this.state.SCREEN_HEIGHT*.20}: {}}>
                    <Form>
                        <Input width={'250px'} placeholder="Card Holder" ></Input>
                        <Input width={'250px'} placeholder="Identification" ></Input>
                        <Input width={'250px'} placeholder="Card Number"></Input>
                        <div
                            className="space-between"
                            style={{
                                width: '250px',
                                alignItems: 'center',
                                justifyContent: 'center',
                                display: 'flex',
                                flexDirection: 'row'
                            }}
                        >
                            <Input width={'33%'} placeholder="CVV" ></Input>
                            <Input width={'33%'} placeholder="MM" ></Input>
                            <Input width={'33%'} placeholder="YYYY" ></Input>
                        </div>
                        <Button width={250} >Payment</Button>
                    </Form>
                </div>
                <div>
                    {
                        this.state.SCREEN_WIDTH < 600 ?
                            <div>
                                <div style={styles.footer}>
                                    <a href onClick={this._showModal} >Invoice</a>
                                </div>
                            </div>
                            : null
                    }
                </div>
                <Modal visible={this.state.visible} >
                    {this._renderInvoice()}
                </Modal>
            </div>
        )
    }
}

const styles = {
    footer: {
        fontSize: "20px",
        borderTop: "1px solid #E7E7E7",
        textAlign: "center",
        padding: "20px",
        position: "fixed",
        left: "0",
        bottom: "0",
        height: "20px",
        width: "100%"
    }
}

export default withRouter(Home);