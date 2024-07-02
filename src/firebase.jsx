const firebaseConfig = {
  apiKey: "AIzaSyCLlad-1gmIMMxBCYrPcw2hbCw0BcNs9SI",
  authDomain: "drive-clone-66416.firebaseapp.com",
  projectId: "drive-clone-66416",
  storageBucket: "drive-clone-66416.appspot.com",
  messagingSenderId: "934756690601",
  appId: "1:934756690601:web:2a277e95a15eb5fa6517b8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
const db = firebase.firestore();

export { auth, provider, storage, db }