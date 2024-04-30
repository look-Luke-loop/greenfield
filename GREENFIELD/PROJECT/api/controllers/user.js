import { db } from "../db.js"

export const getUsers = (_, res) => {
    const q = "SELECT * FROM usuarios";

    db.query(q, (err, data) => {
        if (err) return res.json(err)

        return res.status(200).json(data)
    })
}

export const addUser = (req, res) => {
    const q = "INSERT INTO usuarios(`nome`, `email`, `fone`, `data_nascimento`) VALUES(?)";
    
    const values = [
        req.body.nome,
        req.body.email,
        req.body.fone,
        req.body.data_nascimento,
    ];

    db.query(q, [values], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Usuário criado com sucesso.")
    })
}

export const updateUser = (req, res) => {
    const q = "UPDATE usuarios SET `nome` = ?, `email` = ?, `fone` = ?, `data_nascimento` = ? WHERE `id` = ?"

    const values = [
        req.body.nome,
        req.body.email,
        req.body.fone,
        req.body.data_nascimento,
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

// Função para adicionar um novo entregador
export const addEntregador = (req, res) => {
    const query = "INSERT INTO entregadores (`nome`, `email`, `fone`, `data_nascimento`,`cidade`) VALUES (?)";
    
    const values = [
        req.body.nome,
        req.body.email,
        req.body.fone,
        req.body.data_nascimento,
        req.body.cidade,
    ];

    db.query(query, [values], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Entregador criado com sucesso.");
    });
};

// Função para atualizar um entregador existente
export const updateEntregador = (req, res) => {
    const query = "UPDATE entregadores SET `nome` = ?, `email` = ?, `fone` = ?, `data_nascimento` = ?, `cidade` = ? WHERE `id` = ?";

    const values = [
        req.body.nome,
        req.body.email,
        req.body.fone,
        req.body.data_nascimento,
        req.body.cidade,
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

