import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  status: 'idle',
  users: []
};


export const userSlice = createSlice({
  name: 'user',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    getUserList:(state, action)=>{
      state.users = action.payload;
    }
  }
});

// export const { increment, decrement, incrementByAmount } = userSlice.actions;


export default userSlice.reducer;
