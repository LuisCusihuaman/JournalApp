import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyCOE5C_hOBdXofbioTdfoEzGU721dnNxCY",
	authDomain: "react-app-cursos-a19bf.firebaseapp.com",
	databaseURL: "https://react-app-cursos-a19bf.firebaseio.com",
	projectId: "react-app-cursos-a19bf",
	storageBucket: "react-app-cursos-a19bf.appspot.com",
	messagingSenderId: "116701254244",
	appId: "1:116701254244:web:3a9acc5ba172f4709dc571",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
