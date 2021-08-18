import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCj39EljVNXwWTdEdBSh43z2sqyudk0v8w",
  authDomain: "barter-b88b5.firebaseapp.com",
  projectId: "barter-b88b5",
  storageBucket: "barter-b88b5.appspot.com",
  messagingSenderId: "888822712335",
  appId: "1:888822712335:web:9c742b21d2ce938d82bb7a"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
