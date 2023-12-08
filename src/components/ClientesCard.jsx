import React from 'react'
import { useClientes } from '../context/ClientesContext'
import { Link } from 'react-router-dom'





function ClientesCard({cliente}) {
    const {deleteCliente} = useClientes()
  return (
    <div className='bg-cyan-950 max-w-md w-full p-10 rounded-md'>
        <header className='flex justify-between'>
        
            <h1 className='text-1xl font-bold'>{cliente.name}</h1>
            <div className='flex gap-x-2 items-center'>
                <button
                    onClick={()=>{
                        deleteCliente(cliente._id)
                    }}
                    className='bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg'

                >Eliminar</button>

                    <Link to={'/cliente/' + cliente._id}
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
                    >
                        Editar
                    </Link>
            </div>
            </header> 
            Apellidos:
            <p className=' text-slate-300 my-2'>
                {cliente.lastname}
            </p>
            Telefono:
            <p className=' text-slate-300 my-2'>
                {cliente.phone}
            </p>
            Correo:
            <p className=' text-slate-300 my-2'>
                {cliente.email}
            </p>
            Direccion:
            <p className=' text-slate-300 my-2'>
                {cliente.direction}
            </p>




    </div>
  )
}

export default ClientesCard