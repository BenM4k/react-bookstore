import { createSlice } from '@reduxjs/toolkit';

// const myBooks = [
//     {
//       title: 'Fantastic Beasts And Where To find them',
//       author: 'J. K. Rowling',
//       category: 'action',
//       chapter: 'Chapter 17',
//     },
//     {
//       title: 'The Hunger games',
//       author: 'Suzanne Collins',
//       category: 'action',
//       chapter: 'Chapter 3',
//     },
//     {
//       title: 'Jurassic Parc',
//       author: 'Michael Crichton',
//       category: 'sci-fi',
//       chapter: 'Introduction',
//     },
// ];

const bookSlice = createSlice({
  name: 'book',
  initialState: [],
  reducers: {
    deleteBook: (state, action) => {
      const bookTitle = action.payload;
      state.myBooks = state.myBooks.filter((book) => book.title !== bookTitle);
    },
    addBook: (state, action) => {
      const book = action.payload;
      state.myBooks.push(book);
    },
  },
});

export const { addBook, deleteBook } = bookSlice.actions;
export default bookSlice.reducer;
