import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAKgqWc_OG6T7tFRByn9aU47xnBiRJ5hfU",
    authDomain: "slack-clone-challenge-fc484.firebaseapp.com",
    projectId: "slack-clone-challenge-fc484",
    storageBucket: "slack-clone-challenge-fc484.appspot.com",
    messagingSenderId: "915546659846",
    appId: "1:915546659846:web:5784435193444f90d3f787"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;