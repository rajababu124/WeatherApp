import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const createTasks = createAsyncThunk("createTasks", async (data, {rejectWithValue}) => {
  const response = await fetch("http://localhost:5000/api/task", {
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
export const taskSlice = createSlice({
  name: 'task',
  initialState: {
    taskList: [],
    loading : false,
    error : null
  },
  reducers: {
    addTask: (state, action) => {
      state.taskList.push(action.payload)
    },
    deleteTask: (state, action) => {
      state.taskList = action.payload
    },
    editTask: (state, action) => {

      console.log(action)
    },
    draggedTask: (state, action) => {
      state.taskList = action.payload
    }
  },
  extraReducers: {
    [createTasks.pending]: (state) => {
      state.loading = true;
    },
    [createTasks.fulfilled]: (state, action) => {
      state.loading = false
      state.taskList.push(action.payload)
    },
    [createTasks.rejected]: (state, action) => {
      state.loading = false
      state.taskList = action.payload
    }
  }
})

export const { addTask, deleteTask, editTask, draggedTask } = taskSlice.actions;
export default taskSlice.reducer; 