import { useForm } from 'react-hook-form'
import { useProvedor } from '../context/ProvedorContext';
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react';
import {IoBagAdd} from 'react-icons/io5'

function ProvedorForm() {
  const { register, handleSubmit, setValue, formState:{errors} } = useForm();
  const { provedores, createProvedor, getProvedor, updateProvedor } = useProvedor();
  const navigate= useNavigate();
  const params = useParams()
  console.log(provedores)


  useEffect(()=>{
    async function loadProvedor(){
    if(params.id){
      const provedor = await getProvedor(params.id);
      setValue('name', provedor.name)
      setValue('email', provedor.email)
      setValue('phone', provedor.phone)
      setValue('direction', provedor.direction)
    }
    }
    loadProvedor();
    //console.log(params)
  }, [])
  
  const onSubmit = handleSubmit( (data) =>{
    if(params.id){
      updateProvedor(params.id, data)
    }else{
      createProvedor(data)

    }
    //console.log(data);
    navigate('/provedores')

  })

  return (
    <div className='flex items-center justify-center h-screen'>
    <div className='bg-slate-800 max-w-md w-full p-10 rounded-md'>
        <h1 className='text-2xl font-bold'>Registro de Proveedor</h1>
      <form onSubmit={onSubmit}>
      <label htmlFor='name'>Proveedor:</label>
        <input type='text'
        className='w-full bg-cyan-950 text-white px-4 py-2 rounded-md my-2'
        placeholder='Nombre del proveedor'
        {
          ...register('name', {required: true, minLength: 5})
        }
        autoFocus
        />
        {errors.name?.type ==='required' && (
          <p className='text-red-500'>Nombre requerido</p>
        )}
        {errors.price?.type ==='minLength' && (
          <p className='text-red-500'>Epa minimo de 5 caracteres</p>
        )}
        <label htmlFor='email'>Correo:</label>
        <input type='email'
        className='w-full bg-white-700 text-black px-4 py-2 rounded-md my-2'
        placeholder='Correo'
        {
          ...register('email',{
            required: true,
          })
        }
        />
        {errors.email?.type ==='required' && (
          <p className='text-red-500'>Correo es requerido</p>
        )}
        <label htmlFor='phone'>Telefono:</label>
        <input type='number'
        className='w-full bg-white-700 text-black px-4 py-2 rounded-md my-2'
        placeholder='Telefono'
        {
          ...register('phone',{required: true,
            valueAsNumber: true,
          })
        }
        />
        {errors.phone?.type ==='required' && (
          <p className='text-red-500'>El telefono es requerido</p>
        )}
        <label htmlFor='direction'>Dirección:</label>
        <input type='text'
        className='w-full bg-white-700 text-black px-4 py-2 rounded-md my-2'
        placeholder='Dirección'
        {
          ...register('direction', {required: true})
        }
        />
        {errors.direction?.type ==='required' && (
          <p className='text-red-500'>La dirección es requerida</p>
        )}
        <button type='submit' className='bg-cyan-800 px-3 py-3 my-3 rounded-md'>
          <IoBagAdd size={30}/>
          </button>
      </form>

    </div>

    </div>
  )
}

export default ProvedorForm