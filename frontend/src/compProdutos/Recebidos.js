import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { toast } from "react-toastify";

const Table = styled.table`
    width: 100%;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
    max-width: 800px;
    margin: 20px auto;
    word-break: break-all;
`;

export const Thead = styled.thead``;
export const Tbody = styled.tbody``;
export const Tr = styled.tr``;
export const Th = styled.th`
    text-align: start;
    border-bottom: inset;
    padding-bottom: 5px;

    @media(max-width: 500px) {
        ${(props) => props.onlyWeb && "display: none"}
    }
`;
export const Td = styled.td`
    padding-top: 15px;
    text-align: ${(props) => (props.alignCenter ? "center" : "start")};
    width: ${(props) => (props.align && props.align.width ? props.align.width : "auto")};
`;

const Button = styled.button`
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    background-color: #FF5A33;
    color: white;
    height: 42px;
`

const PedidosFiltrados = () => {
    const userId = localStorage.getItem('userId');
    const [pedidos, setPedidos] = useState([]);
    const [showTable, setShowTable] = useState(true); // Estado para controlar a visibilidade da tabela

    useEffect(() => {
        const fetchPedidos = async () => {
            if (!userId) {
                console.error("userId não encontrado no localStorage");
                toast.error("userId não encontrado no localStorage");
                return;
            }

            try {
                const response = await axios.get(`http://localhost:8800/recebidos/${userId}`);
                console.log("Pedidos recebidos da API:", response.data);

                if (Array.isArray(response.data)) {
                    setPedidos(response.data);
                } else {
                    console.error("Formato de dados inesperado da API");
                    toast.error("Formato de dados inesperado da API");
                }
            } catch (error) {
                console.error("Erro ao buscar pedidos:", error);
                toast.error("Erro ao buscar pedidos");
            }
        };

        fetchPedidos();
    }, [userId]);

    const toggleTableVisibility = () => {
        setShowTable(!showTable); // Função para alternar a visibilidade da tabela
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
            <div>
                <h2>Pedidos Recebidos</h2>
            </div>
            {showTable && pedidos.length > 0 ? (
                <Table>
                    <Thead>
                        <Tr>
                            <Th>Nome</Th>
                            <Th>Valor</Th>
                            <Th>Quantidade</Th>
                            <Th></Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {pedidos.map((pedido) => (
                            <Tr key={pedido.id}>
                                <Td width="25%">{pedido.nome}</Td>
                                <Td width="25%">{pedido.valor}</Td>
                                <Td width="20%">{pedido.quantidade}</Td>
                                <Td></Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            ) : (
                <p>Nenhum pedido filtrado encontrado</p>
            )}
            <Button onClick={toggleTableVisibility}>
                    {showTable ? 'CONFIRMAR ENVIOS' : 'ENVIOS CONFIRMADOS!'}
            </Button>
        </>
    );
};

export default PedidosFiltrados;
