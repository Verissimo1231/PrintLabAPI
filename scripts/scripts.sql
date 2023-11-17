create database printlab_db;
use printlab_db;

create table tb_cliente(
id_cliente			int primary key auto_increment not null,
ds_email			varchar(200) not null,
ds_senha			varchar(200) not null
);

create table tb_adm(
id_adm				int primary key auto_increment not null,
ds_email			varchar(200) not null,
ds_senha			varchar(200) not null
);

insert into tb_adm(ds_email,ds_senha)
values('pedro2407@gmail', '1234');

create table tb_categoria(
id_categoria			int primary key auto_increment not null,
ds_categoria			varchar(200) not null
);

insert into tb_categoria(ds_categoria)
values ('Todas as Categorias'), ('Impressões3D'), ('Filamentos'), ('Resina'), ('Impressões'), ('Mais Vendidos'), ('Ofertas Diárias'), ('Mais Desejados'), ('Novidades');

create table tb_imagens_produto(
id_imagens_produto			int primary key auto_increment not null,
id_produto					int,
img_produto					varchar(200) not null,
foreign key (id_produto) references tb_produto (id_produto)
);


create table tb_estoque(
id_estoque				int primary key auto_increment not null,
vl_minimo				int not null,
vl_maximo				int not null,
ds_crossdoking			varchar(200) not null,
ds_localizacao			varchar(200) not null,
nr_quantidade			int not null,
ds_obs					varchar(200)
);

create table tb_produto(
id_produto				int primary key auto_increment not null,
nm_produto              varchar(200),
id_categoria			int not null,
id_estoque				int not null,
vl_preco				decimal(10,2) not null,
nr_unidade				int not null,
ds_condicao				varchar(200) not null,
ds_marca				varchar(200) not null,
dt_producao				date not null,
dt_validade			    decimal(10,2) not null,
vl_profundide   		date not null,
vl_frete				decimal(10,2) not null,
vl_peso					decimal(10,2) not null,
vl_largura				decimal(10,2) not null,
vl_altura				decimal(10,2) not null,
vl_volume				decimal(10,2) not null,
ds_descricao			varchar(200) not null,
foreign key (id_estoque) references tb_estoque (id_estoque),
foreign key (id_categoria) references tb_categoria (id_categoria)
);

create table tb_pagamento(
id_pagamento			int primary key auto_increment not null,
ds_formas				varchar(200) not null
);

create table tb_endereco(
id_endereco				int primary key auto_increment not null,
nm_cliente				varchar(200) not null,
ds_estado				varchar(200) not null,
ds_cidade				varchar(200) not null,
ds_bairro				varchar(200) not null,
ds_rua					varchar(200) not null,
nr_numero				varchar(200) not null,
ds_complemento			varchar(200)
);

create table tb_pedido(
id_pedido				int primary key auto_increment not null,
id_endereco				int not null,
id_pagamento			int not null,
ds_cpf					varchar(200) not null,
nr_cartao				int not null,
cd_seguranca			varchar(200) not null,
foreign key (id_pagamento) references tb_pagamento (id_pagamento),
foreign key (id_endereco) references tb_endereco (id_endereco)
);

create table tb_pedido_produto(
id_pedido_produto				int primary key auto_increment not null,
id_pedido						int not null,
id_produto						int not null,
foreign key (id_produto) references tb_produto (id_produto),
foreign key (id_pedido) references tb_pedido (id_pedido)
);