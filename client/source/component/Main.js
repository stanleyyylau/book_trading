import React from 'React'
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router'

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

const linkStyle = {
    textDecoration: "none"
}

const Main = (props)=>{
    const childrenWithProps = React.Children.map(props.children,
     (child) => {
         console.log(child)
         if(child.type.name === "LoginContainer"){
            return React.cloneElement(child, {
            handleUserLogin: props.handleUserLogin
            })
         }else{
            return React.cloneElement(child)
         }
        }
    );

    if(!props.isLogin){
        return (
            <div>
                <div className="nav-bar">
                    <Link to="/" style={linkStyle}>
                        <FlatButton label="All Books" /> 
                    </Link>
                    <Link to="/login" style={linkStyle}>
                        <FlatButton label="Login" /> 
                    </Link>
                    <Link to="/register" style={linkStyle}>
                        <FlatButton label="Register" /> 
                    </Link>
                </div>
                {childrenWithProps}
                <div className="footer-wrap" style={footerWrap}></div>
                <div className="footer" style={footerStyle} >
                    This area here is called the footer
                </div>
            </div>
        )        
    }else{
        return (
            <div>
                <div className="nav-bar">
                    <Link to="/" style={linkStyle}>
                        <FlatButton label="All Books" /> 
                    </Link>
                    <Link to="/addbook" style={linkStyle}>
                        <FlatButton label="Add Book" /> 
                    </Link>
                    <Link to="/mybooks" style={linkStyle}>
                        <FlatButton label="My Books" /> 
                    </Link>
                    <Link to="/profile" style={linkStyle}>
                        <FlatButton label="profile" /> 
                    </Link>
                    { "Welcome " + props.userName }
                </div>
                {props.children}
                <div className="footer-wrap" style={footerWrap}></div>
                <div className="footer" style={footerStyle} >
                    This area here is called the footer
                </div>
            </div>
        )  
    }
    
}

export default Main


