import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'
var firebaseConfig = {
    apiKey: "AIzaSyBKUDL--6CGIWnk-L9uuBVio-uyVUIicAA",
    authDomain: "pr-manager-5cc9c.firebaseapp.com",
    databaseURL: "https://pr-manager-5cc9c.firebaseio.com",
    projectId: "pr-manager-5cc9c",
    storageBucket: "pr-manager-5cc9c.appspot.com",
    messagingSenderId: "882951221832",
    appId: "1:882951221832:web:d162d8c02329b955665e7d",
    measurementId: "G-QCPPDJ11WE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots : true})

  export default firebase;