import React from "react";
import {Link} from 'react-router-dom'
import './Menu.css';

const Menu = ()=>{
    return(
        <header className = 'menu'>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/cadastro">Cadastro</Link>
                <Link to="/entregadores">Entregadores</Link>
                <Link to="/compras">Compras</Link>
                <Link to="/perfil">Perfil</Link>
            </nav>
        </header>
    )
}
export default Menu;