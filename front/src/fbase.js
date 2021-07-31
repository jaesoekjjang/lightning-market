import firebase from 'firebase/app';
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyB0VCD7VL2v9PZrTwNWsFnn8_EYj-NHyMQ",
  authDomain: "lightning-market.firebaseapp.com",
  projectId: "lightning-market",
  storageBucket: "lightning-market.appspot.com",
  messagingSenderId: "733582023040",
  appId: "1:733582023040:web:0bda832db9b33737b64965",
  measurementId: "G-HFNP193CHJ"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();