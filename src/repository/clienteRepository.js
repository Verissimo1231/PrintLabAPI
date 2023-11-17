import {con} from './connection.js';


export async function criarConta(conta){
    const comando =
        `insert into tb_cliente(nm_cliente,ds_email, ds_senha)
            values(?,?,?)`;

    const [resp] = await con.query(comando, [conta.nome,conta.email, conta.senha]);
    conta.id = resp.insertId;
    return conta;
}


export async function loginCliente(email,senha){
    const comando =
        `select id_cliente      as id,
                nm_cliente      as nome,
                ds_email        as email
                from tb_cliente 
                where ds_email = ? 
                and ds_senha = ?`;

    const [resp] = await con.query(comando, [email,senha])
    return resp[0];
}