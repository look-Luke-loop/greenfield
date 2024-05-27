import React from "react";
import {Link, useNavigate} from 'react-router-dom'
import styled from "styled-components"
import './Menu.css';

const Button = styled.button`
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    background-color: #2c73d2;
    color: white;
    height: 42px;
`

const Menu = ()=>{

    const navigate = useNavigate();

    // No clique do botão "sair"
    const handleLogout = () => {
        localStorage.removeItem('userId');
        navigate('/')
    };

    return(
        <header className = 'menu'>
            <nav>
                <Link to="/">Login</Link>
                <Link to="/entregadores">Entregadores</Link>
                <Link to="/compras">Compras</Link>
                <Link to="/perfil">Perfil</Link>
                <Link to="/entregador/pedidos">Listar Pedidos</Link>
                <Button onClick={handleLogout}>Sair</Button>
            </nav>
        </header>
    )
}
export default Menu;