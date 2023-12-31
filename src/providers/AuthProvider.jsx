import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../config/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const createUser = (email, password) => {
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logout = () => {
        setIsLoading(true)
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setIsLoading(false);
        })
        return () => unsubscribe();
    },[])

    const authInfo = {
        user,
        isLoading,
        createUser,
        loginUser,
        logout
    }

    // user persistency

    return (
       <AuthContext.Provider value={authInfo}>
            {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;