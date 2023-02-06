import React from 'react'
import { ToastContainer } from 'react-toastify'
import Navbar from './Components/Navbar/Navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom' 
import Home from './Components/Home/Home'
import Addcomponent from './Components/Addcomponent/Addcomponent'
import Edit from './Components/EditComponent/Edit'

const App = () => {
  return (

      <BrowserRouter>
        <ToastContainer />
        <Navbar />

        <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/add' element={<Addcomponent />}></Route>
            <Route exact path='/edit/:id' element={<Edit />}></Route>
        </Routes>
      </BrowserRouter>
 
  )
}

export default App
