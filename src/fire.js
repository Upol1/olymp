// Import the functions you need from the SDKs you need
import "firebase/compat/app";
import "firebase/compat/auth";
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLiTj-ze9ilosjHVKyL62Iww186LeMEBo",
  authDomain: "olympics-cdd31.firebaseapp.com",
  projectId: "olympics-cdd31",
  storageBucket: "olympics-cdd31.appspot.com",
  messagingSenderId: "52949612313",
  appId: "1:52949612313:web:8987b41d984339e1f8b788",
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
