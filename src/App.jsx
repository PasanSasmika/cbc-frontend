import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AdminHome from './pages/adminPages/AdminHome'
import { Toaster } from 'react-hot-toast'
import Home from './pages/homepages/Home'
import SignUp from './pages/homepages/SignUp'
import Login from './pages/homepages/Login'
import Testing from './pages/adminPages/Testing'



function App() {
  

  return (
    <>
     <BrowserRouter>
     <Toaster/>

     <Routes path="/*">

     <Route path='/' element={<Home/>}/>
     <Route path='/login' element={<Login/>}/>
     <Route path='/signup' element={<SignUp/>}/>
     <Route path='/test' element={<Testing/>}/>
     <Route path='/admin/*' element={<AdminHome/>}/>
     <Route path='/*' element={<Home/>}/>

     </Routes>
     
     </BrowserRouter>
   
    </>
  )
}

export default App
