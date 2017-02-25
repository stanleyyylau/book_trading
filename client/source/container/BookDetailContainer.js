import React from 'React'
import ajaxHelper from './../utils/ajaxHelper'
import BookDetail from './../component/BookDetail'

class BookDetailContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bookId: "",
      title: "",
      image: "",
      author: "",
      owner: "",
      availability: null
    };
  }

  componentDidMount() {
    const self = this
    self.setState({
        bookId: self.props.params.id
    })
    ajaxHelper.getOneBook(self.props.params.id).then((result)=>{
        result = result.data
        self.setState({
            title: result.title,
            image: result.image,
            author: result.author,
            owner: result.owner.username,
            availability: result.availability
        })
    })
  }

  render() {
    return (
        <BookDetail
            bookId={this.state.bookId}
            title={this.state.title}
            image={this.state.image}
            author={this.state.author}
            owner={this.state.owner}
            availability={this.state.availability}
        />
    )
  }
}

export default BookDetailContainer