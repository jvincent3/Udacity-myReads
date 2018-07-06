import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import escapedRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';

class SearchBook extends Component {
    state = {
        query: '',
        searchedBooks: [],
        searched: [],
        val: ''
    }

    updateQuery = ( query ) => {
        this.setState({ query: query.trim() });
    }

    updateShelf = (book, event) => {
      BooksAPI.update(book, event.target.value);
      this.setState({
        val: event.target.value
      })
    }

      updateBookshelf = (book) => {
        this.setState({ searchedBooks: book })
      }

    searchBook = (query) => {
        BooksAPI.search(query).then((searched) => {
        if (this.state.query.length === 1) {
          this.setState({ searched });
        }  
    });
    }

    render() {
        let showingBooks;
        if (this.state.query) {
            const match = new RegExp(escapedRegExp(this.state.query), 'i');
            showingBooks = this.state.searched.filter((book) => match.test(book.title));
        } else {
            showingBooks = this.state.searched;
        }
        showingBooks.sort(sortBy('title'));

        return (
            <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text"
                placeholder="Search by title or author"
                value={this.state.query}
                onChange={(event) => {this.updateQuery(event.target.value)
                  this.searchBook(event.target.value)
                }}
              />

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {showingBooks.map((book) => (
                    <li key={book.id}>
                      <div className="book">
                        <div className="book-top">
                            <div className="book-cover" style={{width: 128, height: 193,
                            backgroundImage: `url(${book.imageLinks.smallThumbnail})`
                            }}/>
                            <div className="book-shelf-changer">
                              <select value="none" onChange={(event) => this.props.onUpdateBook(book, event)}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                        </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">{book.authors}</div>
                      </div>
                    </li>
                    ))}
              </ol>
            </div>
          </div>
            );
    }
}

export default SearchBook;