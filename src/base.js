import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyChTzJFBbfMHY4HzU_ObclYQoepS7P-6Cs',
  authDomain: 'recipes-box-f6c95.firebaseapp.com',
  databaseURL: 'https://recipes-box-f6c95-default-rtdb.firebaseio.com'
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
