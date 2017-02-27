import React from 'React'
import ajaxHelper from './../utils/ajaxHelper'
import ReceiveLog from './../component/ReceiveLog'

class tradeReceiveContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      log: null,
    };
  }

  componentDidMount() {
    const self = this
    ajaxHelper.myReceive().then((result)=>{
        console.log(result)
        self.setState({
            log: result.data
        })
    })
  }

  render() {
    return (
      <div>
        <h2> displaying the book i receive..</h2>
        <ReceiveLog/>
      </div>
    )
  }
}

export default tradeReceiveContainer
