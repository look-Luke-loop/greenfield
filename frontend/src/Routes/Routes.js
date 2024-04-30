import React from "react";
import GlobalStyle from "../styles/global.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from '../Menu/Menu';
import Home from "../components/NoPage.js";
import Cadastro from "../App.js"
import Entregadores from "../Entregadores.js"

import NoPage from "../components/NoPage.js";




const AppRoutes =()=>{
    return(
        <Router>
            <Menu/>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/cadastro" element={<Cadastro/>}></Route>
                <Route path="/entregadores" element={<Entregadores/>}></Route>
                {/*
                <Route path="/contact" element={<Contact/>}></Route>
                <Route path="/lermais" element={<LerMais/>}></Route>
                <Route path="/post" element={<Post/>}></Route> */}
                <Route path="*" element={<NoPage/>}/>
            </Routes>
            <GlobalStyle/>
        </Router>
        
    )
}

export default AppRoutes;
