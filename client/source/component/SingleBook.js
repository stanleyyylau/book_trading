import React from 'React'

const style = {
    maxWidth: "20%",
    flex: "1",
    textAlign: "center"
}

const SingleBook = (props)=>{
    return (
        <div className="single-book-wrap" style={style} >
            <img className="book-image" src={props.imageUrl} />
            <h3 className="book-title">{props.bookTitle}</h3>
            <p className="book-author">{props.bookAuthor}</p>
        </div>
    )
}

export default SingleBook

