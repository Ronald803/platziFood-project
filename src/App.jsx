import { useState } from 'react'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import Banner from './Banner'
import Card from './Card'
import Form from './Form'

function App() {
  
  return (
  <div>
    <Header/>
    <Banner/>
    <div className='bg-gray-400 md:flex'>
      <body className='container mx-auto pt-3 md:flex'>
        <Card/>
        <Card/>  
      </body>
    </div>
    <Form/>       
    <Footer/>
  </div>
    
  )
}

export default App
