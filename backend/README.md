# ClientRegister

Para rodar a aplicação basta criar um banco de dados postgres e preencher o .env com base no .env.example

CRIAÇÃO DE USUARIO - POST - http://127.0.0.1:3000/user
{
"name": "Raimundo",
"email": "raimundo@gmail.com",
"tel": "982642233",
"password": "1234"
}

RETORNAR TODOS OS USUARIOS - GET - http://127.0.0.1:3000/user

ATUALIZAR USUARIO(necessario autenticação) - PATCH - http://127.0.0.1:3000/user/:id

{
"name": "Raimundo3",
"email": "raiundo@gmail.com",
"tel": "98982642233",
"password": "1234"
}

RETORNAR O PROPRIO USUARIO(necessario autenticação) - GET - http://127.0.0.1:3000/user/user

DELETAR O PROPRIO USUARIO(necessario autenticação) - DELETE - http://127.0.0.1:3000/contact/:id

FAZER LOGIN - GET - http://127.0.0.1:3000/login

CRIAR CONTATO(necessario autenticação) - POST - http://127.0.0.1:3000/contact

{
"name":"miguel",
"email": "miguel@gmail.com",
"tel": 33333333
}

EDITAR CONTATO(necessario autenticação) - PATCH - http://127.0.0.1:3000/contact/:id

{
"name": "Raimundo123Updated"
}

RETORNAR TODOS OS CONTATOS DO USUARIO LOGADO(necessario autenticação) - GET - http://127.0.0.1:3000/contact

DELETAR CONTATO ESPECIFICO(necessario autenticação) - DELETE - http://127.0.0.1:3000/contact/:id
