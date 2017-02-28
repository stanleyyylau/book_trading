import React from 'React'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router'

const style = {
    width: "1000px",
    margin: "0 auto",
    textAlign: "center",
    border: "1px solid gray",
    marginBottom: "10px",
    padding: "15px"
}

const registerStyle = {
    marginTop: "20px"
}

const ProposeLog = (props)=>{

    if (props.books.length == 0){
        return (
                <div>
                    <h1>No information</h1>
                </div>
                )
    }    

    var allLogs = props.books.map((item)=>{
        return (
            <div key={item.myBookTitle} style={style}>
                Your book 
                <Link to={"book/"+item.myBookId}><strong>{item.myBookTitle}</strong></Link> Receive a trade from <strong>{item.theirName}</strong> 's <Link to={"book/"+item.theirBookId}><strong>{item.theirBookName}</strong></Link>
                <RaisedButton label="Confirm Trade" primary={true} />
                <RaisedButton label="Reject Trade" secondary={true} />
            </div>
        )
    })

    return (
        <div className="register-wrap">
            {allLogs}
        </div>
    )
}

export default ProposeLog
