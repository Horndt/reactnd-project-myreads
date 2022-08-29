import React from 'react';
import PropTyes from 'prop-types';
import BookRack from './BookRack';

function Home({ books, bookSight, inputRack }) {
  const showRack = [
    { id: 'rack1', title: 'Current Reading', filter: 'currentlyReading' },
    { id: 'rack2', title: 'Want to Read', filter: 'wantToRead' },
    { id: 'rack3', title: 'Read', filter: 'read' },
  ];
  return (
    <div>
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads Project by Udacity</h1>
        </div>
        <div className="list-books-content">
          <div>
            {showRack.map((s) => (
              <div key={s.id}>
                <BookRack
                  title={s.title}
                  books={books.filter((book) => book.shelf === s.filter)}
                  inputRack={inputRack}
                  bookSight={bookSight}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="open-search">
          <button onClick={() => window.open('/search', '_self')}></button>
        </div>
      </div>
    </div>
  );
}
Home.prototype = {
  books: PropTyes.array.isRequired,
  inputRack: PropTyes.func.isRequired,
  bookSight: PropTyes.func.isRequired,
};

export default Home;
