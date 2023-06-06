import React, { useState } from 'react';
import BookList from './BookList';

function Books() {
  const [books, setBooks] = useState([
    {
      title: 'Fantastic Beasts And Where To find them',
      author: 'J. K. Rowling',
      category: 'action',
      chapter: 'Chapter 17',
    },
    {
      title: 'The Hunger games',
      author: 'Suzanne Collins',
      category: 'action',
      chapter: 'Chapter 3',
    },
    {
      title: 'Jurassic Parc',
      author: 'Michael Crichton',
      category: 'sci-fi',
      chapter: 'Introduction',
    },
  ]);
  const handleDelete = (title) => {
    const newBookList = books.filter((book) => book.title !== title);
    setBooks(newBookList);
  };
  return (
    <div>
      <BookList books={books} handleDelete={handleDelete} />
      <div style={{
        width: '100%',
        background: 'black',
        height: '2px',
        marginTop: '10px',
        marginBottom: '10px',
      }}
      />
      <form>
        <h1>ADD NEW BOOK</h1>
        <div>
          <input type="text" />
          <select>
            <option value="action" selected>Action</option>
            <option value="sci-fi">Sci-Fi</option>
            <option value="Economy">Economy</option>
          </select>
          <button type="submit">ADD BOOK</button>
        </div>
      </form>
    </div>
  );
}

export default Books;
