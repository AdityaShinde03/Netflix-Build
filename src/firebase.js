import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDMQuSpw-q19jtu71cDFpx3Ug3IR8_wRHg",
    authDomain: "netflix-clone-app-194bd.firebaseapp.com",
    projectId: "netflix-clone-app-194bd",
    storageBucket: "netflix-clone-app-194bd.appspot.com",
    messagingSenderId: "27594356208",
    appId: "1:27594356208:web:ea6649b49bc31c2e9f5935"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;