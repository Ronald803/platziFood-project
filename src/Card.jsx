import React from 'react'

function Card() {
  return (
    <div className='mx-2 md:w-1/2 md:flex md:bg-white rounded-lg'>
          <div>
            <img className='w-full md:w-48 md:h-full object-cover rounded-lg md:rounded-r-none' src=" https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=500&amp;h=500&amp;q=80" alt=""/>
          </div>
          <div className=' relative mx-2 p-2 shadow-lg bg-white md:bg-transparent rounded-lg -mt-2'>
            <h2 className='text-xl tracking-tight font-semibold uppercase text-gray-900 md:text-md'>Hamburguesa con queso</h2>
            <p className='text-gray-700 leading-snug'>Hamburguesa con queso y aderezo chipotle</p>
            <div className='mt-2 text-sm font-semibold text-gray-600'>Bs. 25</div>
            <div className='mt-2 text-xs text-yellow-700'>⭐⭐⭐ /reseñas</div>
          </div>
        </div>      
  )
}

export default Card