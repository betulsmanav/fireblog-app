
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";

import firebase from "./firebase";

// *Authentication
const auth = getAuth(firebase);

export const createUser = async (email, password,navigate,displayName) => {
  try {
    let userCredential = await createUserWithEmailAndPassword(auth, email, password);

    navigate("/");
    await updateProfile(auth.currentUser, {
      displayName: displayName
    })
    

  console.log(userCredential)
  } catch (err) {
    alert(err.message);
  }
};

export const signIn = async (email,password,navigate) => {
  try {

    let userCredential = await signInWithEmailAndPassword(auth, email, password);
    navigate("/");

    console.log(userCredential)
  } catch (err) {
    alert(err.message)
   }
  
  
}

export const logOut = () => {
  signOut(auth)
  alert("logged out succesfully")
}

export const userObserver = (setCurrentUser) => {
  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      setCurrentUser(currentUser)
    } else {
      setCurrentUser(false)
      
    }
  });
}

export const signUpProvider = (navigate) => {
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then((result) => {
    navigate("/")
    console.log(result);
  }).catch((error) => {
    console.log(error);
  });

}





 