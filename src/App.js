import React from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from './pages/Home';
import Summary from './pages/Summary';
import Register from "./pages/form"
const App = () => {
  return (
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/summary/:id" element={<Summary/>}/>
         <Route path='/register/:id' element={<Register/>}/>
       </Routes>
     </BrowserRouter>
  )
}

export default App