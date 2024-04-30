import express from "express"
import { getUsers, addUser, updateUser, deleteUser,
getEntregadores, addEntregador, updateEntregador, deleteEntregador } from "../controllers/user.js"

const router = express.Router()

router.get("/users", getUsers)

router.post("/users", addUser)

router.put("/users/:id", updateUser)

router.delete("/users/:id", deleteUser)

//router.get('/cards', getUsers)

// Rotas para entregadores
router.get("/entregadores", getEntregadores);

router.post("/entregadores", addEntregador);

router.put("/entregadores/:id", updateEntregador);

router.delete("/entregadores/:id", deleteEntregador);

export default router
