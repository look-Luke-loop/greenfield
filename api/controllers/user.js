import { db } from "../db.js"

export const getUsers = (_, res) => {
    const q = "SELECT * FROM usuarios";

    db.query(q, (err, data) => {
        if (err) return res.json(err)

        return res.status(200).json(data)
    })
}

export const getUserById = (req, res) => {
    const q = "SELECT * FROM usuarios WHERE `id` = ?"

    db.query(q, [req.params.id], (err, result) => {
        if(err) {
            return res.status(500).json({ error: 'Erro ao buscar usuário', message: err.message });
        }

        if (result.length === 0) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        return res.status(200).json(result[0]); // Retorna o primeiro resultado encontrado
        
        //return res.status(200).json("Usuário encontrado com sucesso.")
    })
}

export const addUser = (req, res) => {
    const q = "INSERT INTO usuarios(`nome`, `email`, `fone`, `data_nascimento`,`cidade`,`bairro`,`senha`) VALUES(?)";
    
    const values = [
        req.body.nome,
        req.body.email,
        req.body.fone,
        req.body.data_nascimento,
        req.body.cidade,
        req.body.bairro,
        req.body.senha,

    ];

    db.query(q, [values], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Usuário criado com sucesso.")
    })
}

export const updateUser = (req, res) => {
    const q = "UPDATE usuarios SET `nome` = ?, `email` = ?, `fone` = ?, `data_nascimento` = ?, `cidade` = ?, `bairro` = ?,`senha` = ? WHERE `id` = ?"

    const values = [
        req.body.nome,
        req.body.email,
        req.body.fone,
        req.body.data_nascimento,
        req.body.cidade,
        req.body.bairro,
        req.body.senha,
    ];

    db.query(q,[...values, req.params.id], (err) =>{
        if (err) return res.json(err);

        return res.status(200).json("Usuário atualizado com sucesso.")
    })

}

export const deleteUser = (req, res) => {
    const q = "DELETE FROM usuarios WHERE `id` = ?"

    db.query(q, [req.params.id], (err) => {
        if(err) return res.json(err)

        return res.status(200).json("Usuário deletado com sucesso.")
    })
}

//-------------------------------------------------------------------------//

// Função para obter todos os entregadores
export const getEntregadores = (_, res) => {
    const query = "SELECT * FROM entregadores";

    db.query(query, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};

// Função para obter entregador por id
export const getEntregadorById = (req, res) => {
    const q = "SELECT * FROM entregadores WHERE `id` = ?"

    db.query(q, [req.params.id], (err, result) => {
        if(err) {
            return res.status(500).json({ error: 'Erro ao buscar entregador', message: err.message });
        }

        if (result.length === 0) {
            return res.status(404).json({ error: 'Entregador não encontrado' });
        }

        return res.status(200).json(result[0]); // Retorna o primeiro resultado encontrado
        
        //return res.status(200).json("Usuário encontrado com sucesso.")
    })
}

// Função para adicionar um novo entregador
export const addEntregador = (req, res) => {
    const query = "INSERT INTO entregadores (`nome`, `email`, `fone`, `data_nascimento`,`cidade`,`bairro`,`senha`) VALUES (?)";
    
    const values = [
        req.body.nome,
        req.body.email,
        req.body.fone,
        req.body.data_nascimento,
        req.body.cidade,
        req.body.bairro,
        req.body.senha,
    ];

    db.query(query, [values], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Entregador criado com sucesso.");
    });
};

// Função para atualizar um entregador existente
export const updateEntregador = (req, res) => {
    const query = "UPDATE entregadores SET `nome` = ?, `email` = ?, `fone` = ?, `data_nascimento` = ?, `cidade` = ?, `bairro` = ?, `senha` = ? WHERE `id` = ?";

    const values = [
        req.body.nome,
        req.body.email,
        req.body.fone,
        req.body.data_nascimento,
        req.body.cidade,
        req.body.bairro,
        req.body.senha,
    ];

    db.query(query, [...values, req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Entregador atualizado com sucesso.");
    });
};

// Função para deletar um entregador
export const deleteEntregador = (req, res) => {
    const query = "DELETE FROM entregadores WHERE `id` = ?";

    db.query(query, [req.params.id], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Entregador deletado com sucesso.");
    });
};

// LOGIN do usuário

export const login = (req, res) => {

    const { email, senha} = req.body;
    
    const q = "SELECT * FROM usuarios WHERE email = ? AND senha = ?";
    
    db.query(q, [email, senha], (err,result) => {
        if (err) return res.status(500).json(err);
        if (result.length > 0) {
            if (result.length > 0) {
                return res.status(200).json({ success: true, userId: result[0].id });
            } else {
                return res.status(401).json({ success: false, message: 'Credenciais inválidas' });
            }
        }
    });
};
// LOGIN do entregador

export const loginEtg = (req, res) => {

    const { email, senha} = req.body;
    
    const q = "SELECT * FROM entregadores WHERE email = ? AND senha = ?";
    
    db.query(q, [email, senha], (err,result) => {
        if (err) return res.status(500).json(err);
        if (result.length > 0) {
            if (result.length > 0) {
                return res.status(200).json({ success: true, userId: result[0].id });
            } else {
                return res.status(401).json({ success: false, message: 'Credenciais inválidas' });
            }
        }
    });
};

//-------------------------------------------------------------------------------------------------//

//Funções de controle de produto

export const getProdutos = (_, res) => {
    const q = "SELECT * FROM produtos";

    db.query(q, (err, data) => {
        if (err) return res.json(err)

        return res.status(200).json(data)
    })
}

export const getProdutosById = (req, res) => {
    const q = "SELECT * FROM produtos WHERE `id` = ?"

    db.query(q, [req.params.id], (err, result) => {
        if(err) {
            return res.status(500).json({ error: 'Erro ao buscar produto', message: err.message });
        }

        if (result.length === 0) {
            return res.status(404).json({ error: 'Produto não encontrado' });
        }

        return res.status(200).json(result); // Retorna todos os resultados encontrados
        
        //return res.status(200).json("Usuário encontrado com sucesso.")
    })
}

export const addProdutos = (req, res) => {
    const q = "INSERT INTO produtos(`id`,`nome`, `valor`) VALUES(?)";
    
    const values = [
        req.body.id,
        req.body.nome,
        req.body.valor,

    ];

    db.query(q, [values], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Produto criado com sucesso.")
    })
}

export const updateProdutos = (req, res) => {
    const q = "UPDATE produtos SET `nome` = ?, `valor` = ? WHERE `id` = ?"

    const values = [
        req.body.id,
        req.body.nome,
        req.body.valor,
    ];

    db.query(q,[...values, req.params.id], (err) =>{
        if (err) return res.json(err);

        return res.status(200).json("Produto atualizado com sucesso.")
    })

}

export const deleteProdutos = (req, res) => {
    const q = "DELETE FROM produtos WHERE `id` = ?"

    db.query(q, [req.params.id], (err) => {
        if(err) return res.json(err)

        return res.status(200).json("Produto deletado com sucesso.")
    })
}

//-------------------------------------------------------//
//Criando carrinho

export const addPedidos = (req, res) => {

    const { userId, id_etg, nome, valor, quantidade } = req.body;

    const q = "INSERT INTO pedidos (userId, id_etg, nome, valor, quantidade) VALUES (?, ?, ?, ?, ?)";
    const values = [userId, id_etg, nome, valor, quantidade];

    db.query(q, values, (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Erro ao inserir pedido', message: err.message });
        }

        return res.status(201).json({ message: 'Pedido inserido com sucesso' });
    });
}

//Busca por Id de Usuário:

export const getCarrinhoById = (req, res) => {
    const userId = req.params.userId;

    const q = "SELECT * FROM pedidos WHERE userId = ?";
    db.query(q, [userId], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Erro ao buscar pedidos', message: err.message });
        }

        return res.status(200).json(result);
    });
}

//Busca pedidos para o perfil do entregador

export const getRecebidosById = (req, res) => {
    const userId = req.params.userId;

    const q = "SELECT * FROM pedidos WHERE id_etg = ?";
    db.query(q, [userId], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Erro ao buscar pedidos', message: err.message });
        }

        return res.status(200).json(result);
    });
}

