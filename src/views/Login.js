import React from 'react';
// import logo from '../assets/images/logo.svg';
import '../styles/App.css';
import Header from '../components/Header';
import Form from '../components/Form';
import Input from '../components/Input';
import Button from '../components/Button';
import { withRouter } from 'react-router-dom';

class Login extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      SCREEN_WIDTH: 0,
      SCREEN_HEIGHT: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this._updateWindowDimensions = this._updateWindowDimensions.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  };
  
  _updateWindowDimensions = () => {
    this.setState({ SCREEN_WIDTH: window.innerWidth, SCREEN_HEIGHT: window.innerHeight });
  };

  componentDidMount = () => {
      this._updateWindowDimensions();
      window.addEventListener('resize', this._updateWindowDimensions);
  };

  componentWillUnmount = () => {
      window.removeEventListener('resize', this._updateWindowDimensions);
  };


  handleChange = (event) => {
    event.preventDefault();
    let { target: data} = event;

    this.setState({ [data.name]: data.value })
  };

  onSubmit = () => {
    this.props.history.push('/home');
    
  };

  render() {
    return (
      <div style={{ height: this.state.SCREEN_HEIGHT }} className="App">
        <Header>
          <h2>Login</h2>
        </Header>
        <div style={{ marginTop: this.state.SCREEN_HEIGHT*0.3}}>
          <Form>
            <Input
              width={250}
              placeholder="Email"
              type="email"
              value={this.state.email}
              onChange={(e) => this.handleChange(e)}
              name="email"
            />
            <Input
              width={250} 
              placeholder="Password"
              type="password"
              value={this.state.email}
              onChange={(e) => this.handleChange(e)}
              name="password"
            />
          </Form>
          <Button width={250} onClick={this.onSubmit} >Login</Button>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
