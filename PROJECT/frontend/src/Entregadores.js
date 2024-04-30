import Card from "./components/Card"
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
    const [users, setUsers] = useState([])
    const [onEdit, setOnEdit] = useState(null)

    const getUsers = async () => {
        try{
        const res = await axios.get("http://localhost:8800/entregadores")
        setUsers(res.data.sort((a,b) => (a.nome > b.nome ? 1 : -1)))
        } catch (error){
        toast.error(error)
        }
    }

    useEffect(() => {
        getUsers()
    },[setUsers])

    return (
        <>
            <Container>
                <Title>Entregadores</Title>
                <Card users = {users} setUsers={setUsers} setOnEdit={setOnEdit}/>
                <GlobalStyle/>
            </Container>
        </>
    )
}

export default Entregadores;