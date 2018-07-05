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
    const eTarget = event.target.value;
    this.setState((state) => ({
      books: state.books.map((b) => {
        
          if (b.id === book.id ) {
            b.shelf = eTarget;
            return b;
          }
            return b;
        })
    }))

     BooksAPI.update(book, eTarget);
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