import React from 'react';
import styled from 'styled-components';


class Header extends React.Component {
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
        const Header = styled.div`
            width: ${this.state.width}px;
            height: ${this.state.height*0.1}px;
            background-color: #11998e;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-size: calc(10px + 2vmin);
            color: white;
        `;

        return(
            <Header>
                {this.props.children}
            </Header>
        )
    }
}

export default Header;