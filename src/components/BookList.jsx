import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import { deleteBook } from '../redux/slices/books/bookSlice';

function BookList() {
  function getRandomNumber(numbers) {
    const randomIndex = Math.floor(Math.random() * numbers.length);
    return numbers[randomIndex];
  }
  const numbers = [8, 64, 0];
  const randomValue = getRandomNumber(numbers);
  const {
    books, isLoading, errorMsg,
  } = useSelector((store) => store.book);
  const dispatch = useDispatch();
  if (isLoading) {
    return (
      <div className="lds-roller">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    );
  }

  if (errorMsg) {
    return (
      <div style={{ marginTop: '50px' }}>Failed to fetch</div>
    );
  }

  return (
    <ul
      style={{
        padding: '0 5em',
        overflow: 'auto',
        maxHeight: '265px',
      }}
    >
      {Object.entries(books).map(([id, book]) => book.map((bookItem) => (
        <li
          key={id}
          style={{
            background: '#fff',
            padding: '1em',
            marginBottom: '1em',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <p
              style={{
                color: 'gray',
                fontWeight: 'bold',
                fontSize: '.9em',
              }}
            >
              {bookItem.category}
            </p>
            <h2
              style={{
                fontWeight: 'bold',
                fontSize: '1.3em',
                marginTop: '.3em',
                color: '#121212',
              }}
            >
              {bookItem.title}
            </h2>
            <p
              style={{
                color: '#4386bf',
              }}
            >
              {bookItem.author}
            </p>
            <div>
              <button
                type="button"
                style={{
                  marginRight: '.8em',
                  paddingRight: '.8em',
                  borderRight: '2px solid #e9e8e8',
                  color: '#4386bf',
                  cursor: 'pointer',
                }}
              >
                edit
              </button>
              <button
                type="button"
                style={{
                  marginRight: '.8em',
                  paddingRight: '.8em',
                  borderRight: '2px solid #e9e8e8',
                  color: '#4386bf',
                  cursor: 'pointer',
                }}
                onClick={() => {
                  dispatch(deleteBook(id));
                }}
              >
                delete
              </button>
              <button
                type="button"
                style={{
                  color: '#4386bf',
                  cursor: 'pointer',
                }}
              >
                comment
              </button>
            </div>
          </div>
          <div className="progress">
            <div style={{
              display: 'flex',
              gap: '1em',
            }}
            >
              <div className="progress-bar">
                <div className="progresss" />
              </div>
              <p style={{ textAlign: 'center', color: 'gray' }}>
                <span style={{ fontSize: '2.2em', color: 'black' }}>
                  {randomValue}
                  %
                </span>
                <br />
                Completed
              </p>
            </div>
            <div className="infos">
              <p className="current-chapter">Current chapter</p>
              <h3 className="chapter">chapter 17</h3>
              <button type="button" className="update">update progress</button>
            </div>
          </div>
        </li>
      )))}
    </ul>
  );
}

// BookList.propTypes = {
//   books: PropTypes.arrayOf().isRequired,
// };

export default BookList;
