import { createContext } from "react";

export const InfoContext=createContext()

export const InfoProvider=({children})=>{
    const info={name:'xabi',age:40,dep:'IT'}
    return(
        <InfoContext.Provider value={info}>
            {children}
        </InfoContext.Provider>
    )
}