import { auth } from "../Firebase/Api";
import { signOut } from "firebase/auth";

export default  function Logout() {
  signOut(auth).then(() => {console.log('Signed Out');}).catch((error) => {});
}