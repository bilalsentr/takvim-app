import { initializeApp } from 'firebase/app';
import {getDatabase} from 'firebase/database';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyBxzsuIxFdho3DwVXTGNfl2iWj3qJHjnhE",
  authDomain: "eymentakvim-c51bb.firebaseapp.com",
  databaseURL: "https://eymentakvim-c51bb-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "eymentakvim-c51bb",
  storageBucket: "eymentakvim-c51bb.appspot.com",
  messagingSenderId: "933215400282",
  appId: "1:933215400282:web:bec8de3e000a10422e8363",
  measurementId: "G-SWF2B6LW57"
  };

const firebaseApp = initializeApp(firebaseConfig);
const firebasedatabase=getDatabase(firebaseApp);

const firebaseAuth = initializeAuth(firebaseApp, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });

const Firebase = {
    app: firebaseApp,
    auth: firebaseAuth,
    database:firebasedatabase
};

export default Firebase;