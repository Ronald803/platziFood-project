import React from 'react'

function Header() {
  return (
  <nav className='bg-secondary text-gray-100'>
    <div className='px-2 bg-secondary text-white flex justify-between items-center'>
        <div><img className=' px-2 h-8' src='/img/logo-w.svg' alt='Logo de platzi food'/></div>
        <div className='text-xl'>🟰</div>
    </div>
    <div className='mx-2'>
      <input className='w-full text-gray-800 leading-snug py-1 px-4 bg-gray-200 border border-blue-200' type='search' placeholder='busqueda'></input>
    </div>
    <div className='mx-2 flex justify-between'>
      <div className='flex'>
        Precio:
        <div className='ml-2'>$</div>
        <div className='ml-2 text-primary'>$$</div>
        <div className='ml-2'>$$$</div>
        <div className='ml-2'>$$$$</div>
      </div>
      <div className='flex'>
        Calificación: 
        <div className='ml-2'>⭐</div>
        <div className='ml-2'>⭐⭐</div>
        <div className='ml-2'>⭐⭐⭐</div>
        <div className='ml-2'>⭐⭐⭐⭐</div>
      </div>
      <div>
        <button className='btn btn-primary'>Filtrar</button>
      </div>
    </div>
  </nav>  
  )
}

export default Header