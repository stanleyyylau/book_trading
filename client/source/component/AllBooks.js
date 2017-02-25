import React from 'React'
import SingleBook from './SingleBook'

const style = {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap'
}

const AllBooks = (props)=>{

    const allBookItems = props.books.map((item)=>{
        return <SingleBook 
                key={item._id}
                id={item._id}
                imageUrl={item.image}
                bookTitle={item.title}
                bookAuthor={item.author}
            />
    })
    return (
        <div>
            <h1>View All Books</h1>
            <div className="all-books-wrap" style={style}>
                {allBookItems}
            </div>
        </div>
    )
}

export default AllBooks
