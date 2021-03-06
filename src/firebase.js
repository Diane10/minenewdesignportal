import firebase from 'firebase'


const firebaseConfig = {
    apiKey: process.env.REACT_APP_MINE_FIREBASE_KEY,
    authDomain: process.env.REACT_APP_MINE_FIREBASE_DOMAIN,
    databaseURL: process.env.REACT_APP_MINE_FIREBASE_DATABASE,
    projectId: process.env.REACT_APP_MINE_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_MINE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MINE_FIREBASE_SENDER_ID,
    appId: process.env.REACT_APP_MINE_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_MINE_FIREBASE_MEASUREMENT_ID
}

firebase.initializeApp(firebaseConfig)

export {firebase}
