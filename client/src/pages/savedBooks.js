import React, { Component } from "react";
import SavedBooksCard from "../components/SavedBooksCard";
import API from "../utils/API";
  
class SavedBooks extends Component {
    state = {
      savedBooks: [],
    };
  
    componentDidMount() {
      API.getBooks()
        .then(res => this.setState({ savedBooks: res.data }))
        .catch(err => console.log(err));
    }
    
    removeBook = (event) => {
      event.preventDefault();
      console.log(event.target.getAttribute('data-id'));
      API.deleteBook(event.target.getAttribute('data-id'))
        .then(res => {
          API.getBooks()
            .then(res => this.setState({ savedBooks: res.data }))
            .catch(err => console.log(err));
        })
    }


  render() {
    return (
      <div>
        <SavedBooksCard
          savedBooks = {this.state.savedBooks}
          removeBook = {this.removeBook}
        />
      </div>
    )
  }
}

export default SavedBooks;