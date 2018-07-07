import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI'
import Book from './Book';
import escapedRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';

class SearchBook extends Component {
    state = {
        query: '',
        books: [],
    }

    searchBook = query => {
        this.setState({ query: query.trim() });
        if (query.length) {
            BooksAPI.search(query).then((searched) => {
              if ( searched && searched.length && query.length) {
                const books = searched.map(({id, authors, title, imageLinks}) => {
                  const library = this.props.books.find((library) => library.id === id);
                  const shelf = library ? library.shelf : 'none';
                          return {
                              id,
                              shelf,
                              author: authors ? authors : 'Author not found',
                              title: title ? title : 'Title not found',
                              image: imageLinks ? imageLinks.thumbnail : 'http://via.placeholder.com/128x193?text=No%20Image%20found'

                          };
                      });
                this.setState({ books });
              }
            });
      }
    }

    render() {
        let showingBooks;
        if (this.state.query) {
            const match = new RegExp(escapedRegExp(this.state.query), 'i');
            showingBooks = this.state.books.filter((book) => match.test(book.title));
        } else {
            showingBooks = this.state.books;
        }
        showingBooks.sort(sortBy('title'));

        return (
            <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text"
                       placeholder="Search by title or author"
                       value={this.state.query}
                       onChange={(event) => {this.searchBook(event.target.value)
                }}
              />

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {showingBooks.map((book) => (
                    <li key={book.id}>
                      <Book book={book}
                          onUpdateBook={this.props.onUpdateBook}
                          option={book.shelf}
                          title={book.title}
                          author={book.author}
                          image={book.image}
                          />
                      </li>
                    ))}
              </ol>
            </div>
          </div>
            );
    }
}

export default SearchBook;