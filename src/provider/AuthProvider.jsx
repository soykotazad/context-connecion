import  {  createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from '../auth-int';

 export const AuthContext = createContext(null);

 const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
   
   const [user, setUser] =useState(null);
   const [loding, setLoding] =useState(true);


const createUser = (email, password) =>{
    setLoding(true);
    return  createUserWithEmailAndPassword(auth , email, password)
}
const signInUser = (email, password) =>{
    setLoding(true);
    return  signInWithEmailAndPassword(auth , email, password)
}

const logOut = () =>{
    setLoding(true);
    return signOut (auth);


}


const signInwithGoogle =()=>{
    setLoding(true);
    return signInWithPopup(auth, googleProvider);
}

//ovs state 

useEffect(()=> {
    const unSubscribe = onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser)
        console.log('observing current user', currentUser)
        setLoding(false);
    });
    return ()=> {
        unSubscribe();
    }
}, [])



const authInfo = {user ,
    loding,
    createUser,
    signInUser,
    logOut,
    signInwithGoogle }




    return (

        <AuthContext.Provider value={authInfo}>
                      {children}
        </AuthContext.Provider>
       
    );
};

export default AuthProvider;

AuthProvider.propTypes={
    children: PropTypes.node
}

