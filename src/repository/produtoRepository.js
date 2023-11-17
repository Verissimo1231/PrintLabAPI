import {con} from './connection.js';


export async function inserirProduto(produto){
    const comando = 
        `insert into tb_produto(nm_produto,id_categoria,vl_avaliacao,vl_preco,nr_unidade,ds_condicao,ds_marca,dt_producao,dt_validade,
            vl_frete,vl_peso,vl_largura,vl_altura,vl_profundidade,vl_volume,ds_descricao)
                values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

    const [resp] = (comando, [produto.nome, produto.categoria, produto.avaliacao, produto.preco, produto.unidade, produto.condicao,
                              produto.marca,produto.producao,produto.validade,produto.frete,produto.peso,produto.largura,produto.altura,
                              produto.profundidade,produto.volume,produto.descricao]);
    produto.id = resp.insertId;
    return produto;
}


export async function inserirImagem(imagem, id){
    const comando =
        `update tb_produto SET img_produto = ?
                           WHERE id_produto = ?`;

    const [resp] = await con.query(comando,[imagem, id]);
    return resp.affectedRows;
}


export async function consultarProduto(id,nome){
    const comando =
        `select * from tb_produto where id_produto = ? or nm_produto like ?`;

    const [resp] = await con.query(comando,['%'+id+'%', '%'+nome+'%']);
    return resp;
}


export async function alterarProduto(id){
    const comando =
        `update tb_produto set nm_produto = ?, id_categoria = ?, id_estoque = ?,vl_preco = ?,nr_unidade = ?,ds_condicao = ?,ds_marca = ?,
        dt_producao = ?,dt_validade = ?,vl_frete = ?,vl_peso = ?,vl_largura = ?,vl_altura = ?,vl_profundidade = ?,vl_volume = ?,ds_descricao = ? `;

        const [resp] = await con.query (comando, [produto.nome, produto.categoria, produto.estoque, produto.preco, produto.unidade, produto.condicao,
            produto.marca,produto.producao,produto.validade,produto.frete,produto.peso,produto.largura,produto.altura,
            produto.profundidade,produto.volume,produto.descricao, id]);
        return resp.affectedRows;
}


export async function deletarProduto(id){
    const comando =
        `delete from tb_produto where id_produto = ?`;

    const [resp] = (comando, [id]);
    return resp.affectedRows;
}