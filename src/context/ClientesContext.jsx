import { createContext, useContext, useState } from "react";
import { createClienteRequest, getClientesRequest, deleteClienteRquest, getClientRequest, updateClienteRequest } from "../api/clientes";



const ClientesContext = createContext();

export const useClientes = ()=>{
    const context =useContext(ClientesContext);

    if(!context){
        throw new Error ("useProducts debe estar dentro de un ClientesProvider")
    }
    return context;
}



export function ClientesProvider ( {children}){
    const [clientes, setClientes] = useState([])

     //Funcion para crear un Cliente
    const createCliente = async (cliente) =>{
        //console.log(cliente)
        const res = await createClienteRequest(cliente);
        getClients();
        console.log(cliente)
    }
    //Funcion para obtener clientes
    const getClients = async ()=>{
        try{
        const res = await getClientesRequest();
        setClientes(res.data)
        //console.log(res)
        }catch(error){
            console.log(error)
        }
    }
    //Funcion para eliminar 
    const deleteCliente = async (id) =>{
        try{
        const res = await deleteClienteRquest(id)
        //console.log(res.data)
        if (res.status === 200)
            setClientes(clientes.filter(cliente => cliente._id != id))
        }catch(error){
            console.log(error)
        }
    }
    //Funcion para obtener cliente del back
    const getCliente = async (id) =>{
        try{
            const res = await getClientRequest(id)
            //console.log(res)
            return res.data
        }catch (error){
            console.log(error)
        }
    }
    //Funcion para editar
    const updateCliente = async (id, cliente)=>{
        try{
            await updateClienteRequest(id, cliente);
        }catch (error){
            console.log(error)
        }
    }



    return(
        <ClientesContext.Provider value={{
            clientes,
            createCliente,
            getClients,
            deleteCliente,
            getCliente,
            updateCliente
        }}>
            {children }
        </ClientesContext.Provider>
    )
}