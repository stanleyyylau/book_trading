import React from 'React'
import AddBook from './../component/AddBook'
import ajaxHelper from './../utils/ajaxHelper'

class AddBookContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: "",
      books: []
    };
  }

  onSearchSubmit(term){
    var self = this
    console.log(term)
    // Todo: make ajax to google to retrieve book information
    ajaxHelper.searchBook(term).then((result)=>{
      console.log(result.data.items)
      self.setState({
        books: result.data.items
      })
    })
  }

  onAddingBook(image, title, author){
    console.log('the book youre adding is...')
    console.log(image, title, author)
    ajaxHelper.addBook(image, title, author).then((result)=>{
      console.log(result)
      // When succuss, redirect to my books
    })
  }

  render() {
    return (
          <AddBook
             books={this.state.books} 
             searchTerm={this.state.searchTerm}
             onSearchSubmit={this.onSearchSubmit.bind(this)}
             onAddingBook={this.onAddingBook.bind(this)}
          />          
    )
  }
}

export default AddBookContainer
