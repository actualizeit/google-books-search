import React, { Component } from "react";
import BookSearchCard from "../components/BookSearchCard";
import BookResultsCard from "../components/BookResultsCard";
import API from "../utils/API";
import Navbar from "../components/Nav";
import Axios from "axios";

class SearchBooks extends Component {
  state = {
    books: [],
    searchInput: '',
    error: ''
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




  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  bookSearch = event => {
    event.preventDefault();
    console.log("formsubmit")
    let searchInput;
    if(this.state.searchInput) {
      searchInput = this.state.searchInput;
    } else {
      searchInput = "Handling Inputs for Dummies";
    };
    Axios.get("https://www.googleapis.com/books/v1/volumes?q=" + searchInput + "&printType=books&key=" + "")
      .then(res => {
        console.log(res)
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ books: res.data });
      })
      .catch(err => this.setState({ error: err.message }));
  };

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
        <BookSearchCard
          bookSearch={this.bookSearch}
          handleInputChange={this.handleInputChange}
          />
        <BookResultsCard />
      </div>
    );
  }
}

export default SearchBooks;
