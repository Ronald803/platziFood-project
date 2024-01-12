import React from 'react'

function Form() {
  return (
    <div className='container mx-auto mt-4 '>
        <div>
            <div>Nombre</div>
            <input className='w-full text-gray-800 leading-snug py-1 px-4 bg-gray-200 border border-blue-200 hover:bg-white focus:outline-none focus:shadow-outline' type='text' placeholder='nombre'></input>
        </div>
        <div>
            <div>Email</div>
            <input className='w-full text-gray-800 leading-snug py-1 px-4 bg-gray-200 border border-blue-200 hover:bg-white focus:outline-none focus:shadow-outline' type='email' placeholder='email'></input>
        </div>
        <div>
            <div>Comentarios</div>
            <textarea className='w-full text-gray-800 leading-snug py-1 px-4 bg-gray-200 border border-blue-200 hover:bg-white focus:outline-none focus:shadow-outline'></textarea>
        </div>
        <div>
            <button className='py-1 px-2 rounded shadow-xl mx-auto block bg-gray-500 hover:bg-gray-700 hover:text-white'>Enviar</button>
        </div>
    </div>
  )
}

export default Form