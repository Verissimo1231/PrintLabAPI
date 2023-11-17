import {loginAdm} from '../repository/admRepository.js';
import {Router} from 'express';
const endpoits = Router();


endpoits.post('/adm/login', async (req,resp) => {
    try{

        let {email,senha} = req.body;
        let r = await loginAdm(email,senha);
        if(!r){
            throw new Error('Usuário ou senha incorretos');
        }
        
        resp.send(r);

    } catch(err){
        resp.status(401).send({
            erro: err.message
        });
    }
})


export default endpoits;