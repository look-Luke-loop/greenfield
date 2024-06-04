import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Card from "./components/Perfil.js";
import FormEtg from "./components/FormEtg.js";
import FormCad from "./compProdutos/FormCad.js";
import GridPro from "./compProdutos/GridPro.js";
import Recebidos from "./compProdutos/Recebidos.js";
import GlobalStyle from "./styles/global.js";

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

const Title = styled.h2``;

const Entregadores = () => {
  const [entregadores, setEntregadores] = useState([]);
  const [produtos, setProdutos] = useState([]);
  const [onEdit, setOnEdit] = useState(null);
  const [showFirstContainer, setShowFirstContainer] = useState(true);
  const [showSecondContainer, setShowSecondContainer] = useState(false);
  const [showRecebidos, setShowRecebidos] = useState(false);

  const handleToggleContainers = () => {
    setShowFirstContainer(!showFirstContainer);
    setShowSecondContainer(!showSecondContainer);
  };

  const handleToggleRecebidos = () => {
    setShowRecebidos(!showRecebidos);
  };

  const getEntregadores = async () => {
    try {
      const res = await axios.get("http://localhost:8800/entregadores/");
      setEntregadores(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getEntregadores();
  }, [setEntregadores]);

  const getProdutos = async () => {
    try {
      const res = await axios.get("http://localhost:8800/produtos/");
      setProdutos(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getProdutos();
  }, [setProdutos]);

  return (
    <>
      <Container visible={showFirstContainer}>
        <Title>Perfil do Entregador</Title>
        <Card entregadores={entregadores} setEntregadores={setEntregadores} setOnEdit={setOnEdit} />
        <FormEtg onEdit={onEdit} setOnEdit={setOnEdit} getEntregadores={getEntregadores} />
      </Container>
      <SecondContainer showSecondContainer={showSecondContainer}>
        <GridPro produtos={produtos} setProdutos={setProdutos} setOnEdit={setOnEdit} />
        <FormCad onEdit={onEdit} setOnEdit={setOnEdit} getProdutos={getProdutos} />
      </SecondContainer>
      
      <ToggleButton id="toggleSecondContainer" onClick={handleToggleContainers} />
      <ToggleLabel htmlFor="toggleSecondContainer">Cadastro de produtos</ToggleLabel>

      <ToggleButton id="toggleRecebidos" onClick={handleToggleRecebidos} />
      <ToggleLabel htmlFor="toggleRecebidos">Mostrar Recebidos</ToggleLabel>

      {showRecebidos && <Recebidos />}

      <ToastContainer autoClose={4000} position="bottom-left" />
      <GlobalStyle />
    </>
  );
};

export default Entregadores;
