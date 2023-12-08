import { useForm } from 'react-hook-form'
import { useAuth } from '../context/AuthContext';
import { useEffect, useState } from 'react';
import { useNavigate , Link } from 'react-router-dom';
import { IoPersonAdd, IoLogIn } from 'react-icons/io5'
import ReCaptcha from 'react-google-recaptcha'



function RegisterPage() {
    const {register, handleSubmit, formState:{errors}} =useForm();
    const {signup, isAuthenticated, errors:registerErrors} = useAuth();
    const [captchaValue, setCaptchaValue] = useState(null)



    const navigate = useNavigate();

    useEffect(()=>{
        if(isAuthenticated)
            navigate('/products')
    }, [isAuthenticated])

    const onSubmit = handleSubmit(async (values) =>{
        //console.log(values)
        signup(values)
    })


  return (
    <div className='bg-cyan-950 max-w-md p-10 rounded-md  justify-center'>
        
        {
            registerErrors.map( (error, i)=>(
                <div className='bg-red-500 p-2 my-2 text-white' key={i}>
                {error}
                </div>
            ))
        }




        <form onSubmit={onSubmit}>
        <label htmlFor='username'>Nombre</label>
        <input type='text'
        className='w-full bg-white-700 text-white px-4 py-2 rounded-md my-2'
        placeholder='Nombre'
        {
            ...register("username", {required: true, minLength: 5})
        }
        />
        { errors.username?.type==='required' &&(
            <p className='text-red-500 '>Nombre es requerido</p>
        )}
        {errors.username?.type==='minLength'&&(
            <p className='text-red-500'>Epa el minimo es de 5 caracteres</p>
        )}
        <label htmlFor='email'>Correo</label>
        <input type='email'
        className='w-full bg-white-700 text-white px-4 py-2 rounded-md my-2'
        placeholder='Correo'
        {
            ...register("email", {required: true})
        }/>
        { errors.email &&(
            <p className='text-red-500 '>Correo requerido</p>
        )}
        <label htmlFor='password'>Constraseña</label>
        <input type='password'
        className='w-full bg-white-700 text-white px-4 py-2 rounded-md my-2'
        placeholder='Contraseña'
        {
            ...register("password", {required: true, minLength: 6})
        }
        
        />
        { errors.password?.type==='required' &&(
            <p className='text-red-500 '>Constraseña requerida</p>
        )}
        { errors.password?.type==='minLength' &&(
            <p className='text-red-500 '>Epa minimo de 6 caracteres</p>
        )}
        <button type='submit' className='bg-cyan-700 px-3 my-3 rounded-md'
            disabled={!captchaValue}
        >  
        <IoPersonAdd size={30}/></button>
        <ReCaptcha
            sitekey='6LfCTSopAAAAAPPC3VE-hUXls7JmbR_xqw1RW0at'
            onChange={(value) => setCaptchaValue(value)}
            />
        </form>
        <p className='flex gap-x-2 justify-between pt-5 mt-5'>
            Ya tienes una cuenta?
            <Link to='/login' className='text-white-500 '>
                <div className='flex mx-2 px-2 items-start'>
                Inicia sesión!<IoLogIn size={30} className='mx-1'/>
                </div>
                </Link>
        </p>

    </div>
  )
}

export default RegisterPage