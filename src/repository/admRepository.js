import {con} from './connection.js';


export async function loginAdm(email,senha){
    const comando =
        `select id_adm       as id,
                nm_adm       as nome,
                ds_email     as email
                from tb_adm 
                where ds_email = ? 
                and ds_senha = ?`;

    const [resp] = await con.query(comando, [email, senha]);
    return resp[0];
}