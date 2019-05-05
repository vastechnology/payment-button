import React from 'react';

class Button extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    };

    render = () => {
        return(
            <div>
                <button
                    onClick={this.props.onClick}
                    style={{
                        shadowColor: 'black',
                        shadowOffset: { width: 5, height: 10 },
                        shadowOpacity: 0.8,
                        shadowRadius: '.5rem',
                        backgroundColor: '#11998e',
                        borderRadius: '.5rem',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        borderColor: '#11998e',
                        color: 'white',
                        fontFamily: 'Roboto',
                        fontWeight: 'bold',
                        fontSize: 18,
                        width: this.props.width,
                        height: 45,
                        outline: 0
                    }}
                >
                    {this.props.children}
                </button>
            </div>
        )
    }
}

export default Button;