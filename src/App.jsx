import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AdminHome from './pages/adminPages/AdminHome'
import { Toaster } from 'react-hot-toast'
import SignUp from './pages/homepages/SignUp'
import Login from './pages/homepages/Login'
import Testing from './pages/adminPages/Testing'
import CustomerHome from './pages/homepages/CustomerHome'



function App() {
  

  return (
    <>
     <BrowserRouter>
     <Toaster/>

     <Routes path="/*">

     <Route path='/' element={<CustomerHome/>}/>
     <Route path='/login' element={<Login/>}/>
     <Route path='/signup' element={<SignUp/>}/>
     <Route path='/test' element={<Testing/>}/>
     <Route path='/admin/*' element={<AdminHome/>}/>
     <Route path='/*' element={<CustomerHome/>}/>

     </Routes>
     
     </BrowserRouter>
   
    </>
  )
}

export default App
