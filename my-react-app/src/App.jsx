import { useState } from 'react'

import './App.css'
import { BrowserRouter, Routes } from 'react-router-dom'
import Lab from './pages/Lab/Lab'
import Field from './pages/Field/Field'
import Enciclopedia from './pages/Enciclopedia/Enciclopedia'
import Login from './pages/Login/Login'
import { store } from './redux/store'

function App() {

  return (
    <>
    <Provider store={store}></Provider>
      <BrowserRouter>
        <Routes>
          <Route path='/lab' element={<Lab/>}></Route>
          <Route path='/field' element={<Field/>}></Route>
          <Route path='/dex' element={<Enciclopedia/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
