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
    savedBooks: [],
    error: ''
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data }),
        console.log(this.state.books)
      )
      .catch(err => console.log(err));
  };


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

        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ books: res.data });
        console.log(this.state.books)
      })
      .catch(err => this.setState({ error: err.message }));
  };

    // todo: (savebook function) modify to take event targets and add elements from google books api?
  saveBook = event => {
    event.preventDefault();
    let bookID = event.target.getAttribute('data-bookid');
      API.saveBook({
        title: event.target.getAttribute('data-title'),
        author: event.target.getAttribute('data-author'),
        description: event.target.getAttribute('data-description'),
        image: event.target.getAttribute('data-image'),
        link: event.target.getAttribute('data-link'),
        bookID: event.target.getAttribute('data-bookid')
      })
        .then(res => {
          var newBooks = this.state.savedBooks.concat(bookID);
          this.setState({ savedBooks: newBooks })
        })
        .catch(err => console.log(err));
    }

  render() {
    return (
      <div>
        <BookSearchCard
          bookSearch={this.bookSearch}
          handleInputChange={this.handleInputChange}
          />
        <BookResultsCard 
          books = {this.state.books}
          saveBook = {this.saveBook}
          savedBooks = {this.state.savedBooks}
        />
      </div>
    );
  };
};
export default SearchBooks;
