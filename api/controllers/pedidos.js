import { db } from "../db.js"

//pega os produtos por id de vendedor (checada e funcional)
export const getProdutoById = (req, res) => {
    const q = "SELECT * FROM produtos WHERE `id_entregador` = ?"

    db.query(q, [req.params.id], (err, result) => {
        if(err) {
            return res.status(500).json({ error: 'Erro ao buscar produtos do vendedor /n', message: err.message });
        }else{

            return res.status(200).json(result);
    
        }
    })
}
//pega o carrinho por id de usuario lista de pedidos + detalhes dos itens
export const getCarrinhoById = (req, res) => {
    const q =
    `SELECT 
    c.id AS cestaprodutos_id,
    c.id_user, c.id_pedido,
    c.id_produto,
    c.qtd, c.precouni,
    c.preco_total,
    p.id AS produtos_id,
    p.descricao,
    p.id_entregador,
    p.nome_do_produto,
    p.preco
    
    FROM 
    cestaprodutos c 
    
    JOIN
    produtos p 
    
    ON 
    c.id_produto = p.id 
    
    WHERE c.id_user = ?`

    db.query(q, [req.params.id], (err, result) => {
        if(err) {
            return res.status(500).json({ error: 'Erro ao buscar carrinho!', message: err.message });
        }else{
            
            return res.status(200).json(result);
        }
    })
}

//pega os pedidos + detalhes do carrinho e itens
export const getInfoByIdPedido = (req, res) => {
    const q =
    `SELECT
    p.id AS pedido_id,
    p.id_entregador,
    p.data_pedido,
    p.endereco_entrega,
    p.total_pedido,
    p.avaliacao,
    p.estado,
    p.data_entrega,
    cp.id AS cestaprodutos_id,
    cp.id_produto,
    cp.qtd,
    cp.precouni,
    cp.preco_total,
    pr.descricao AS produto_descricao,
    pr.nome_do_produto,
    pr.preco
FROM
    pedido p
LEFT JOIN
    cestaprodutos cp ON p.id = cp.id_pedido
LEFT JOIN
    produtos pr ON cp.id_produto = pr.id
WHERE
    p.id_entregador = ?`

    db.query(q, [req.params.id], (err, result) => {
        if(err) {
            return res.status(500).json({ error: 'Erro ao buscar carrinho!', message: err.message });
        }else{
            
            return res.status(200).json(result);
        }
    })

    // formato de exportação de json:

	// "pedido_id": 1,
	// "id_entregador": 2,
	// "data_pedido": "2024-05-13T22:20:25.000Z",
	// "endereco_entrega": "Rua Não Principal, 143",
	// "total_pedido": "30.00",
	// "avaliacao": null,
	// "estado": 1,
	// "data_entrega": null,
	// "cestaprodutos_id": 3,
	// "id_produto": 103,
	// "qtd": 3,
	// "precouni": 8.5,
	// "preco_total": 25.5,
	// "produto_descricao": "Tênis de corrida ultraleve",
	// "nome_do_produto": "Tênis esportivo",
	// "preco": 200.5
	
}
//pega os pedidos por id de cliente
export const getPedidosById = (req, res) => {
    const q = "SELECT * FROM pedido WHERE `id_user` = ?"

    db.query(q, [req.params.id], (err, result) => {
        if(err) {
            return res.status(500).json({ error: 'Erro ao buscar produtos do vendedor /n', message: err.message });
        }else{

            return res.status(200).json(result);
    
        }
    })
}

export const getPedidosByIdEntregador = (req, res) => {
    const q = "SELECT * FROM pedido WHERE `id_entregador` = ?"

    db.query(q, [req.params.id], (err, result) => {
        if(err) {
            return res.status(500).json({ error: 'Erro ao buscar produtos do vendedor /n', message: err.message });
        }else{

            return res.status(200).json(result);
    
        }
    })
}
//pega os pedidos por id de entregador(sem uso)
export const getPedidosEntregadoresById = (req, res) => {
    const q = "SELECT * FROM pedido WHERE `id_entregador` = ?"

    db.query(q, [req.params.id], (err, result) => {
        if(err) {
            return res.status(500).json({ error: 'Erro ao buscar produtos do vendedor /n', message: err.message });
        }else{

            return res.status(200).json(result);
    
        }
    })
}

//adiciona um item no carrinho (não precisa passar preço total)
export const addItemCarrinho = (req, res) => {
    const q = `INSERT INTO cestaprodutos (id_user, id_pedido, id_produto, qtd , precouni, preco_total) VALUES (?)`;
    
    const values = [
        req.body.id_user,
        req.body.id_pedido,
        req.body.id_produto,
        req.body.qtd,
        req.body.precouni,
        req.body.preco_total = (double(req.body.qtd) * double(req.body.precouni))
    ];

    db.query(q, [values], (err) => {
        if(err) {
             console.log("erro aqui");
             return res.json(err);
           
        }else{
            return res.status(200).json("Usuário criado com sucesso.");
            
        }
    });
}

//apaga um item do carrinho
export const deleteItemCarrinho = (req, res) => {
    const query = "DELETE FROM cestaprodutos WHERE `id` = ?";

    db.query(query, [req.params.id], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("item deletado com sucesso.");
    });
};

//atualiza quantidade no carrinho funcional porem vaimelhorar
export const updateItemCarrinho = (req, res) => {
    const q = `UPDATE cestaprodutos SET qtd = ? WHERE id = ?`
    const values = [
        req.body.qtd
        
    ];

    db.query(q,[...values, req.params.id], (err) =>{
        if (err) return res.json(err);

        return res.status(200).json("quantidade atualizada com sucesso.")
    })

}

