import React, { Component } from "react";
import BookSearchCard from "../components/BookSearchCard";
import API from "../utils/API";
import Navbar from "../components/Nav";

class SearchBooks extends Component {
  state = {
    books: [],
  };

  // componentDidMount() {
  //   this.loadBooks();
  // }

  // loadBooks = () => {
  //   API.getBooks()
  //     .then(res =>
  //       this.setState({ books: res.data })
  //     )
  //     .catch(err => console.log(err));
  // };


  // todo: move to saved page when ready
  // deleteBook = id => {
  //   API.deleteBook(id)
  //     .then(res => this.loadBooks())
  //     .catch(err => console.log(err));
  // };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  //todo: booksearch function - figure out url from api, write function

    //todo: (savebook function) modify to take event targets and add elements from google books api?
  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   if (this.state.title && this.state.author) {
  //     API.saveBook({
  //       title: this.state.title,
  //       author: this.state.author,
  //       synopsis: this.state.synopsis
  //     })
  //       .then(res => this.loadBooks())
  //       .catch(err => console.log(err));
  //   }
  // };

  render() {
    return (
      <div>
        <BookSearchCard></BookSearchCard>
      </div>
    );
  }
}

export default SearchBooks;
