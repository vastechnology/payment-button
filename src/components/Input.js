import React from 'react';

class Input extends React.Component {
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
            <input
                style={{ 
                    width: this.props.width,
                    borderRadius: '.3rem', 
                    borderStyle: 'solid', 
                    borderWidth: 1, 
                    padding: 10 
                }}
                id={this.props.id} 
                onChange={this.props.onChange}
                placeholder={this.props.placeholder}
                type={this.props.type}
                value={this.props.value}
                name={this.props.name}
            />
        )
    }
}

export default Input;