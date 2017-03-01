import React from 'React'
import RaisedButton from 'material-ui/RaisedButton';


const style = {
    marginBottom: "30px"
}

const BookDetail = (props)=>{
    return (
        <div className="book-detail" style={props.style || style} >
            <img className="book-image" src={props.image} />
            <h3 className="book-title">{props.title}</h3>
            <p className="book-author">{props.author}</p>
            <p className="book-owner">Owner: {props.owner}</p>
            {props.availability ? <RaisedButton label="Trade" primary={true} onClick={props.rejectTrade} /> : <RaisedButton label="Trade" disabled={true} style={style} />}
        </div>
    )
}

export default BookDetail