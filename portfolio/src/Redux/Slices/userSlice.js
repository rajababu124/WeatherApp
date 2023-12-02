import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// Create Action
export const createUser = createAsyncThunk("createUser", async (data, {rejectWithValue}) => {
  const response = await fetch("http://localhost:5000/api/user", {
    method: "post",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  });

  try {
    const result = await response.json();
    return result;
  } catch (error) {
    return rejectWithValue(error)
  }
})
export const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    loading : false,
    error : null
  },
  extraReducers : {
    [createUser.pending] : (state) => {
        state.loading = true
    },
    [createUser.fulfilled] : (state, action) => {
        state.loading = false
        state.users.push(action.payload)
    },
    [createUser.rejected] : (state, action) => {
        state.loading = false
        state.users = action.payload
    },
  }
})

export const {  } = userSlice.actions;
export default userSlice.reducer; 