import React from 'React'
import Register from './../component/Register'
import ajaxHelper from './../utils/ajaxHelper'


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
      var self = this
      console.log(this.state)
      // Todo: make ajax call to get back token
      ajaxHelper.register(self.state.userName, self.state.email, self.state.password).then((result)=>{
        if(result.data.errorCode == 0){
          self.context.router.push('/login')
        }
      })
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

LoginContainer.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default RegisterContainer
