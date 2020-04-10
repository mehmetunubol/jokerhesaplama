import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyBPlEbGvPrZSvqowuOD4zQdHzgkFncWdJY",
  authDomain: "jokerhesaplama.firebaseapp.com",
  databaseURL: "https://jokerhesaplama.firebaseio.com",
  projectId: "jokerhesaplama",
  storageBucket: "jokerhesaplama.appspot.com",
  messagingSenderId: "891504979374",
  appId: "1:891504979374:web:b55936d85a5eb97ed56c3f",
  measurementId: "G-E4L2G2WC07"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 