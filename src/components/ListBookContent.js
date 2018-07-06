import React, {Component} from 'react';
import BookShelf from './BookShelf';

class ListBookContent extends Component {

    render () {
        return (
            <div className="list-books-content">
              <div>
                <BookShelf title="Currently Reading"
                           onUpdateBook={this.props.onUpdateBook}
                           books={this.props.books}
                           value="currentlyReading"
                           option="currentlyReading"/>
                <BookShelf title="Want To Read"
                           onUpdateBook={this.props.onUpdateBook}
                           books={this.props.books}
                           value="wantToRead"
                           option="wantToRead"/>
                <BookShelf title="Read"
                           onUpdateBook={this.props.onUpdateBook}
                           books={this.props.books}
                           value="read"
                           option="read"/>
              </div>
            </div>
        );
    }
}

export default ListBookContent;