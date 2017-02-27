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

const ReceiveLog = (props)=>{
    return (
        <div className="register-wrap" style={style}>
            <h1>Display all receive information here...</h1>
        </div>
    )
}

export default ReceiveLog
