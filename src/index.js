import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import clienteController from './controller/clienteController.js';
import admController from './controller/admController.js';
import produtoController from './controller/produtoController.js';

const server = express();
server.use(cors());
server.use(express.json());

server.use(clienteController);
server.use(admController);
server.use(produtoController);

server.use('/storage/capasprodutos', express.static('storage/capasprodutos'));



server.listen(process.env.PORT, () => 
            console.log(`API conectada na porta ${process.env.PORT}`));