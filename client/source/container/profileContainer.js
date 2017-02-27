import React from 'React'
import ajaxHelper from './../utils/ajaxHelper'
import Profile from './../component/Profile'

class profileContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "Loading...",
      city: "Loading...",
      state: "Loading..."
    }
  }

  componentDidMount() {
    const self = this
    ajaxHelper.getProfile().then((result)=>{
        self.setState({
            username: result.data.profile.username,
            city: result.data.profile.city || " ",
            state: result.data.profile.state || " "
        })
    })
  }

  onUserNameChange(e){
    this.setState({
      username: e.target.value
    })
  }

  onCityChange(e){
    this.setState({
      city: e.target.value
    })
  }

  onStateChange(e){
    this.setState({
      state: e.target.value
    })
  }

  onProfileUpdate() {
    var self = this
    console.log(this.state)
    ajaxHelper.updateProfile({
      username: this.state.username,
      city: this.state.city,
      state: this.state.state
    }).then((result)=>{
      self.setState({
        username: result.data.profile.username,
        city: result.data.profile.city,
        state: result.data.profile.state        
      })
    })
  }
  
  render() {   
    return (
        <div>
            <h2> Here you can view and update your profile...</h2>
            <Profile
              onProfileUpdate = {this.onProfileUpdate.bind(this)}
              username = {this.state.username}
              city = {this.state.city}
              state = {this.state.state}
              onUserNameChange = {this.onUserNameChange.bind(this)}
              onCityChange = {this.onCityChange.bind(this)}
              onStateChange = {this.onStateChange.bind(this)}
            />
        </div>  
    )
  }
}

export default profileContainer
