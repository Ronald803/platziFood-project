import React from 'react'

function Footer() {
  return (
    <div className='bg-secondary  w-full text-white'>
        <div className='md:flex justify-around'>
            <div className='ml-8 mt-4'>
                <div className='hover:text-primary'><i className='fa fa-facebook'></i> facebook</div>
                <div className='hover:text-primary'><i className='fa fa-twitter'></i> @platzifood</div>
                <div className='hover:text-primary'><i className='fa fa-instagram'></i> @platzifood</div>
            </div>
            <ul className='ml-8 my-4 md:list-disc'>
                <li>Soporte</li>
                <li>Acerca de nosotros</li>
                <li>Registro</li>
                <li>Aviso Privacidad</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer