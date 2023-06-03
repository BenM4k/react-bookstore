import React from 'react'

function BookList({ books, handleDelete }) {
  return (
    <ul>
        {books.map((book) =>{
            return (
                <>
                    <li key={book.title} style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginTop: '50px',
                    }}>
                        <div>
                            <span>{book.category}</span>
                            <h2>{book.title}</h2>
                            <p>{book.author}</p>
                            <div style={{
                                display: 'flex',
                                gap: '10px',
                                marginTop: '25px',
                            }}>
                                <button>Comments</button>
                                <button onClick={() => handleDelete(book.title)}>Remove</button>
                                <button>Edit</button>
                            </div>
                        </div>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '10px',
                        }}>
                            <div>
                                <img></img>
                                <p>8%<br/>Completed</p>
                            </div>
                            <div>
                                <p>Current chapter</p>
                                <p>{book.chapter}</p>
                                <button>UPDATE PROGRESS</button>
                            </div>
                        </div>
                    </li>
                </>
            )
        })}
    </ul>
  )
}

export default BookList;