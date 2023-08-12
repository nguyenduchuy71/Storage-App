import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import 'firebase/compat/storage'

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_APIKEY,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: 'storage-app-eee55.appspot.com',
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId,
//   measurementId: process.env.REACT_APP_measurementId
// }

const firebaseConfig = {
  apiKey: "AIzaSyBOGFv9isVFDQNXwTCCOdmDxfuPpVhLJjw",
  authDomain: "storage-app-eee55.firebaseapp.com",
  projectId: "storage-app-eee55",
  storageBucket: "storage-app-eee55.appspot.com",
  messagingSenderId: "1019170109992",
  appId: "1:1019170109992:web:0af2410a50ef4d7ace131d",
  measurementId: "G-SQ4JQSLRER"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebaseApp.storage()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider, db, storage }
