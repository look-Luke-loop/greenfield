import express from "express"
import { getUsers, getUserById, addUser, updateUser, deleteUser,
getEntregadores, getEntregadorById, addEntregador, updateEntregador,
 deleteEntregador, login, loginEtg } from "../controllers/user.js"

const router = express.Router()

router.get("/users", getUsers)

router.get("/users/:id", getUserById)

router.post("/users", addUser)

router.put("/users/:id", updateUser)

router.delete("/users/:id", deleteUser)

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

export default router
