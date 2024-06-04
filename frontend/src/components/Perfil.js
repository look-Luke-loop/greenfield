import React, { useState, useEffect } from "react";
//import { useLocation } from 'react-router-dom';
import styled from "styled-components";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

const CardContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 20px auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

const Card = styled.div`
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  word-break: break-all;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardTitle = styled.h2`
  margin: 0;
`;

const CardBody = styled.p``;

const Grid = ({ entregadores, setEntregadores, setOnEdit }) => {
    //const location = useLocation();
    const userId = localStorage.getItem('userId');
    //const userId = location.state  ? location.state.userId : null;
    //const [filtrarUsers, setFiltrarUsers] = useState([]); //Vamos filtrar os usuários que virão do get na página Entregadores por meio da users
    const [atualUser, setAtualUser] = useState(null);

    useEffect(() => {
      const fetchAtualUser = async () => {
      try {
        if (userId) {
          const response = await axios.get(`http://localhost:8800/entregadores/${userId}`);
          setAtualUser(response.data);
          console.log(response.data)
        }
      } catch (error) {
        console.error('Erro ao buscar dados do usuário:', error);
      }
    };

    fetchAtualUser();
  }, [userId]);

  // useEffect(() => {
  //   if (atualUser) {
  //     // Filtrar os usuários com base nos dados de cidade e bairro do usuário atual
  //     const filtered = entregadores.filter(user => user.cidade === atualUser.cidade && user.bairro === atualUser.bairro);
  //     setFiltrarUsers(filtered);
  //   }
  // }, [atualUser, entregadores]);


  const fetchEntregadores = async () => {
    try {
        const response = await axios.get("http://localhost:8800/entregadores/");
        return response.data.sort((a, b) => (a.nome > b.nome ? 1 : -1));
    } catch (error) {
        throw new Error("Erro ao buscar os entregadores.");
    }
};

//-----------------------------------------------------------------------------------------------------------------------//
  const handleEdit = (item) => {
    setOnEdit(item);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8800/users/" + id);
      const newArray = entregadores.filter((user) => user.id !== id);
      setEntregadores(newArray);
      toast.success("Usuário excluído com sucesso");
    } catch (error) {
      console.error("Erro ao excluir usuário:", error);
      toast.error("Erro ao excluir usuário");
    }
    setOnEdit(null);
  };

  return (
    <>
        <div>
           {userId ? (
              <p>O ID do usuário é: {userId}</p>
          ) : (
              <p>O ID do usuário não está disponível.</p>
            )}
          </div>
    <CardContainer>
      {atualUser && (
        <Card>
          <CardHeader>
            <CardTitle>{atualUser.nome}</CardTitle>
            <div>
              <FaEdit onClick={() => handleEdit(atualUser)} />
            </div>
          </CardHeader>
          <CardBody>{atualUser.email}</CardBody>
          <CardBody>Fone: {atualUser.fone}</CardBody>
          <CardBody>Cidade: {atualUser.cidade}</CardBody>
          <CardBody>Bairro: {atualUser.bairro}</CardBody>
          <CardBody>{atualUser.data_nascimento}</CardBody>
            <div>
              <FaTrash onClick={() => handleDelete(atualUser.id)} />
            </div>
        </Card>
      )}
    </CardContainer>
    </>
  );
};

export default Grid;
