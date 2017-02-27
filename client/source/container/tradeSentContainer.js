import React from 'React'
import ajaxHelper from './../utils/ajaxHelper'
import ProposeLog from './../component/ProposeLog'

class tradeSentContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      log: null,
    };
  }

  componentDidMount() {
    const self = this
    ajaxHelper.myPropose().then((result)=>{
        console.log(result)
        self.setState({
            log: result.data
        })
    })
  }

  render() {
    return (
      <div>
        <h2> displaying the book i sent..</h2>
        <ProposeLog/>
      </div>  
    )
  }
}

export default tradeSentContainer
