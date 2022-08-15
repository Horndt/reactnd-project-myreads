import React from "react";
import PropTypes from "prop-types";
import Book from "./Books";

const BookSorting = ({ title, books, bookChangeShelf, error }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        {books.length ? (
          <ol className="books-grid">
            {books.map((book) => (
              <Book
                bookChangeShelf={bookChangeShelf}
                key={book.id}
                book={book}
              />
            ))}
          </ol>
        ) : (
          <p className="error">{error}</p>
        )}
      </div>
    </div>
  );
};

BookSorting.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  bookChangeShelf: PropTypes.func.isRequired,
};

export default BookSorting;
