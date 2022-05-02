import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Homepage from './components/Homepage/Homepage'
import Login from './components/Login/Login'
import MyOrde from './components/MyOrder/MyOrde'
import Products from './components/Products/Products'
import UploadProduct from './components/UploadProduct/UploadProduct'
import RequireAuth from '../src/Auth/RequireAuth'
import UpdateProduct from './components/Update/UpdateProduct'

const App = () => {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Homepage></Homepage>}> </Route>
        <Route path='/products' element={<Products></Products>}> </Route>

        <Route path='/uploadPd' element={
          <RequireAuth>
            <UploadProduct></UploadProduct>
          </RequireAuth>
        }> </Route>


        <Route path='/myorder' element={
          <RequireAuth>
           <MyOrde></MyOrde>
          </RequireAuth>
        }> </Route>

        <Route path='/login' element={<Login></Login>}> </Route>
        <Route path='/updatepd' element={<UpdateProduct></UpdateProduct>}> </Route>
        <Route path='/updatepd/:id' element={<UpdateProduct></UpdateProduct>}></Route>


      </Routes>
    </div>
  )
}

export default App
