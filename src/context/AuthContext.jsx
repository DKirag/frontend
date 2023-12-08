import { createContext, useState, useContext, useEffect } from "react";
import { registerRequest, loginRequest, verifyTokenRequest, logoutRequest } from "../api/auth";
import Cookies from 'js-cookie';

export const AuthContext = createContext();

export const useAuth = ()=>{
    const context = useContext(AuthContext);
    if(!context){
        throw new Error('useAuth debe estar definido en un contexto')
    }
    return context;
}
export const AuthProvider = ({children}) =>{
    const  [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [errors, setErrors] = useState([])
    const [loading, setLoading] = useState(true)

    const signup = async (user)=>{
        try{
        const res = await registerRequest(user);
        //console.log(res.data);
        setUser(res.data)
        setIsAuthenticated(true);
        }catch(error){
            console.log(error.response.data)
            setErrors(error.response.data)
        }
    }
//Funcion para iniciar sesion
    const signin = async ( user ) =>{
        try{
            const res = await loginRequest(user);
            console.log(res);
            setIsAuthenticated(true);
            setUser(res.data)
        }catch (error){
            //console.log(error)
        if(Array.isArray(error.response.data)){
            return setErrors(error.response.data)

        }
        setErrors([error.response.data.message])
        }
    }
    //fin

    const logout = ()=>{
        logoutRequest();
        Cookies.remove('token');
        setIsAuthenticated(false)
        setUser(null)
    }
    //Fin de cerrar sesion
    
    
    
    
    
    
    useEffect( ()=>{
        if(errors.length > 0 ){
            const timer = setTimeout( ()=>{
                setErrors( []);
            }, 5000);
            return ()=> clearTimeout(timer);
        }
    }, [errors])

    useEffect( ()=>{
        async function checkLogin(){
            const cookies = Cookies.get();

            if(!cookies.token){
                setIsAuthenticated(false);
                setLoading(false)
                return setUser(null)
            }
            try{
                const res = await verifyTokenRequest(cookies.token);
                console.log(res)
                if(!res.data){
                    setIsAuthenticated(false);
                    setLoading(false)
                    return;
                }
                setIsAuthenticated(true)
                setUser(res.data);
                setLoading(false)
            }catch(error){
                console.log(error);
                setIsAuthenticated(false)
                setLoading(false)
                setUser(null)

            }
        }
        checkLogin();
    }, [])


    return(
        <AuthContext.Provider value={ {
            signup,
            signin,
            user,
            isAuthenticated,
            errors,
            loading,
            logout

        }}>
            {children}
        </AuthContext.Provider>
    )
}
