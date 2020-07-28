import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyB68yahblj2W_JkzpFvMIk4Mi1BWU9ybnI",
	authDomain: "courses-dev-a76cc.firebaseapp.com",
	databaseURL: "https://courses-dev-a76cc.firebaseio.com",
	projectId: "courses-dev-a76cc",
	storageBucket: "courses-dev-a76cc.appspot.com",
	messagingSenderId: "221692967572",
	appId: "1:221692967572:web:d257166f13485badaa1281",
};
const firebaseConfigTest = {
	apiKey: "AIzaSyBGgn81NOtAI3MXHULz1tsHzaCu3J6uU24",
	authDomain: "courses-test-f4643.firebaseapp.com",
	databaseURL: "https://courses-test-f4643.firebaseio.com",
	projectId: "courses-test-f4643",
	storageBucket: "courses-test-f4643.appspot.com",
	messagingSenderId: "222297997287",
	appId: "1:222297997287:web:635d56c4e265da68a7c742",
};
// Initialize Firebase

if (process.env.NODE_ENV === "test") {
	firebase.initializeApp(firebaseConfigTest);
} else {
	firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
