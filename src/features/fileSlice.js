import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { storage } from '../config/firebaseConfig.js'

export const fetchFilestAsync = createAsyncThunk(
  'file/fetchFilestAsync',
  async payload => {
    const project_images = await storage.ref().child(payload.project_id)
    console.log(project_images)
  }
)

export const fileSlice = createSlice({
  name: 'file',
  initialState: {
    used_quota: 0,
    files: [],
    isLoading: false
  },
  extraReducers: {
    [fetchFilestAsync.pending]: (state, action) => {
      state.isLoading = true
    },
    [fetchFilestAsync.fulfilled]: (state, action) => {
      state.isLoading = false
    },
    [fetchFilestAsync.rejected]: (state, action) => {
      state.isLoading = false
    }
  }
})
export default fileSlice.reducer
