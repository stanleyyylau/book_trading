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
    console.log(term)
    // Todo: make ajax to google to retrieve book information
    ajaxHelper.searchBook(term).then((result)=>{
      console.log(result)
    })
  }

  render() {
    return (
          <AddBook
             books={this.state.books} 
             searchTerm={this.state.searchTerm}
             onSearchSubmit={this.onSearchSubmit}
          />
    )
  }
}

export default AddBookContainer
