import React from 'react'
import { useProvedor } from '../context/ProvedorContext'
import { Link } from 'react-router-dom'

function ProvedorCard({provedor}) {
    const {deleteProvedor} =useProvedor()
  return (
    <div className='bg-cyan-950 max-w-md w-full p-10 rounded-md'>
        <header className='flex justify-between'>
        
            <h1 className='text-1xl font-bold'>{provedor.name}</h1>
            <div className='flex gap-x-2 items-center '>
                <button
                    onClick={ ()=>{
                        deleteProvedor(provedor._id)
                    }}
                className='bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg'
                >Eliminar</button>

                <Link to={'/provedor/' + provedor._id} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg">
                    Editar
                </Link>

            </div>
            </header> 
            Correo:
            <p className=' text-slate-300 my-2'>
                {provedor.email}
            </p>
            Telefono:
            <p className=' text-slate-300 my-2'>
                {provedor.phone}
            </p>
            Dirección:
            <p className=' text-slate-300 my-2'>
                {provedor.direction}
            </p>




    </div>
  )
}

export default ProvedorCard