import { auth } from "../Firebase/Api";
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { use } from "react";


export default async function Authenticate(){

  const provider = new GoogleAuthProvider();
  
  return await signInWithPopup(auth, provider)
  .then((result) => {
    const user = result.user;

    return user;

  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}