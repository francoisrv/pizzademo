import * as firebase from 'firebase/app'
import 'firebase/firestore'

firebase.initializeApp({
  apiKey: 'AIzaSyAAJGnQD-SoeBcY3PLlGcTcplvIL7a3FQA',
  projectId: 'pizzademo-6e595',
  appId: '1:198233008231:web:fae280abf92a6ddb6d4cc2',
  authDomain: 'pizzademo-6e595.firebaseapp.com',
})

export const db = firebase.firestore()
