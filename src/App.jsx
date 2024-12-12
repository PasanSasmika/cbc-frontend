import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import Error from './components/pages/Error'

function App() {
  

  return (
    <>
     <BrowserRouter>

     <Routes path="/*">

     <Route path='/' element={<Home/>}/>
     <Route path='/login' element={<Login/>}/>
     <Route path='/*' element={<Error/>}/>

     </Routes>
     
     </BrowserRouter>
   
    </>
  )
}

export default App
