import React from 'React'
import Login from './../component/Login'
import ajaxHelper from './../utils/ajaxHelper'

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
      var self = this
      // Todo: make ajax call to get back token
      return ajaxHelper.Login(this.state.email, this.state.password)
      .then((result)=>{
          if(result.data.token){
              ajaxHelper.setUpLoginHeader(result.data.token)
              self.props.handleUserLogin(result.data.userName)
              self.context.router.push('/')
          }
      }).catch((err)=>{
          console.log(err)
      })
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

LoginContainer.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default LoginContainer
