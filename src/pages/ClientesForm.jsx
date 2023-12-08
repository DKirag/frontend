import { useForm } from 'react-hook-form'
import { useClientes } from '../context/ClientesContext';
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react';
import {IoBagAdd} from 'react-icons/io5'


function ClientesForm() {
  const { register, handleSubmit, setValue, formState: {errors}  } = useForm();
  const { clientes, createCliente, getCliente, updateCliente} =useClientes();
  const navigate = useNavigate();
  const params =useParams()
  console.log(clientes)


  useEffect (()=>{
    async function loadCliente (){
    if(params.id){
      const cliente = await getCliente(params.id);
      setValue('name', cliente.name);
      setValue('lastname', cliente.lastname);
      setValue('phone', cliente.phone);
      setValue('email', cliente.email);
      setValue('direction', cliente.direction);  
    }
    }
    loadCliente()
  }, [])



  
  const onSubmit = handleSubmit( (data) =>{
    if(params.id){
      updateCliente(params.id, data)
    }else{
      createCliente(data)

    }
    //console.log(data);
    navigate('/clientes')
  })

  return (
    <div className=' flex items-center justify-center h-screen'>
      <div className='bg-cyan-800 max-w-md w-full p-10 rounded-md'>
        <h1 className='text-2xl font-bold'>Registro de Cliente</h1>
      <form onSubmit={onSubmit}>
      <label htmlFor='name'>Nombre del Cliente:</label>
        <input type='text'
        className='w-full bg-white-700 text-black px-4 py-2 rounded-md my-2'
        placeholder='Nombre del cliente'
        {
          ...register('name', {required: true})
        }
        autoFocus
        />
         {errors.name?.type ==='required' && (
          <p className='text-red-500'>El nombre es requerido</p>
        )}
        <label htmlFor='lastname'>Apellidos:</label>
        <input type='text'
        className='w-full bg-white-700 text-black px-4 py-2 rounded-md my-2'
        placeholder='Apellidos'
        {
          ...register('lastname',{
            required: true,
          })
        }
        />
         {errors.lastname?.type ==='required' && (
          <p className='text-red-500'>Los apellidos son requeridos</p>
        )}
        <label htmlFor='phone'>Telefono:</label>
        <input type='number'
        className='w-full bg-white-700 text-black px-4 py-2 rounded-md my-2'
        placeholder='Telefono'
        {
          ...register('phone',{ required: true,
            valueAsNumber: true,
          })
        }
        />
         {errors.phone?.type ==='required' && (
          <p className='text-red-500'>El telefono es requerido</p>
        )}
        <label htmlFor='email'>Correo:</label>
        <input type='email'
        className='w-full bg-white-700 text-black px-4 py-2 rounded-md my-2'
        placeholder='Correo'
        {
          ...register('email', {required: true})
        }
        />
         {errors.email?.type ==='required' && (
          <p className='text-red-500'>El correo es requerido</p>
        )}
        <label htmlFor='direction'>Dirección:</label>
        <input type='text'
        className='w-full bg-white-700 text-black px-4 py-2 rounded-md my-2'
        placeholder='Dirección'
        {
          ...register('direction',{ required: true

          })
        }
        />
         {errors.direction?.type ==='required' && (
          <p className='text-red-500'>La dirección es requerida</p>
        )}
        <button type='submit' className='bg-cyan-700 px-3 py-3 my-3 rounded-md'>
          <IoBagAdd size={30}/>
          </button>
      </form>

    </div>

    </div>
    
    )
}

export default ClientesForm