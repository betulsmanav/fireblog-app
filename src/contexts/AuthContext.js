import { createContext, useContext, useEffect, useState } from "react";
import { userObserver } from "../helpers/userFunction";

export const AuthContext=createContext()

const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        userObserver(setCurrentUser)
    }, []);
    
    return (
        <AuthContext.Provider value={{currentUser,setCurrentUser}}>
            {children}
        </AuthContext.Provider>
    )
};

export const useAuthContext = ()=>{
    return useContext(AuthContext)
  }

export default AuthContextProvider;
