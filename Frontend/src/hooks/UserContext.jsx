import { createContext } from "react";
//create context
export const UserContext=createContext();

//contextProvider
export const UserProvider=({children})=>{
    const name='Prabhu'
    return(
        <UserContext.Provider value={name}>
            {children}
        </UserContext.Provider>
    )
}