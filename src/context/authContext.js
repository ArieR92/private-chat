import {createContext, useContext} from 'react';

export const Authcontext = createContext()

//Hook personalizado//
export const useAuth = () => {
    const context = useContext(Authcontext)
    return context
}


export function AuthProvider ({children}) {

    const user = {
        login:true
    };


    return (
        <Authcontext.Provider value={{user}}>
            {children}
        </Authcontext.Provider>
    )

};
