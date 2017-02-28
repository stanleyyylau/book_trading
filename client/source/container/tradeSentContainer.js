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

  render() {
    return (
      <div>
        <ProposeLog
         books={this.state.log}
        />
      </div>  
    )
  }
}

export default tradeSentContainer
