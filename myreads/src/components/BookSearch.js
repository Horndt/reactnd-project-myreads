import React, { useEffect, useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import Book from './Books';
import { search } from '../API/BooksAPI';

function BookSearch({ books, bookSight, inputRack }) {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState([]);

  useEffect(() => {
    const handleQuery = () => {
      if (query.length > 0) {
        search(query.trim())
          .then((data) => {
            if (data.error) {
              setResult([]);
              console.log(data.error);
            } else {
              data.forEach((d) => {
                let found = false;
                books.forEach((b) => {
                  if (d.id === b.id) {
                    d.shelf = b.shelf;
                    found = true;
                  }
                });
                if (!found) d.shelf = 'none';
              });
              setResult(data);
            }
          })
          .catch((e) => console.log('here', e));
      }
    };
    query === '' ? setResult([]) : handleQuery();
  }, [query, books]);

  return (
    <div>
      <center>
        <h1>Search for new Books</h1>
        <div>
          {result && (
            <div className="search-books">
              <div className="search-books-bar">
                <Link to="/" className="close-search">
                  Close
                </Link>
                <div className="search-book-input-wrapper">
                  <input
                    type="text"
                    placeholder="search by title, author"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                </div>
              </div>
              <div className="search-books-result">
                <ol className="books-grid">
                  {query &&
                    result.map((book) => (
                      <li key={book.id}>
                        <Book
                          book={book}
                          inputRack={inputRack}
                          bookSight={bookSight}
                        />
                      </li>
                    ))}
                </ol>
              </div>
            </div>
          )}
        </div>
      </center>
    </div>
  );
}

export default BookSearch;