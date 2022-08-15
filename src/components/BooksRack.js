import React from "react";
import PropTypes from "prop-types";
import Book from "./Books";

const BooksRack = ({ title, books, bookChangeRack, error }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        {books.length ? (
          <ol className="books-grid">
            {books.map((book) => (
              <Book bookChangeRack={bookChangeRack} key={book.id} book={book} />
            ))}
          </ol>
        ) : (
          <p className="error">{error}</p>
        )}
      </div>
    </div>
  );
};

BooksRack.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  bookChangeRack: PropTypes.func.isRequired,
};

export default BooksRack;
