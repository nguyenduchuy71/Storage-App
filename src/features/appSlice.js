import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { db } from '../config/firebaseConfig.js'

export const enterProjectAsync = createAsyncThunk(
  'app/enterProjectAsync',
  async payload => {
    let ref = db.collection('storage')
    const snapshot = await ref.get()
    let data = []
    snapshot.forEach(doc => {
      if (doc.data().user_id === payload.user?.uid) {
        data = [doc.data(), ...data]
      }
    })
    return data[0]
  }
)

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    roomId: null,
    isLoading: false,
    defaultStorage: {}
  },
  reducers: {
    enterRoom: (state, action) => {
      state.roomId = action.payload.roomId
    }
  },
  extraReducers: {
    [enterProjectAsync.pending]: (state, action) => {
      state.isLoading = true
    },
    [enterProjectAsync.fulfilled]: (state, action) => {
      state.defaultStorage = action.payload
      state.isLoading = false
    },
    [enterProjectAsync.rejected]: (state, action) => {
      state.isLoading = false
    }
  }
})

export const { enterRoom } = appSlice.actions

export const selectRoomId = state => state.app.roomId

export default appSlice.reducer
