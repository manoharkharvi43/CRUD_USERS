import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from './App'
import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAwJldCIpCVuiBzjT7AXGXFbqbRQ_cRTU8",
//   authDomain: "crudappusers.firebaseapp.com",
//   projectId: "crudappusers",
//   storageBucket: "crudappusers.appspot.com",
//   messagingSenderId: "54215680969",
//   appId: "1:54215680969:web:f4ea0d01b89cf37de3be18",
//   measurementId: "G-X4VGN600Y8"
// };
// firebase.initializeApp(firebaseConfig)

ReactDOM.render(
  <>
<App/>
  </>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

