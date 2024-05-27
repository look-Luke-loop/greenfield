import React, {useState, useEffect} from "react"
import styled from "styled-components"
import axios from "axios"


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

    @media(max-width: 700px){
        ${(props) => props.onlyWeb && "display: none"}
    }
`
export const Td = styled.td`
    padding-top: 15px;
    text-align: ${(props) => (props.alignCenter ? "center" : "start")}
    width: ${(props) => (props.align && props.align.width ? props.align.width : "auto")};

`

const GridPedidoetg = () =>{
    const [pedidos = [], setPedidos]= useState([]);
    useEffect(() => {
        const fetchPedidos = async () => {
            try {
                const id = 3;
                const response = await axios.get(`http://localhost:8800/entregadores/pedidos/${id}`);
                setPedidos(response.data);
                console.log(pedidos + "divisão" + response);
            } catch (error) {
                console.error("Erro ao buscar pedidos:", error);
            }
        };

        fetchPedidos();
    }, []);

    // const handleAccept = (item) => {
    //     setOnEdit(item);
    // }

    // const handleRecuse = async (id) => {
    //     await axios
    //         .put("http://localhost:8800/entregadores/" + id)
    //         .then(({data}) => {
    //             const newArray = entregadores.filter((entregador) => entregador.id !== id)
    //             setEntregadores(newArray)
    //             toast.success(data)
    //         })
    //         .catch(({data}) => toast.error(data))
    //     setOnEdit(null);
    // }

    return(
    <Table>
      <Thead>
        <Tr>
          <Th>ID Pedido</Th>
          <Th>ID Entregador</Th>
          <Th>Endereço de Entrega</Th>
          <Th>Total do Pedido</Th>
          <Th>Avaliação</Th>
          <Th>Estado</Th>
          <Th>Produtos</Th>
        </Tr>
      </Thead>
      <Tbody>
        {pedidos.map((pedido, i) => (
          <React.Fragment key={i}>
            <Tr>
              <Td width="5%">{pedido.pedido_id} </Td>
              <Td width="5%">{pedido.id_entregador}</Td>
              <Td>{pedido.endereco_entrega}</Td>
              <Td>{pedido.total_pedido}</Td>
              <Td width="5%">{pedido.avaliacao}</Td>
              <Td>{pedido.estado}</Td>
              <Td>
                {pedido.cestaprodutos_id ? (
                  <ul>
                    {pedidos
                      .filter(p => p.pedido_id === pedido.pedido_id)
                      .map((prod, index) => (
                        <li key={index}>
                          {prod.nome_do_produto} - {prod.qtd} x {prod.precouni} = {prod.preco_total}
                        </li>
                      ))}
                  </ul>
                ) : (
                  'Nenhum produto'
                )}
              </Td>
              <Td alignCenter >
                {/* <FaEdit onClick={() => handleEdit(pedido)} /> */}
              </Td>
              <Td alignCenter >
                {/* <FaTrash onClick={() => handleDelete(pedido.pedido_id)} /> */}
              </Td>
            </Tr>
          </React.Fragment>
        ))}
      </Tbody>
    </Table>

    );
}

export default GridPedidoetg