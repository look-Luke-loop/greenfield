import Card from "./components/Perfil.js"
import FormEtg from "./components/FormEtg.js"
import GlobalStyle from "./styles/global.js";
import styled from "styled-components";
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

const Entregadores = () =>{
    //const [users, setUsers] = useState([])
    const [entregadores, setEntregadores] = useState([])
    const [onEdit, setOnEdit] = useState(null)

    const getEntregadores = async () => {
        try {
          const res = await axios.get("http://localhost:8800/entregadores/")
          setEntregadores(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)))
        } catch (error) {
          toast.error(error)
        }
      }

      useEffect(() => {
        getEntregadores()
      },[setEntregadores])

    return (
        <>
            <Container>
                <Title>Perfil do Entregador</Title>
                <Card entregadores = {entregadores} setEntregadores={setEntregadores} setOnEdit={setOnEdit}/>
                <FormEtg onEdit={onEdit} setOnEdit={setOnEdit} getEntregadores={getEntregadores}/>
                <GlobalStyle/>
            </Container>
        </>
    )
}

export default Entregadores;