import React from 'React'
import { Link } from 'react-router'

const style = {
    width: "25%",
    textAlign: "center",
    marginBottom: "30px"
}

const SingleBook = (props)=>{
    return (
        <Link to={"/book/" + props.id} style={props.style || style}>
            <div className="single-book-wrap"  >
                <img className="book-image" src={props.imageUrl} />
                <h3 className="book-title">{props.bookTitle}</h3>
                <p className="book-author">{props.bookAuthor}</p>
            </div>
        </Link>
    )
}

export default SingleBook

