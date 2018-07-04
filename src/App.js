import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import ListBookTitle from './ListBookTitle';
import ListBookContent from './ListBookContent';
import SearchButton from './SearchButton';
import SearchBook from './SearchBook';
import './App.css';

class BooksApp extends React.Component {
  state = {
    books: []
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
      console.log(books)
    })
  }
  render() {
    return (
      <div className="app">
        <Route path ="/search" render={() => (
          <SearchBook
            books={this.state.books}
          />
        )}/>
        <Route exact path="/" render={() => (
          <div className="list-books">
            <ListBookTitle/>
            <ListBookContent/>
            <SearchButton/>
          </div>

        )}/>
      </div>
    )
  }
}

export default BooksApp;