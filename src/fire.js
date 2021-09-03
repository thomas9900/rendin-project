// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYdNyU9iymrLuCYhx3zkxBKi39s-oKnZQ",
  authDomain: "rendin-f5a1d.firebaseapp.com",
  projectId: "rendin-f5a1d",
  storageBucket: "rendin-f5a1d.appspot.com",
  messagingSenderId: "765666576672",
  appId: "1:765666576672:web:33f535f3979d6230046f45"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;