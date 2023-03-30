import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  noteData: [],
};

export const noteSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    // add note object to noteData array
    addNote(state, action) {
      state.noteData.push(action.payload);
    },
    removeNote(state, action) {
      state.noteData = state.noteData.filter(
        (note,index) => note.index !== action.payload.Title,
      );
    },
  },
});

export const {addNote, removeNote, updateNote} = noteSlice.actions;

export default noteSlice.reducer;
