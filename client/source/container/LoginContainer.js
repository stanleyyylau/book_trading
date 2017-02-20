import React from 'React'
import Login from './../component/Login'

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        email: "",
        password: ""
    }
  }

  onEmailChange(event) {
    this.setState({email: event.target.value});
  }

  onPasswordChange(event) {
    this.setState({password: event.target.value});
  }

  onLoginSubmit(event) {
      console.log(this.state)
      // Todo: make ajax call to get back token
  }

  render() {
    return (
        <div>
            <Login 
                email={this.state.email}
                password={this.state.password}
                onEmailChange={this.onEmailChange.bind(this)}
                onPasswordChange={this.onPasswordChange.bind(this)}
                onLoginSubmit={this.onLoginSubmit.bind(this)}
            />
        </div>
    )
  }
}

export default LoginContainer
