import React from 'React'
import ajaxHelper from './../utils/ajaxHelper'
import ProposeLog from './../component/ProposeLog'

class tradeSentContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      log: []
    };
  }

  componentDidMount() {
    const self = this
    ajaxHelper.myPropose().then((result)=>{
        console.log(result)
        // Todo: to some stuff before resetting state
        var log = result.data.myPropose.map((item)=>{
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

  tradeCancel(myBookId, theirBookId){
    var self = this

    console.log('your book id is ...')
    console.log(myBookId)
    console.log('their book id is ...')
    console.log(theirBookId)
    return;
    ajaxHelper.cancalTrade(myBookId, theirBookId).then((result)=>{
      if(result.data.errorCode == 0){
        console.log('Trade cancel done...')
        //Todo: We need to redirect or get the log again
      }
    })
  }

  render() {
    return (
      <div>
        <ProposeLog
         books={this.state.log}
         tradeCancel={this.tradeCancel.bind(this)}
        />
      </div>  
    )
  }
}

export default tradeSentContainer
