import express from "express"

import { getUsers, getUserById, addUser, updateUser, deleteUser,
getEntregadores, getEntregadorById, addEntregador, updateEntregador,
 deleteEntregador, login, loginEtg} from "../controllers/user.js"

 import { 

    getProdutoById,
    getCarrinhoById,
    getPedidosById,
    getPedidosEntregadoresById,
    addItemCarrinho,
    deleteItemCarrinho,
    updateItemCarrinho

} from "../controllers/pedidos.js"

const router = express.Router()

router.get("/users", getUsers)

router.get("/users/:id", getUserById)

router.post("/users", addUser)

router.put("/users/:id", updateUser)

router.delete("/users/:id", deleteUser)

router.get('users')

//router.get('/cards', getUsers)

// Rotas para entregadores
router.get("/entregadores", getEntregadores);

router.get("/entregadores/:id", getEntregadorById);

router.post("/entregadores", addEntregador);

router.put("/entregadores/:id", updateEntregador);

router.delete("/entregadores/:id", deleteEntregador);

//Rotas para Login

router.post("/users/login", login);

router.post("/entregadores/loginEtg", loginEtg);

//rotas de produtos e compras

router.get("/entregadores/produtos/:id", getProdutoById); 

router.get("/users/pedidos/:id", getPedidosById);

router.get("/entregadores/pedidos/:id", getPedidosEntregadoresById);

router.get("/users/carrinho/:id", getCarrinhoById);

router.post("/users/carrinho", addItemCarrinho);

router.delete("/users/carrinho/:id", deleteItemCarrinho);
//em construção
router.put("/users/carrinho/:id", updateItemCarrinho);

export default router;

