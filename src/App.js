import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import ListBookTitle from './ListBookTitle';
import ListBookContent from './ListBookContent';
import SearchButton from './SearchButton';
import SearchBook from './SearchBook';
import './App.css';

class BooksApp extends React.Component {
  state = {
    books: [],
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    });
  }

  updateBook = (book, event) => {
    const { books } = this.state
    const eTarget = event.target.value;
    const bookIndex = this.state.books.findIndex((b) => {
      return b.id === book.id;
    });
    if (bookIndex === -1) {
        book.shelf = eTarget;
        books.push(book);
    } else {
      books.map((b) => {

            if (b.id === book.id ) {
              b.shelf = eTarget;
              return b;
            }
              return b;
      });

    }

     BooksAPI.update(book, eTarget).then(
      this.setState({
        books: books
      }));
  }

  render() {
    return (
      <div className="app">
        <Route path ="/search" render={() => (
          <SearchBook
            books={this.state.books}
            onUpdateBook={this.updateBook}
          />
        )}/>
        <Route exact path="/" render={() => (
          <div className="list-books">
            <ListBookTitle/>
            <ListBookContent
            onUpdateBook={this.updateBook}
            books={this.state.books}/>
            <SearchButton/>
          </div>

        )}/>
      </div>
    )
  }
}

export default BooksApp;