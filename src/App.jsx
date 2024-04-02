import { useState } from 'react'
import NavBar from './components/NavBar'
import './App.css'
import ItemListContainer from './components/ItemListContainer'

function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer
        titulo={'Bienvenido'}
        descripcion={'Aqui aparecera la lista de productos para su compra.'} />
    </>
  )
}

export default App
