const express = require('express')
const path =  require('path')
const dotenv = require('dotenv')
const cors = require('cors')


const apiRoutes = require('./routes/api')

dotenv.config();
const server = express();

server.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DEL']
}))

server.use(express.urlencoded({extended: true}));

// rotas API
server.use('/vendedores', apiRoutes.router)

server.use('/', (req, res) => {
    res.json({ api: 'API ATIVA E FUNCIONANDO' })
})


// return error
server.use((req, res)=>{
    res.status(404);
    res.json({error: 'Endpoint não encontrado'})
})


server.listen(process.env.PORT)

