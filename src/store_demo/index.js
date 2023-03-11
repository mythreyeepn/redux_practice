import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterSlic = createSlice({
  name:'counter',
  initialState:{counter : 0},
  reducers:{
    increment(state,action) {
      state.counter ++
     },
    decrement(state,action) {
      state.counter --
     },
    addBy(state,action) { 
      state.counter += action.payload
    }
  }
})

export const actions = counterSlic.actions;
const store = configureStore({
  reducer:counterSlic.reducer
})

export default store
