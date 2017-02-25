import React from 'React'

const style = {
    width: "25%",
    textAlign: "center",
    marginBottom: "30px"
}

const SingleBook = (props)=>{
    return (
        <div className="single-book-wrap" style={props.style || style} >
            <img className="book-image" src={props.imageUrl} />
            <h3 className="book-title">{props.bookTitle}</h3>
            <p className="book-author">{props.bookAuthor}</p>
        </div>
    )
}

export default SingleBook

