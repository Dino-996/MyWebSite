import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD27hiIqGEY-P1SZ1VWJdJsQPMohYJWFSg",
  authDomain: "portfolio-davide-sabia.firebaseapp.com",
  projectId: "portfolio-davide-sabia",
  storageBucket: "portfolio-davide-sabia.appspot.com",
  messagingSenderId: "267776921134",
  appId: "1:267776921134:web:148502501e71bbad9f59bf",
  measurementId: "G-H1TDHCDTPP",
};

export const firebase = initializeApp(firebaseConfig);
export const analytics = getAnalytics(firebase);
const firestore = getFirestore(firebase);

export default firestore;
