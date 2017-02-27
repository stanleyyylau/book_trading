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

const ProposeLog = (props)=>{
    return (
        <div className="register-wrap" style={style}>
            <h1>display all propose information here</h1>
            <div>
                You want to trade your book {myBookTitle} with {theirName} 's book {theirBookName}
            </div>
        </div>
    )
}

export default ProposeLog
