// import firebase0 from 'firebase';
// import firebase0 from "firebase";
import * as firebase from "firebase";

const firebaseConfig={
    apiKey: "AIzaSyBexO3tV-EJ96KHP5tIG-oElC3SgE0CkUo",
    authDomain: "twitter-clone-v1-7fa5f.firebaseapp.com",
    projectId: "twitter-clone-v1-7fa5f",
    storageBucket: "twitter-clone-v1-7fa5f.appspot.com",
    messagingSenderId: "721613982959",
    appId: "1:721613982959:web:6bf7d712ec758ff0af1f1a"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();

export default db;




