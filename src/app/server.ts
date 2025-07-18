import express from "express"
import dotenv from "dotenv"
import router from "../routes/main/router"

const server = express()
server.use(express.urlencoded({ extended: true }))
dotenv.config()

server.use('/api', router)

server.listen(process.env.PORT, () => {
   console.log('O servidor está rodando na url http://localhost:' + process.env.PORT)
   console.log('-------------------------------------------------------------------------------- LOGS --------------------------------------------------------------------------------')
})