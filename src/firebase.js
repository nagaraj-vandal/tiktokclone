import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCWBKfmjCKx3fxhhqd4Mkbd5YcTC0rbNLw",
    authDomain: "tiktokclone-5e915.firebaseapp.com",
    databaseURL: "https://tiktokclone-5e915.firebaseio.com",
    projectId: "tiktokclone-5e915",
    storageBucket: "tiktokclone-5e915.appspot.com",
    messagingSenderId: "471893573678",
    appId: "1:471893573678:web:846eea3938719cf51adfbf",
    measurementId: "G-ZJL9CEHBPB"
};


const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()


export default db