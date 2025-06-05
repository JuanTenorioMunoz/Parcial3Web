import { useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Lab from './pages/Lab/Lab'
import Field from './pages/Field/Field'
import Enciclopedia from './pages/Enciclopedia/Enciclopedia'
import Login from './pages/Login/Login'
import { store } from './redux/store'
import { Provider } from 'react-redux'

function App() {

  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/lab' element={<Lab/>}></Route>
          <Route path='/field' element={<Field/>}></Route>
          <Route path='/dex' element={<Enciclopedia/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
