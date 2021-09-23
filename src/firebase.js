import firebase from 'firebase'
import "firebase/storage";
const  config = {
    apiKey: "AIzaSyAm3WlUWJRItJ9cV5oiJbDbgql8QJrh_JI",
    authDomain: "edushare-326213.firebaseapp.com",
    projectId: "edushare-326213",
    storageBucket: "edushare-326213.appspot.com",
    messagingSenderId: "171024582376",
    appId: "1:171024582376:web:16a857390b7e23cf396b5d",
    measurementId: "G-S3TSN2RWKX"
}
firebase.initializeApp(config)

export default firebase ;