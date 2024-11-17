import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading , setLoading] = useState(true)
    console.log(user);

    //create new user 
    const createNewUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //sign in user 
    const signInUser = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email,password)
    }
    //log out user
    const signOutUser =()=>{
        setLoading(true)
        return signOut(auth);
    }

    const authInfo = {
        user,
        setUser,
        createNewUser,
        signOutUser,
        signInUser,
        setLoading,
        loading
    }

    useEffect(() => {
        const unsubsCribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        });
        return () =>
            unsubsCribe()
            
        
    }
        , [])

    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;