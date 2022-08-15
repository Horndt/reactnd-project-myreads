import React from "react";
import PropTypes from "prop-types";

const Book = ({ bookChangeShelf, book }) => {
  let image = book.imageLink
    ? book.imageLink.thumb
    : "https://www.deskmodder.de/phpBB3/files/vorschau/38_No_Cover_Jyrik.png";
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${image})`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <select
              value={book.shelf}
              onChange={(e) => bookChangeShelf(book, e.target.value)}
            >
              <option disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
          {book.authors ? book.authors.join(", ") : "Author unknown :( "}
        </div>
      </div>
    </li>
  );
};

Book.PropTypes = {
  bookChangeShelf: PropTypes.func.isRequired,
  book: PropTypes.object.isRequired,
};

export default Book;
