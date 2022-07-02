import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAgq5w24DyLiQYvf-xWcV3O0utmZFFwiC4",
  authDomain: "vue-firebase-auth-2ca66.firebaseapp.com",
  projectId: "vue-firebase-auth-2ca66",
  storageBucket: "vue-firebase-auth-2ca66.appspot.com",
  messagingSenderId: "722724897883",
  appId: "1:722724897883:web:10a71b804db29fb5796b7e",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
