import { initializeApp } from 'firebase/app';
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const APIKEY = "AIzaSyAfsuscpZ05n38mCwITSiztHYDbEfGoe4g";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: APIKEY,
    authDomain: "advencedweek.firebaseapp.com",
    projectId: "advencedweek",
    storageBucket: "advencedweek.appspot.com",
    messagingSenderId: "986952370564",
    appId: "1:986952370564:web:2e8cdd8ce4d1226b4f75d1",
    measurementId: "G-KCWH80NKTV"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth();

export { auth, APIKEY, db };