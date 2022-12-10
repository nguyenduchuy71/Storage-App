import { configureStore } from '@reduxjs/toolkit'
import appReducer from '../features/appSlice'
import projectReducer from '../features/projectSlice'
import fileReducer from '../features/fileSlice'

export default configureStore({
  reducer: {
    app: appReducer,
    project: projectReducer,
    file: fileReducer
  }
})
