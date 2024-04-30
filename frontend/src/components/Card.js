import React from "react";
import styled from "styled-components";
import axios from "axios";
import { FaTrash, FaEdit } from "react-icons/fa";
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

const Grid = ({ users, setUsers, setOnEdit }) => {
  // const handleEdit = (item) => {
  //   setOnEdit(item);
  // };

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8800/users/" + id);
      const newArray = users.filter((user) => user.id !== id);
      setUsers(newArray);
      toast.success("Usuário excluído com sucesso");
    } catch (error) {
      console.error("Erro ao excluir usuário:", error);
      toast.error("Erro ao excluir usuário");
    }
    setOnEdit(null);
  };

  return (
    <CardContainer>
      {users.map((item, i) => (
        <Card key={i}>
          <CardHeader>
            <CardTitle>{item.nome}</CardTitle>
            <div>
              {/* <FaEdit onClick={() => handleEdit(item)} /> */}
              <FaTrash onClick={() => handleDelete(item.id)} />
            </div>
          </CardHeader>
          <CardBody>{item.email}</CardBody>
          <CardBody>Fone: {item.fone}</CardBody>
          <CardBody>Cidade: {item.cidade}</CardBody>
          <CardBody>{item.data_nascimento}</CardBody>
        </Card>
      ))}
    </CardContainer>
  );
};

export default Grid;
