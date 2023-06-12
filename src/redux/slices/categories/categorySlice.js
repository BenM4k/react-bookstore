import { createSlice } from '@reduxjs/toolkit';

const status = '';// will be given when I join the Provider
const categorySlice = createSlice({
  name: 'category',
  initialState: '',
  reducers: {
    checkStatus: (state, action) => {
      if (action.type === status) {
        state.initialState += 'Under construction';
      }
    },
  },
});

export const { checkStatus } = categorySlice.actions;
export default categorySlice.reducer;
