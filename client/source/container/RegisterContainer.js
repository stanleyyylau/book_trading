import React from 'React'
import Register from './../component/Register'


class RegisterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        userName: "",
        email: "",
        password: "",
        passwordConfirm: ""
    };
  }

  onUsernameChange(event) {
    this.setState({userName: event.target.value});
  }

  onEmailChange(event) {
    this.setState({email: event.target.value});
  }

  onPasswordChange(event) {
    this.setState({password: event.target.value});
  }

  onPasswordConfirmChange(event) {
    this.setState({passwordConfirm: event.target.value});
  }

  onLoginSubmit(event) {
      console.log(this.state)
      // Todo: make ajax call to get back token

  }  

  render() {
    return (
        <div>
            <Register 
                onUsernameChange = {this.onUsernameChange.bind(this)}
                onEmailChange = {this.onEmailChange.bind(this)}
                onPasswordChange = {this.onPasswordChange.bind(this)}
                onPasswordConfirmChange = {this.onPasswordConfirmChange.bind(this)}
                onLoginSubmit = {this.onLoginSubmit.bind(this)}
            />
        </div>
    )
  }
}

export default RegisterContainer
