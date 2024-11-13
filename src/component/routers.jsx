import React from "react";
import {HashRouter, Routes, Route } from 'react-router-dom';
import { Home } from "./home";
import { Nakshaho } from "./nakshaho";
import { Omuzishkho } from "./omuzisho";
import Razrab from "./razrab";



function Routers (){
    return(
        <div>
            <HashRouter>
              <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path="nakshaho" element={<Nakshaho/>}></Route>
                <Route path="home" element={<Home/>}></Route>
                <Route path="omuzishkho" element={<Omuzishkho/>}></Route>
                <Route path="razrab" element={<Razrab/>}></Route>
              </Routes>
           </HashRouter>
        </div>
    )
}
export default Routers;