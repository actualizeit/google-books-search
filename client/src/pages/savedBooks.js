import React, { Component } from "react";
import BookSearchCard from "../components/BookSearchCard";
import API from "../utils/API";
import Navbar from "../components/Nav";
  
class SavedBooks extends Component {
    state = {
      books: [],
      searchInput: ''
    };
  

    
  // deleteBook = id => {
  //   API.deleteBook(id)
  //     .then(res => this.loadBooks())
  //     .catch(err => console.log(err));
  // };


  render() {
    return (
      <div>
        <BookSearchCard></BookSearchCard>
      </div>
    );
  }
}