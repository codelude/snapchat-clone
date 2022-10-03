import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBMh_GSaKV1K4sKwck8NP5m_dUwiwlDDiA",
  authDomain: "snapchat-clone-yt.firebaseapp.com",
  projectId: "snapchat-clone-yt",
  storageBucket: "snapchat-clone-yt.appspot.com",
  messagingSenderId: "1032610135706",
  appId: "1:1032610135706:web:196625215f3eca5b8c6923",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
