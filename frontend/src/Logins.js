import React, { useState } from 'react';
import Login from './components/Login'
import LoginEtg from './components/LoginEtg'
//import GlobalStyle from "./styles/global.js";
import {toast, ToastContainer} from "react-toastify";
import styled from "styled-components";

const Title = styled.h2``;

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  ${(props) => !props.visible && 'display: none;'}
`;

const ToggleButton = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;

const ToggleLabel = styled.label`
  display: block;
  width: fit-content;
  margin-bottom: 10px;
  cursor: pointer;
  color: white;
  background-color: #347845;
  margin-top: 20px;
  padding: 5px;
  border-radius: 5px;

  
`;

const SecondContainer = styled(Container)`
  display: ${(props) => (props.showSecondContainer ? 'flex' : 'none')};
`;



function Logins(){
    const [showFirstContainer, setShowFirstContainer] = useState(true);
    const [showSecondContainer, setShowSecondContainer] = useState(false);

    const handleToggle = () => {
        setShowFirstContainer(!showFirstContainer);
        setShowSecondContainer(!showSecondContainer);
    };

    return(
        <>      
            <Container visible={showFirstContainer}>
                <Title>Login de usuário</Title>
                <Login/>
            </Container>
            <SecondContainer showSecondContainer={showSecondContainer}>
                <Title>Login de Entregador</Title>
                <LoginEtg/>
            </SecondContainer>

            <ToggleButton id="toggleSecondContainer" onClick={handleToggle}/>
            <ToggleLabel htmlFor="toggleSecondContainer">Login do entregador</ToggleLabel>

            <ToastContainer autoClose={4000} position="bottom-left"/>
        </>
    )
}

export default Logins