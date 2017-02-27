import React from 'React'
import AllBooks from './../component/AllBooks'
import ajaxHelper from './../utils/ajaxHelper'

class AllBooksContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
    };
  }

  componentDidMount() {
    const self = this
    ajaxHelper.getAllBooks().then((result)=>{
        self.setState({
            books: result.data
        })
    })
  }

  render() {
    return (
      <AllBooks books={this.state.books} />
    )
  }
}

export default AllBooksContainer
