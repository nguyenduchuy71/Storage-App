import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { db } from '../config/firebaseConfig.js'
import { v4 as uuid } from 'uuid'

export const addProjectAsync = createAsyncThunk(
  'project/addProjectAsync',
  async payload => {
    const unique_id = uuid()
    await db
      .collection('project')
      .add({
        project_id: unique_id,
        project_name: payload.projectName,
        project_pass: payload.projectPassword,
        user_id: payload.user?.uid,
        user_name: payload.user?.displayName,
        user_img: payload.user?.photoURL,
        author_accounts: []
      })
      .then(docRef => {
        console.log('Document written with ID: ', docRef.id)
        return { status_code: 200 }
      })
      .catch(error => {
        return { status_code: 400, error: error }
      })
    return { status_code: 200 }
  }
)

export const deleteProjectAsync = createAsyncThunk(
  'project/deleteProjectAsync',
  async payload => {
    const project_query = await db
      .collection('project')
      .where('project_id', '==', payload.project_id)
    project_query.get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        doc.ref.delete()
      })
    })
  }
)

export const projectSlice = createSlice({
  name: 'project',
  initialState: {
    isLoading: false,
    success: false
  },
  extraReducers: {
    [deleteProjectAsync.pending]: (state, action) => {
      state.isLoading = true
    },
    [deleteProjectAsync.fulfilled]: (state, action) => {
      state.isLoading = false
    },
    [deleteProjectAsync.rejected]: (state, action) => {
      state.isLoading = false
    },
    [addProjectAsync.pending]: (state, action) => {
      state.isLoading = true
    },
    [addProjectAsync.fulfilled]: (state, action) => {
      state.success = action.payload.status_code === 200
      state.isLoading = false
    },
    [addProjectAsync.rejected]: (state, action) => {
      state.isLoading = false
    }
  }
})
export default projectSlice.reducer
