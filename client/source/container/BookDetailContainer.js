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
      availability: null,
      isTradeActive: false,
      oneOfYourBooks: []
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
            owner_id: result.owner._id,
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
        console.log(result)
        if(result.data.errorCode === 0){
          // Todo: perform the actual trade
          self.setState({
            isTradeActive: true
          })

          // get oneOfYourBooks with ajax
          ajaxHelper.getAllMyBooks().then((bookresult)=>{
            let oneOfYourBooks = bookresult.data.books.map((item)=>{
              return {
               bookId: item._id,
               title: item.title
              }
            })

            self.setState({
              oneOfYourBooks: oneOfYourBooks
            })
          })

        }else{
          window.alert("can't trade with yourself...")
        }
      }).catch((e)=>{
        alert('You must login first ....')
        console.log(e)
      })
    }
  }

  onTradeConfirm(myBookId, theirBookId){
    var self = this
    ajaxHelper.tradeBook(myBookId, theirBookId).then((result)=>{
      if(result.data.errorCode === 0){
        // Todo: go to my trade propose page
        self.context.router.push('/mybooks/tradesent')
      }
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
            onTradeClick={this.onTradeClick.bind(this)}
            isTradeActive={this.state.isTradeActive}
            oneOfYourBooks={this.state.oneOfYourBooks}
            onTradeConfirm={this.onTradeConfirm.bind(this)}
        />
    )
  }
}

BookDetailContainer.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default BookDetailContainer