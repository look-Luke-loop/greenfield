import express from "express"
import { getUsers, getUserById, addUser, updateUser, deleteUser,
getEntregadores, getEntregadorById, addEntregador, updateEntregador,
 deleteEntregador, login, loginEtg, 
 getProdutos, getProdutosById, addProdutos, updateProdutos, deleteProdutos,
 addPedidos, getCarrinhoById, getRecebidosById} from "../controllers/user.js"

const router = express.Router()

router.get("/users", getUsers)

router.get("/users/:id", getUserById)

router.post("/users", addUser)

router.put("/users/:id", updateUser)

router.delete("/users/:id", deleteUser)

//router.get('/cards', getUsers)

// Rotas para entregadores:
router.get("/entregadores", getEntregadores);

router.get("/entregadores/:id", getEntregadorById);

router.post("/entregadores", addEntregador);

router.put("/entregadores/:id", updateEntregador);

router.delete("/entregadores/:id", deleteEntregador);

//Rotas para Login:
router.post("/users/login", login);

router.post("/entregadores/loginEtg", loginEtg);

//Produtos:
router.get("/produtos", getProdutos)

router.get("/produtos/:id", getProdutosById)

router.post("/produtos", addProdutos)

router.put("/produtos/:id", updateProdutos)

router.delete("/produtos/:id", deleteProdutos)

//Pedidos:

router.post("/pedidos", addPedidos)

router.get("/pedidos/:userId", getCarrinhoById)

router.get("/recebidos/:userId", getRecebidosById)

export default router
