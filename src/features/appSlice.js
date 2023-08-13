import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { db } from '../config/firebaseConfig.js'
import { doc, updateDoc } from "firebase/firestore"

export const enterProjectAsync = createAsyncThunk(
  'app/enterProjectAsync',
  async payload => {
    const ref = db.collection('storage')
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

export const enterRoomAsync = createAsyncThunk(
  'app/enterRoomAsync',
  async payload => {
    const roomId = payload.roomId
    const ref = db.collection('project')
    const snapshot = await ref.get()
    const user_id = payload.user?.uid
    snapshot.forEach(async (docData) => {
      const data = docData.data()
      if(data?.project_id == roomId){
        const docRef = doc(db, "project", docData.id);
        const author_accounts = data?.author_accounts
        author_accounts.push(user_id)
        await updateDoc(docRef, {
          author_accounts: author_accounts
        });
      }
    })
    return roomId
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
    },
    [enterRoomAsync.pending]: (state, action) => {
      state.isLoading = true
    },
    [enterRoomAsync.fulfilled]: (state, action) => {
      state.roomId = action.payload
      state.isLoading = false
    },
    [enterRoomAsync.rejected]: (state, action) => {
      state.isLoading = false
    }
  }
})

export const selectRoomId = state => state.app.roomId

export default appSlice.reducer
