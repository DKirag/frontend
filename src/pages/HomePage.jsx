import React from 'react'

function HomePage() {
  return (
    <div className=' flex items-center justify-center h-screen'>
      <div className='bg-cyan-950 max-w-md w-full p-10 rounded-md'>
        <h1 className='text-3xl font-bold my-3 text-center'>Productos DKira</h1>
        <h2 className='text-1xl font-bold my-3 text-center'>Todo lo necesario en un solo lugar</h2>
        <div>
          <p className='gap-x-2 text-justify pt-5 mt-5 text-sm'>
           Sistema ha realizado en la materia de Lenguajes Web 
             Para la Maestría en Sistemas Computacionales.
          </p>
          <hr className='my-5 h-px border-t-0 bg-transparent bg-gradient-to-r
          from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100'/>
          <p className=' text-center text-xs'>
            Derechos Reservados  C 2023
          </p>
        </div>
      </div>

    </div>
  )
}

export default HomePage