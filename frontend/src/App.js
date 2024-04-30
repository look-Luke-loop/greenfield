import GlobalStyle from "./styles/global.js";
import styled from "styled-components";
import Form from "./components/Form.js";
import FormEtg from "./components/FormEtg.js"
import Grid from "./components/Grid.js"
import GridEtg from "./components/GridEtg.js"

import {useEffect, useState} from "react"
import {toast, ToastContainer} from "react-toastify"; //Toast possibilita a criação de mensagens flutuantes
import "react-toastify/dist/ReactToastify.css";
import axios from "axios"

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h2``;

function App() {
  const [users, setUsers] = useState([])
  const [entregadores, setEntregadores] = useState([])
  const [onEdit, setOnEdit] = useState(null)

  const getUsers = async () => {
    try{
      const res = await axios.get("http://localhost:8800/users")
      setUsers(res.data.sort((a,b) => (a.nome > b.nome ? 1 : -1)))
    } catch (error){
      toast.error(error)
    }
  }

  const getEntregadores = async () => {
    try {
      const res = await axios.get("http://localhost:8800/entregadores/")
      setEntregadores(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)))
    } catch (error) {
      toast.error(error)
    }
  }

  useEffect(() => {
    getUsers()
  },[setUsers])

  useEffect(() => {
    getEntregadores()
  },[setEntregadores])

  return (
    <>
      <Container>
        <Title>USUÁRIOS</Title>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers}/>
        {/* <Grid users = {users} setUsers={setUsers} setOnEdit={setOnEdit}/> */}
        <Title>Entregador</Title>
        <FormEtg onEdit={onEdit} setOnEdit={setOnEdit} getEntregadores={getEntregadores}/>
        {/* <GridEtg entregadores = {entregadores} setEntregadores={setEntregadores} setOnEdit={setOnEdit}/> */}

      </Container>
      <ToastContainer autoClose={4000} position="bottom-left"/>
      <GlobalStyle/>
    </>
  );
}

export default App;
