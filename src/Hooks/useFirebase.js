import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,  signInWithPopup, GoogleAuthProvider, onAuthStateChanged} from "firebase/auth"
import {  useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
    const[user,setUser] = useState({});
    const [isLoading, setisLoading] = useState(true)

    const auth = getAuth();


    const signInGoogle = () => {
        setisLoading(true)
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
            
            .finally(()=> setisLoading(false));
    }

    //User state Change
    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth, user => {
            if(user){
                setUser(user);
            }
            else{
                setUser({})
            }
            setisLoading(false)
        });
        return () => unsubscribed;
    },[]);


    const logOut = () => {
        setisLoading(true)
        signOut(auth)
            .then(() => {})
            .finally(()=> setisLoading(false));
    }
    return {
        user,
        isLoading,
        signInGoogle,
        logOut,
        auth,
    }
};

export default useFirebase;