import { getAuth, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { ref } from "vue";
const auth = getAuth();
const uid = ref<string | null>("");
const displayName = ref<string | null>("");
const email = ref<string | null>("");
const photoURL = ref<string | null>("");
const emailVerified = ref<boolean | null>(false);

// Autenticazione tramite Google
async function googleAuth() {
  const auth: any = getAuth();
  auth.languageCode = 'it';
  const provider = new GoogleAuthProvider();
  await signInWithPopup(auth, provider).then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result!);
    const token = credential!.accessToken;
    const user = result!.user;
    getState();
    console.log("Accesso Google eseguito correttamente -> ", user, "Token -> ", token);
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.error(
      "Errore durante l'autenticazione Google -> ", errorMessage,
      "Codice errore -> ", errorCode,
      "E-mail -> ", email,
      "Credenziali -> ", credential
    );
  });
}

// Fornisce informazioni sull'utente che ha effettuato l'accesso
function getState() {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      uid.value = user.uid;
      displayName.value = user.displayName;
      email.value = user.email;
      photoURL.value = user.photoURL;
      emailVerified.value = user.emailVerified;
      console.log(uid);
      console.log(getAuth().currentUser?.uid);
      console.log("Nome -> ", displayName);
      console.log("Email -> ", email);
      console.log("URL foto -> ", photoURL);
      console.log("Email verificata -> ", emailVerified);
    } else {
      uid.value = "";
      displayName.value = "";
      email.value = "";
      photoURL.value = "";
      emailVerified.value = false;
      console.log("Utente non autenticato");
      console.log("Id: ", uid, "Nome: ", displayName, "Email: ", email, "photoURL: ", photoURL, "emailVerified", emailVerified);
    }
  });
}

// Disconnette un utente
async function signOutUser() {
  const auth = getAuth();
  await signOut(auth).then(() => {
    console.log("Utente disconnesso correttamente");
    getState();
  }).catch((error) => {
    console.error("Errore durante il logout -> ", error);
  });
}

export default { googleAuth, signOutUser, uid, displayName, photoURL, emailVerified };
