import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { db } from '../config/firebaseConfig.js'

export const addStorageAsync = createAsyncThunk(
  'storage/addStorageAsync',
  async payload => {
    await db
      .collection('storage')
      .add({
        storage_type: payload.storage_type,
        apiKey: payload.apiKey,
        authDomain: payload.authDomain,
        projectId: payload.projectId,
        storageBucket: payload.storageBucket,
        messagingSenderId: payload.messagingSenderId,
        appId: payload.appId,
        measurementId: payload.measurementId,
        user_id: payload.user?.uid,
        user_name: payload.user?.displayName,
        user_img: payload.user?.photoURL
      })
      .then(docRef => {
        console.log('Document written with ID: ', docRef.id)
      })
      .catch(error => {
        return { status_code: 400, error: error }
      })
    return { status_code: 200 }
  }
)

export const storageSlice = createSlice({
  name: 'storage',
  initialState: {
    isLoading: false,
    success: false,
    error: ''
  },
  extraReducers: {
    [addStorageAsync.pending]: (state, action) => {
      state.isLoading = true
    },
    [addStorageAsync.fulfilled]: (state, action) => {
      state.success = action.payload.status_code === 200
      state.isLoading = false
    },
    [addStorageAsync.rejected]: (state, action) => {
      state.isLoading = false
    }
  }
})
export default storageSlice.reducer
