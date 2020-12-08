import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCYMDMRrzx7j34JIvDoDh62JGq6fHo_Afw",
    authDomain: "crown-db-8924d.firebaseapp.com",
    projectId: "crown-db-8924d",
    storageBucket: "crown-db-8924d.appspot.com",
    messagingSenderId: "442252082562",
    appId: "1:442252082562:web:b0dda83bd26858b2fea39b",
    measurementId: "G-GPW74S9LZB"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
