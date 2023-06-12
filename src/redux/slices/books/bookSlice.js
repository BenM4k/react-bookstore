import { createSlice } from '@reduxjs/toolkit';

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
