import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import SignUp from './components/pages/SignUp'
import AdminHome from './components/pages/AdminHome'
import { Toaster } from 'react-hot-toast'

function App() {
  

  return (
    <>
     <BrowserRouter>
     <Toaster/>

     <Routes path="/*">

     <Route path='/' element={<Home/>}/>
     <Route path='/login' element={<Login/>}/>
     <Route path='/signup' element={<SignUp/>}/>
     <Route path='/admin/*' element={<AdminHome/>}/>
     <Route path='/*' element={<Home/>}/>

     </Routes>
     
     </BrowserRouter>
   
    </>
  )
}

export default App
