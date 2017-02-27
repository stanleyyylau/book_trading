import React from 'React'
import ajaxHelper from './../utils/ajaxHelper'
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';

class BooksContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  } 
  
  render() {   
    const style = {
        margin: 12,
    }

    const linkStyle = {
        textDecoration: "none"
    }

    return (
        <div>
            <Link to="/mybooks/tradesent" style={linkStyle}>
                <RaisedButton label="Trade Sent" primary={true} style={style} />
            </Link>
            <Link to="/mybooks/tradereceive" style={linkStyle}>
                <RaisedButton label="Trade Receive" secondary={true} style={style} />
            </Link>
            {this.props.children}
        </div>  
    )
  }
}

export default BooksContainer
