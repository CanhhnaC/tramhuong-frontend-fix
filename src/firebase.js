import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBPL9PszsbYecMBbNT5d-1IRAtntzHamOM",
  authDomain: "tram-huong-dao-quan.firebaseapp.com",
  databaseURL: "https://tram-huong-dao-quan.firebaseio.com",
  projectId: "tram-huong-dao-quan",
  storageBucket: "tram-huong-dao-quan.appspot.com",
  messagingSenderId: "616266967907",
  appId: "1:616266967907:web:27c54629a600863f1c0156",
  measurementId: "G-6241DF2TQX",
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

firestore.settings({ timestampsInSnapshots: true });

window.firebase = firebase;

export default firebase;
