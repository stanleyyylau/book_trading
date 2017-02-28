import React from 'React'
import ajaxHelper from './../utils/ajaxHelper'
import ReceiveLog from './../component/ReceiveLog'

class tradeReceiveContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      log: []
    };
  }

  componentDidMount() {
    const self = this
    ajaxHelper.myReceive().then((result)=>{
        console.log(result)
        // Todo: to some stuff before resetting state
        var log = result.data.tradeReceived.map((item)=>{
          return {
            myBookTitle: item.mine.title,
            myBookImage: item.mine.image,
            myBookId: item.mine._id,
            theirBookName: item.theirs.title,
            theirName: item.theirs.owner.username,
            theirBookId: item.theirs._id
          }
        })
        self.setState({
            log: log
        })
    })
  }

  render() {
    return (
      <div>
        <ReceiveLog
         books={this.state.log}
        />
      </div>  
    )
  }
}

export default tradeReceiveContainer
