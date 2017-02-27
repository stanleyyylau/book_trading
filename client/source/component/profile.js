import React from 'React'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
    width: "500px",
    margin: "0 auto",
}

const Profile = (props)=>{
    return (
        <div className="register-wrap" style={style}>
            <h1>Here's your profile</h1>
        <TextField
        hintText="Enter Your Full Name"
        floatingLabelText="Full Name"
        value={props.username}
        onChange={props.onUserNameChange}
        floatingLabelFixed={true}
        /><br />  
        <TextField
        hintText="Enter Your City"
        floatingLabelText="City"
        value={props.city}
        onChange={props.onCityChange}
        floatingLabelFixed={true}
        /><br />  
        <TextField
        hintText="Enter Your State"
        floatingLabelText="State"
        value={props.state}
        onChange={props.onStateChange}
        floatingLabelFixed={true}
        /><br />            
            <RaisedButton label="Update" primary={true} onClick={props.onProfileUpdate}/>
        </div>
    )
}

export default Profile
