import {createContext, useContext} from 'react'; 
import { createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from "../Firebase";

export const Authcontext = createContext()

//Hook personalizado//
export const useAuth = () => {
    const context = useContext(Authcontext)
    return context
}


export function AuthProvider ({children}) {
    const signup = (name, email, password) =>  {
        //console.log(name, email, password)
        createUserWithEmailAndPassword(auth, email, password)

    }

    return (
        <Authcontext.Provider value={{signup}}>
            {children}
        </Authcontext.Provider>
    );

};
