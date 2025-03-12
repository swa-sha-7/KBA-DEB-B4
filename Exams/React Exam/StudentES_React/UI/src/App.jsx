import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './pages/Home'
import AddStudent from './pages/AddStudent';
import ViewStudent from './pages/ViewStudent';

const App = () => {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddStudent/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App