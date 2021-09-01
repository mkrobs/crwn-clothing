 import firebase from 'firebase/compat/app';
 import 'firebase/compat/firestore';
 import 'firebase/compat/auth';

 const config = {
    

        apiKey: "AIzaSyDaIEnOFoR0OeysZfB-H0NXKYIHkfXFItA",
      
        authDomain: "crwn-db-ef5ce.firebaseapp.com",
      
        projectId: "crwn-db-ef5ce",
      
        storageBucket: "crwn-db-ef5ce.appspot.com",
      
        messagingSenderId: "597835056198",
      
        appId: "1:597835056198:web:d94c27dd1d077d963a7647",
      
        measurementId: "G-9R364TRHHT"

 };

 firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;