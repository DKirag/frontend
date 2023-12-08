import { useForm } from 'react-hook-form'
import { useProducts } from '../context/ProductsContext';
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react';
import {IoBagAdd} from 'react-icons/io5'


function ProductsFormPage() {
  const {register, handleSubmit, setValue, formState:{errors}} = useForm(
    {
      defaultValues:{
        year: new Date().getFullYear(),
        price: 0.0
      }
    }
  );
  const { products, createProduct, getProduct ,updateProducto } = useProducts();
  const navigate =useNavigate();
  const params = useParams()

  //console.log(products)

  useEffect( ()=>{
    async function loadProduct(){
      if(params.id){
        const product = await getProduct(params.id);
        setValue('name', product.name);
        setValue('price', product.price);
        setValue('year', product.year)

    }
    //console.log(params)
    }
    loadProduct();
  }, [])



  const onSubmit = handleSubmit( (data) =>{
    if(params.id){
      updateProducto(params.id, data);
    }else{
      createProduct(data)

    }
    //console.log(data);
    navigate('/products')
  })

  return (


    <div className='flex items-center justify-center h-screen'>
    <div className='bg-cyan-950 max-w-md w-full p-10 rounded-md'>
      <h1 className='text-2xl font-bold'>Registro de Producto</h1>
      <form onSubmit={onSubmit}>
      <label htmlFor='name'>Producto:</label>
        <input type='text'
        className='w-full bg-white-700 text-black px-4 py-2 rounded-md my-2'
        placeholder='Nombre del producto'
        {
          ...register('name', {required: true})
        }
        autoFocus
        />
        {errors.name?.type ==='required' && (
          <p className='text-red-500'>Nombre del Producto requerido</p>
        )}
        {errors.name?.type ==='minLength' && (
          <p className='text-red-500'>El minimo es de 4 caracteres</p>
        )}
        <label htmlFor='price'>Precio:</label>
        <input type='number' step="0.10"
        className='w-full bg-white-700 text-black px-4 py-2 rounded-md my-2'
        placeholder='Precio del producto'
        {
          ...register('price',{
            required: true,
            min: 0.0,
           valueAsNumber: true,
          })
        }
        />
        {errors.price && (
          <div className='text-red-500'>Precio del producto es requerido</div>

        )}
        {errors.price?.type ==='min' && (
          <div className='text-red-500'>El precio minimo es de 0</div>
        )}
        <label htmlFor='year'>Año:</label>
        <input type='number' max={new Date().getFullYear()} min="1990" step="1"
        className='w-full bg-white-700 text-black px-4 py-2 rounded-md my-2'
        placeholder='Año del producto'
        {
          ...register('year',{ 
            required: true,
            min: 1900,
            max: new Date().getFullYear(),
            valueAsNumber: true,
          })
        }
        />
        {errors.year && (
          <div className='text-red-500'>Año del producto es requerido</div>
        )}
        {errors.year?.type==='min' &&(
          <div className='text-red-500'>El año minimo es de 2020</div>
        )
        }
        {errors.year?.type==="max"&&(
          <div className='text-red-500'>El año máximo es {new Date().getFullYear()} </div>

        )

        }

        <button type='submit' className='bg-cyan-700 px-3 py-3 my-3 rounded-md'
        >
          <IoBagAdd size={30}/>
        </button>
      </form>

    </div>

    </div>
  )
}

export default ProductsFormPage