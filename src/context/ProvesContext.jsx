import { createContext, useContext, useState } from "react";

const ProvesContext = createContext();

export const useProves = ()=>{
    if (!context){
        throw new Error ('useProves debe estar dentro de un ProvesProvider')

    }
    return context;
}


export function ProvesProvider ({ children }){
    const [proves, setProves] = useState([])
    return (
        <ProvesContext.Provider value={{
            proves
        }}>
            {children }
        </ProvesContext.Provider>
    )
}