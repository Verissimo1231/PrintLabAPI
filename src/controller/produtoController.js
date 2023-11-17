import { inserirProduto, inserirImagem, consultarProduto, alterarProduto, deletarProduto } from "../repository/produtoRepository.js";
import multer from 'multer';
import {Router} from 'express';

const endpoits = Router();
const upload = multer({dest: 'storage/capasprodutos'})


endpoits.post('/produto', async (req,resp) =>{

try{
    let produto = req.body;
    let r = await inserirProduto(produto);
    resp.send(r);

} catch(err){
    resp.status(400).send({
        erro: 'Ocorreu um erro'
    });
}
})


endpoits.put('/produto/:id', async (req,resp) => {
    let produto = req.body;
    let id = req.params.id;
    let r = await alterarProduto(id, produto);
    resp.send();
})


endpoits.delete('/produto/:id', async (req,resp) => {
    let id = req.params.id;
    let r = deletarProduto(id);
    resp.send();
})


endpoits.get('/produto', async (req,resp) => {
    let busca = req.query.busca;
    let r = consultarProduto(busca);
    resp.send(r);
})


endpoits.put('/produto/:id/imagem', upload.single('imagem'), async (req,resp) =>{
try{

    let {id} = req.params;
    let imagem = req.file.path;

    let r = await inserirImagem(imagem, id);
    resp.send();

} catch(err){
    resp.status(400).send({
        erro: 'Ocorreu um erro'
    });
}
})


export default endpoits;