import React, {Component} from 'react';
import * as BooksAPI from '../BooksAPI'
class ListBookContent extends Component {
	state = {
		books: '',
		searchedBooks: [],
		currentVal: '',
		bookShelf: []
	}

	updateShelf = (book, event) => {
		BooksAPI.update(book, event.target.value);
		this.setState({
			books: book,
			currentVal: event.target.value
		})
		console.log(this.state.books)
	}

	render () {
		return (
			<div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {this.props.books.map(book => (
                    	book.shelf === 'currentlyReading' &&
                    	<li key={book.id}>
	                      <div className="book">
	                        <div className="book-top">
	                            <div className="book-cover" style={{width: 128, height: 193,
	                            backgroundImage: `url(${book.imageLinks.smallThumbnail})`
	                            }}/>
	                            <div className="book-shelf-changer">
	                              <select value="currentlyReading"
	                              		  onChange={(event) => this.props.onUpdateBook(book, event)}>
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
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {this.props.books.map(book => (
                    	book.shelf === 'wantToRead' &&
                    	<li key={book.id}>
	                      <div className="book">
	                        <div className="book-top">
	                            <div className="book-cover" style={{width: 128, height: 193,
	                            backgroundImage: `url(${book.imageLinks.smallThumbnail})`
	                            }}/>
	                            <div className="book-shelf-changer">
	                              <select value="wantToRead"
	                              		  onChange={(event) => this.props.onUpdateBook(book, event)}>
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
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {this.props.books.map(book => (
                    	book.shelf === 'read' &&
                    	<li key={book.id}>
	                      <div className="book">
	                        <div className="book-top">
	                            <div className="book-cover" style={{width: 128, height: 193,
	                            backgroundImage: `url(${book.imageLinks.smallThumbnail})`
	                            }}/>
	                            <div className="book-shelf-changer">
	                              <select value="read"
	                              		  onChange={(event) => this.props.onUpdateBook(book, event)}>
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
              </div>
            </div>
			);
	}
}

export default ListBookContent;