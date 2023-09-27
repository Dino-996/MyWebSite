/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import vuetify from './vuetify'
import router from '../router'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD27hiIqGEY-P1SZ1VWJdJsQPMohYJWFSg",
  authDomain: "portfolio-davide-sabia.firebaseapp.com",
  projectId: "portfolio-davide-sabia",
  storageBucket: "portfolio-davide-sabia.appspot.com",
  messagingSenderId: "267776921134",
  appId: "1:267776921134:web:148502501e71bbad9f59bf",
  measurementId: "G-H1TDHCDTPP"
};

const firebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebase);

// Types
import type { App } from 'vue'

export function registerPlugins (app: App) {
  app
    .use(vuetify)
    .use(router)
}
