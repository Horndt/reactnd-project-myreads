import './App.css';
import { useEffect, useState } from 'react';
import BookSearch from './components/BookSearch';
import Homepage from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { getAll } from './API/BooksAPI';
import NotFound from './components/NotFound';

function App() {
  const [books, setBooks] = useState([]);
  const [setbookSight] = useState({});

  const setData = () => {
    getAll()
      .then((data) => {
        if (data) setBooks(data);
      })
      .catch((e) => console.log(e));
  };

  function inputRack(shelf, book) {
    const b = books.filter((b) => b.id === book.id);
    if (b.length > 0) {
      const other = books.filter((b) => b.id !== book.id);
      b[0].shelf = shelf;
      setBooks([...other, ...b]);
    } else {
      book.shelf = shelf;
      setBooks([...books, book]);
    }
  }

  useEffect(() => {
    setData();
  }, []);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route
            exact
            path="/"
            element={
              <Homepage
                books={books}
                inputRack={inputRack}
                bookSight={setbookSight}
              />
            }
          />
          <Route
            exact
            path="/search"
            element={
              <BookSearch
                books={books}
                inputRack={inputRack}
                bookSight={setbookSight}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
