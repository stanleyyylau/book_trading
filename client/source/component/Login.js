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

const Login = (props)=>{
    return (
        <div className="register-wrap" style={style}>
            <h1>Welcome to Login...</h1>
            <TextField
                hintText="Email your email"
                floatingLabelText="Email"
                value={props.email}
                onChange={props.onEmailChange}
            /><br />
            <TextField
                hintText="Enter your password"
                floatingLabelText="Password"
                type="password"
                value={props.password}
                onChange={props.onPasswordChange}
            /><br />
            <RaisedButton label="Login" primary={true} style={registerStyle} onClick={props.onLoginSubmit}/>
        </div>
    )
}

export default Login
