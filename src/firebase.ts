import firebase from "firebase"

const config: any = {
  apiKey: "AIzaSyBQjQc0CUWse4I4Dc7Alrl7wodBMzUaoLA",
  authDomain: "fir-messaging-8ed83.firebaseapp.com",
  databaseURL: "https://fir-messaging-8ed83.firebaseio.com",
  projectId: "fir-messaging-8ed83",
  storageBucket: "fir-messaging-8ed83.appspot.com",
  messagingSenderId: "942472815958",
  appId: "1:942472815958:web:8bfc18803a8d555119a2f7"
};

firebase.initializeApp(config)

export default firebase