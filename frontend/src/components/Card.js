import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
//import { FaTrash } from "react-icons/fa";
//import { toast } from "react-toastify";
import {Link} from 'react-router-dom'

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

const Grid = ({ users, }) => {
    //const location = useLocation();
    const userId = localStorage.getItem('userId');
    //const userId = location.state  ? location.state.userId : null;
    const [filtrarUsers, setFiltrarUsers] = useState([]); //Vamos filtrar os usuários que virão do get na página Entregadores por meio da users
    const [atualUser, setAtualUser] = useState(null);
    

    useEffect(() => {
      const fetchAtualUser = async () => {
      try {
        if (userId) {
          const response = await axios.get(`http://localhost:8800/users/${userId}`);
          setAtualUser(response.data);
          console.log(response.data)
        }
      } catch (error) {
        console.error('Erro ao buscar dados do usuário:', error);
      }
    };

    fetchAtualUser();
  }, [userId]);

  useEffect(() => {
    if (atualUser) {
      // Filtrar os usuários com base nos dados de cidade e bairro do usuário atual
      const filtered = users.filter(user => user.cidade === atualUser.cidade && user.bairro === atualUser.bairro);
      setFiltrarUsers(filtered);
    }
  }, [atualUser, users]);

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
      {filtrarUsers.map((item, i) => (
        <Card key={i}>
          <CardHeader>
            <CardTitle>{item.nome}</CardTitle>
            {/* <div>
              <FaEdit onClick={() => handleEdit(item)} />
              <FaTrash onClick={() => handleDelete(item.id)} />
            </div> */}
          </CardHeader>
          <CardBody>{item.email}</CardBody>
          <CardBody>Fone: {item.fone}</CardBody>
          <CardBody>Cidade: {item.cidade}</CardBody>
          <CardBody>Bairro: {item.bairro}</CardBody>
          <CardBody>{item.data_nascimento}</CardBody>
          <Link to={`/produtos/${item.id}`}>Produtos</Link>
        </Card>
      ))}
    </CardContainer>
    </>
  );
};

export default Grid;
