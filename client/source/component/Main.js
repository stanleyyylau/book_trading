import React from 'React'
import FlatButton from 'material-ui/FlatButton';

const footerStyle = {
    position: "fixed",
    left: "0",
    bottom: "0",
    display: "block",
    backgroundColor: "#827777",
    width: "100%",
    color: "white",
    padding: "30px"
}

const footerWrap = {
    marginTop: "100px"
}

const Main = (props)=>{
    return (
        <div>
            <div className="nav-bar">
                <FlatButton label="All Books" />
                <FlatButton label="Login" />
                <FlatButton label="Register" />
            </div>
             {props.children}
            <div className="footer-wrap" style={footerWrap}></div>
            <div className="footer" style={footerStyle} >
                This area here is called the footer
            </div>
        </div>
    )
}

export default Main


