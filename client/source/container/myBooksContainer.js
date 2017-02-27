import React from 'React'
import ajaxHelper from './../utils/ajaxHelper'
import AllBooks from './../component/AllBooks'

class myBooksContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      myBooks: []
    }
  }

  componentDidMount() {
    const self = this
    ajaxHelper.getAllMyBooks().then((result)=>{
        self.setState({
            myBooks: result.data.books
        })
    })
  }
  

  render() {   
    return (
        <div>
            <h2> Here's a list of all your books...</h2>
            <AllBooks books={this.state.myBooks} />
        </div>  
    )
  }
}

export default myBooksContainer
