import React from 'React'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
    maxWidth: "500px",
    margin: "0 auto",
    textAlign: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -60%)"
}

const registerStyle = {
    marginTop: "20px"
}

const Register = (props)=>{
    return (
        <div className="register-wrap" style={style}>
            <h1>Fill in the form to register your account</h1>
            <TextField
                hintText="Enter your username here"
                floatingLabelText="Username"
                onChange = {props.onUsernameChange}
            /><br />
            <TextField
                hintText="Email address can't be changed"
                floatingLabelText="Email"
                onChange = {props.onEmailChange}
            /><br />
            <TextField
                hintText="Enter your password here"
                floatingLabelText="Password"
                type="password"
                onChange = {props.onPasswordChange}
            /><br />
            <TextField
                hintText="Enter your password again"
                floatingLabelText="Confirm Password"
                type="password"
                onChange = {props.onPasswordConfirmChange}
            /><br />
            <RaisedButton label="Register" primary={true} style={registerStyle} 
                onClick = {props.onLoginSubmit}
            />
        </div>
    )
}

export default Register
