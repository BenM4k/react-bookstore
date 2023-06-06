import React from 'react';
import PropTypes from 'prop-types';

function BookList({ books, handleDelete }) {
  return (
    <ul>
      {books.map((book) => (
        <>
          <li
            key={book.title}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: '50px',
            }}
          >
            <div>
              <span>{book.category}</span>
              <h2>{book.title}</h2>
              <p>{book.author}</p>
              <div style={{
                display: 'flex',
                gap: '10px',
                marginTop: '25px',
              }}
              >
                <button type="submit">Comments</button>
                <button onClick={() => handleDelete(book.title)} type="submit">Remove</button>
                <button type="submit">Edit</button>
              </div>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
            }}
            >
              <div>
                <img alt={book.title} />
                <p>
                  8%
                  <br />
                  Completed
                </p>
              </div>
              <div>
                <p>Current chapter</p>
                <p>{book.chapter}</p>
                <button type="submit">UPDATE PROGRESS</button>
              </div>
            </div>
          </li>
        </>
      ))}
    </ul>
  );
}

BookList.propTypes = {
  books: PropTypes.arrayOf().isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default BookList;
