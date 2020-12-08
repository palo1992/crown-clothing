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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth)return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    
    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
