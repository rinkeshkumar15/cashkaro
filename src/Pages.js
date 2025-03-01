import React from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from "./Login";
import Home from "./Home";

const Pages = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/Home" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Pages
