import {criarConta,loginCliente} from '../repository/clienteRepository.js';
import {Router} from 'express';
const endpoits = Router();


endpoits.post('/cliente/criar', async (req,resp) => {
    try{

        let conta = req.body;
        let r = await criarConta(conta);
        resp.send(r);

    } catch(err){
        resp.status(400).send({
            erro: 'Ocorreu um erro'
        });
    }
})


endpoits.post('/cliente/login', async (req,resp) => {
    try{

        let {email,senha} = req.body;
        let r = await loginCliente(email,senha);
        if(!r){
            throw new Error('Usuário ou senha incorretos')
        }
        resp.send(r);

    } catch(err){
        resp.status(401).send({
            erro: err.message
        });
    }
})


export default endpoits;