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
      owner_id: null,
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
            owner_id: result.owner.username,
            availability: result.availability
        })
    })
  }

  onTradeClick() {
    console.log('running trade logic...')
    var self = this
    if(!self.state.availability){
      return
    }else{
      // Todo: user can't trade with themself
      ajaxHelper.checkBeforeTrade(self.state.owner_id).then((result)=>{
        if(result.data.errorCode === 0){
          // Todo: perform the actual trade
          
        }
      })
    }
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
            onTradeClick={this.onTradeClick.bind(this)}
        />
    )
  }
}

export default BookDetailContainer