import React from 'React'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SingleBook from './SingleBook'

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
        <div style={{textAlign: "center", marginBottom: "40px"}}>
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

const resultWrapStyle = {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
}

const singleBookStyle = {
    maxWidth: "100%",
    textAlign: "center"
}

const addBook = (props)=>{

    var resultBooks = props.books.map((item)=>{
        return (
            <div key={item.id + "wrap"} style={{width: "25%", textAlign: "center"}} >
                <SingleBook 
                    style={singleBookStyle}
                    key={item.id}
                    imageUrl={item.volumeInfo.imageLinks.thumbnail}
                    bookTitle={item.volumeInfo.title}
                    bookAuthor={ item.volumeInfo.authors ? item.volumeInfo.authors[0] : ""}
                />
                <RaisedButton label="Add" primary={true} 
                    key={item.id + "button"}
                    onClick={()=> props.onAddingBook(item.volumeInfo.imageLinks.thumbnail, item.volumeInfo.title, item.volumeInfo.authors ? item.volumeInfo.authors[0] : "")}
                />
            </div>
        )
    })

    return (
        <div>
            <SearchBox 
                onSearchSubmit={props.onSearchSubmit}
            />
            <div className="result-wrap" style={resultWrapStyle}>
                {resultBooks}
            </div>
        </div>
    )
};

export default addBook