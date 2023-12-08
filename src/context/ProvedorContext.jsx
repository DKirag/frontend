import { createContext, useContext, useState } from "react";
import { createProvedorRequest, getProvedorsRequest, deleteProvedorrequest, getProvedorRequest, updateProvedorrequest } from "../api/provedores";



const ProveedoresContext = createContext();

export const useProvedor = ()=>{
    const context =useContext(ProveedoresContext);

    if(!context){
        throw new Error ("useProducts debe estar dentro de un ProveedorProvider")
    }
    return context;
}





export function ProveedoresProvider ( {children}){
    const [provedores, setProvedores] = useState([])

     //Funcion para crear un proveedor
     const createProvedor = async (provedor)=>{
        //console.log(provedor)
        const res = await createProvedorRequest(provedor)
        getProvedors();
        console.log(provedor)
    }
    //Funcion para listar provedores
    const getProvedors = async ()=>{
       try{
        const res = await getProvedorsRequest();
        setProvedores(res.data)
        //console.log(res)
       }catch(error){
        console.log(error)
       }
    }
    //Funcion para eliminar
    const deleteProvedor = async (id) =>{
        try{
        const res =await deleteProvedorrequest(id);
        //console.log(res.data)
        if(res.status ===200 )
                setProvedores(provedores.filter(provedor => provedor._id != id))
        }catch(error){
            console.log(error)
        }
    }
    //Funcion para obtener provedor del back
    const getProvedor = async (id)=>{
        try{
            const res = await getProvedorRequest(id)
            //console.log(res)
            return res.data

        }catch (error){
            console.log(error)
        }
    }
    //Funcion para editar
    const updateProvedor = async (id, provedor)=>{
        try{
            await updateProvedorrequest(id, provedor);
        }catch (error){
            console.log(error)
        }
    }



    return(
        <ProveedoresContext.Provider value={{
            provedores,
            createProvedor,
            getProvedors,
            deleteProvedor,
            getProvedor,
            updateProvedor
        }}>
            {children }
        </ProveedoresContext.Provider>
    )
}