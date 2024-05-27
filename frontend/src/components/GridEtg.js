import React, {useState, useEffect} from "react"
import styled from "styled-components"
import axios from "axios"
import {FaTrash, FaEdit} from "react-icons/fa"
import {toast} from "react-toastify"

const Table = styled.table`
    width: 100%;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
    max-width: 800px;
    margin: 20px auto;
    word-break: break-all;
`
export const Thead = styled.thead``

export const Tbody = styled.tbody``

export const Tr = styled.tr``

export const Th = styled.th`
    text-align: start;
    border-bottom: inset;
    padding-bottom: 5px;

    @media(max-width: 500px){
        ${(props) => props.onlyWeb && "display: none"}
    }
`
export const Td = styled.td`
    padding-top: 15px;
    text-align: ${(props) => (props.alignCenter ? "center" : "start")}
    width: ${(props) => (props.align && props.align.width ? props.align.width : "auto")};

`

const Grid = ({entregadores, setEntregadores, setOnEdit}) =>{

    useEffect(() => {
        const fetchEntregadores = async () => {
            try {
                const response = await axios.get("http://localhost:8800/entregadores");
                setEntregadores(response.data);
            } catch (error) {
                console.error("Erro ao buscar entregadores:", error);
            }
        };

        fetchEntregadores();
    }, []);

    const handleEdit = (item) => {
        setOnEdit(item);
    }

    const handleDelete = async (id) => {
        await axios
            .delete("http://localhost:8800/entregadores/"+ id)
            .then(({data}) => {
                const newArray = entregadores.filter((entregador) => entregador.id !== id)
                setEntregadores(newArray)
                toast.success(data)
            })
            .catch(({data}) => toast.error(data))
        setOnEdit(null);
    }

    return(
        <Table>
            <Thead>
                <Tr>
                    <Th>Nome</Th>
                    <Th>Email</Th>
                    <Th onlyWeb>Fone</Th>
                    <Th></Th>
                    <Th></Th>
                </Tr>
            </Thead>
            <Tbody>
                {entregadores.map((item, i) =>(
                    <Tr key= {i}>
                        <Td width="30%">{item.nome}</Td>
                        <Td width="30%">{item.email}</Td>
                        <Td width="20%" onlyWeb>{item.fone}</Td>
                        <Td alignCenter width="5%">
                            <FaEdit onClick={() => handleEdit(item)}/>
                        </Td>
                        <Td alignCenter width="5%">
                            <FaTrash onClick={()=> handleDelete(item.id)}/>
                        </Td>
                        <Td ></Td>

                    </Tr>

                ))}
            </Tbody>
        </Table>
    );
}

export default Grid