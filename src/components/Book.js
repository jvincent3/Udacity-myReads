import React, { Component } from 'react';

class Book extends Component {
	render() {
		const book  = this.props.book;
		return (

	                      <div className="book">
	                        <div className="book-top">
	                            <div className="book-cover" style={{width: 128, height: 193,
	                            backgroundImage: `url(${this.props.image})`
	                            }}/>
	                            <div className="book-shelf-changer">
	                              <select value={this.props.option}
	                              		  onChange={(event) => this.props.onUpdateBook(book, event)}>
	                                <option value="move" disabled>Move to...</option>
	                                <option value="currentlyReading">Currently Reading</option>
	                                <option value="wantToRead">Want to Read</option>
	                                <option value="read">Read</option>
	                                <option value="none">None</option>
	                              </select>
	                            </div>
	                        </div>
	                        <div className="book-title">{this.props.title}</div>
	                        <div className="book-authors">{this.props.author}</div>
	                      </div>

			);
	}
}

export default Book;