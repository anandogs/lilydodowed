import firebase from "firebase/app"
import "firebase/firestore"

const config = {
  apiKey: "AIzaSyDMKPweCPy5T0tkKSp1v6q90i8Gcb00aBw",
  authDomain: "dodo-lily-wed.firebaseapp.com",
  projectId: "dodo-lily-wed",
  storageBucket: "dodo-lily-wed.appspot.com",
  messagingSenderId: "75338506530",
  appId: "1:75338506530:web:91f2ff9d1dcf5777e4c57b",
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

const firestore = firebase.firestore()

export { firestore }
