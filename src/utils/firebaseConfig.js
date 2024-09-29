import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider  } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getDatabase } from 'firebase/database';




// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const database = getDatabase(app);
const googleProvider = new GoogleAuthProvider();
const storage = getStorage(app);


export { auth, googleProvider, firestore ,storage,database };
