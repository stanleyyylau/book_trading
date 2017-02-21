import React from 'React'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class SearchBox extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      searchTerm: ""
    }
  }

  onInputChange (event) {
      this.setState({
          searchTerm: event.target.value
      })
  }

  onSubmit (){
    let SearchTerm = this.state.searchTerm
    this.props.onSearchSubmit(SearchTerm)
  }

  render() {
      return (
        <div>
            <TextField
                hintText="Enter Book Title"
                value = {this.state.searchTerm}
                onChange = {this.onInputChange.bind(this)}
            /><br /> 
            <RaisedButton label="Search" primary={true} 
                onClick={this.onSubmit.bind(this)}
            />
        </div>   
      )
  }    
}

const addBook = (props)=>{
    return (
        <div>
            <SearchBox 
                onSearchSubmit={props.onSearchSubmit}
            />
        </div>
    )
};

export default addBook