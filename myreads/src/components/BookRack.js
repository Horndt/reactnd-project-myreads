import React from 'react';
import Books from './Books';
import PropTypes from 'prop-types';

function BookRack({ title, books, bookSight, inputRack }) {
  return (
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book) => (
              <li key={book.id}>
                <Books
                  book={book}
                  inputRack={inputRack}
                  bookSight={bookSight}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
BookRack.prototype = {
  title: PropTypes.string.isRequired,
  book: PropTypes.array.isRequired,
  inputRack: PropTypes.func.isRequired,
  bookSight: PropTypes.func.isRequired,
};

export default BookRack;
