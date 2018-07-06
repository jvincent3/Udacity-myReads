import React, { Component } from 'react';
import Book from './Book';

class BookShelf extends Component {

	render() {
		return (
			 <div className="bookshelf">
                  <h2 className="bookshelf-title">{this.props.title}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {this.props.books.map(book => (
                    	book.shelf === this.props.value &&
                    	<li key={book.id}>
                    	<Book book={book}
                    		  onUpdateBook={this.props.onUpdateBook}
                    		  option={this.props.option}
                    		  />
                    	</li>
                    ))}
                    </ol>
                  </div>
                </div>
			);
	}
}

export default BookShelf;