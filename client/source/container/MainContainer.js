import React from 'React'
import Main from './../component/Main'
import ajaxHelper from './../utils/ajaxHelper'

class MainContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      isLogin: false
    }
  }

  handleUserLogin(userName){
    this.setState({
        userName: userName,
        isLogin: true
    })
  }

  render() {   
    return (
        <div>
            <Main 
                children={this.props.children} 
                userName={this.state.userName}
                isLogin={this.state.isLogin}
                handleUserLogin={this.handleUserLogin.bind(this)}
            />
        </div>  
    )
  }
}

export default MainContainer
