import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { FaShoppingCart } from "react-icons/fa";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

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

const Grid = ({ setOnEdit }) => {
    const { id } = useParams();
    const [produtos, setProdutos] = useState([]);
    const [quantidades, setQuantidades] = useState({});
    const userId = localStorage.getItem('userId');

    useEffect(() => {
        const fetchProdutos = async () => {
            try {
                const response = await axios.get(`http://localhost:8800/produtos/${id}`);
                console.log("Dados recebidos da API:", response.data);
                setProdutos(response.data);
            } catch (error) {
                console.error("Erro ao buscar produtos:", error);
                toast.error("Erro ao buscar produtos");
            }
        };

        fetchProdutos();
    }, [id]);

    const handleQuantidadeChange = (produtoId, quantidade) => {
        setQuantidades(prev => ({ ...prev, [produtoId]: quantidade }));
    };

    const handleEnviarPedido = async (produto) => {
        const pedido = {
            userId,
            id_etg: produto.id,
            nome: produto.nome,
            valor: produto.valor,
            quantidade: quantidades[produto.id] || 1, //O padrão é 1, se não estiver definido outro número
        };

        try {
            await axios.post("http://localhost:8800/pedidos", pedido);
            toast.success("Pedido enviado com sucesso!");
        } catch (error) {
            console.error("Erro ao enviar pedido:", error);
            toast.error("Erro ao enviar pedido");
        }
    };

    return (
        <>
            <div>
                <h2>Produtos</h2>
                <p>O ID do entregador é: {id}</p>
            </div>
            {produtos.length > 0 ? (
                <Table>
                    <Thead>
                        <Tr>
                            <Th>Nome</Th>
                            <Th>Valor</Th>
                            <Th>Quantidade</Th>
                            <Th></Th>
                            <Th></Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {produtos.map((produto) => (
                            <Tr key={produto.id}>
                                <Td width="25%">{produto.nome}</Td>
                                <Td width="25%">{produto.valor}</Td>
                                <Td width="20%">
                                    <input
                                        type="number"
                                        min="1"
                                        value={quantidades[produto.id] || 1}
                                        onChange={(e) => handleQuantidadeChange(produto.id, e.target.value)}
                                    />
                                </Td>
                                <Td alignCenter width="5%">
                                    <FaShoppingCart onClick={() => handleEnviarPedido(produto)} />
                                </Td>
                                <Td></Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            ) : (
                <p>Nenhum produto encontrado</p>
            )}
        </>
    );
};

export default Grid;
