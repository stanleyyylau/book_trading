import React from 'React'
import RaisedButton from 'material-ui/RaisedButton';


const style = {
    marginBottom: "30px"
}

const BookDetail = (props)=>{
    if(!props.isTradeActive){
        return (
            <div className="book-detail" style={props.style || style} >
                <img className="book-image" src={props.image} />
                <h3 className="book-title">{props.title}</h3>
                <p className="book-author">{props.author}</p>
                <p className="book-owner">Owner: {props.owner}</p>
                {props.availability ? <RaisedButton label="Trade" primary={true} onClick={()=> props.onTradeClick(props.owner_id) } /> : <RaisedButton label="Trade" disabled={true} style={style} />}
            </div>
        )
    }else{
        let style = {
            marginBottom: "10px"
        }

        var oneOfYourBooks = props.oneOfYourBooks.map((item)=>{
            return (
                <div key={item.bookId} style={style} >
                    <h3 className="book-title">{item.title}</h3>
                    <RaisedButton label="Confirm" primary={true} onClick={()=> props.onTradeConfirm(item.bookId, props.bookId) } />
                </div>
            )
        })

        return (
            <div className="book-detail" style={props.style || style} >
                <img className="book-image" src={props.image} />
                <h3 className="book-title">{props.title}</h3>
                <p className="book-author">{props.author}</p>
                <p className="book-owner">Owner: {props.owner}</p>
                <RaisedButton label="Trade" disabled={true} style={style} />
                <br/>
                <h1>Please select one of your books</h1>
                {oneOfYourBooks}
            </div>
        )
    }
}

export default BookDetail