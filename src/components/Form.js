import React from 'react';
import '../styles/App.css'

class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            height: 0,
            width: 0
        };

        this._updateWindowDimensions = this._updateWindowDimensions.bind(this);
    };

    _updateWindowDimensions = () => {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    };

    componentDidMount = () => {
        this._updateWindowDimensions();
        window.addEventListener('resize', this._updateWindowDimensions);
    };

    componentWillUnmount = () => {
        window.removeEventListener('resize', this._updateWindowDimensions);
    };

    render = () => {

        return(
            <form
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 20
                }}
            >
                {this.props.children}
            </form>
        )
    }
}

export default Form;