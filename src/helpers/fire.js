import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyDXbqBGRT9Zit0Huf48LL3yDFX2UfN1i_A",
  authDomain: "reactauthlogin.firebaseapp.com",
  projectId: "reactauthlogin",
  storageBucket: "reactauthlogin.appspot.com",
  messagingSenderId: "1008930774403",
  appId: "1:1008930774403:web:bd3913ac847d3725a62ab6"
}

const fire = firebase.initializeApp(firebaseConfig)


export default fire