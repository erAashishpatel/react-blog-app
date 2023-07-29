// import firebase from "firebase/compat/app";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";

// My web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLYBklp-YYUGYXyQqQSFXZBQ3Sg5Hmkus",
  authDomain: "react-blog-hooks-6a844.firebaseapp.com",
  projectId: "react-blog-hooks-6a844",
  storageBucket: "react-blog-hooks-6a844.appspot.com",
  messagingSenderId: "1008376067885",
  appId: "1:1008376067885:web:fdab71dbe3988ec40805a4",
  measurementId: "G-N1114VZ5KR",
};

// const firebaseApp = firebase.initializeApp(firebaseConfig);

// // Used for DB and Auth:
// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export { auth, db };
// export default firebase;

firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// export const firestore = firebase.firestore();
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
