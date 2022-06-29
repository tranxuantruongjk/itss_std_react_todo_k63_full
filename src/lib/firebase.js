import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBc-gqWLoMW1rgIwvagrHIwVVL2KP6IvuU",
    authDomain: "todo-app-2eb0f.firebaseapp.com",
    projectId: "todo-app-2eb0f",
    storageBucket: "todo-app-2eb0f.appspot.com",
    messagingSenderId: "280462127449",
    appId: "1:280462127449:web:be8fc274983ebd59e45c48"
  };

  firebase.initializeApp(firebaseConfig);