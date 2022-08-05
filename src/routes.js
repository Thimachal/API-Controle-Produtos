const express = require('express');
const usuarios = require('./controllers/usuarios');
const login = require('./controllers/login');
const produtos = require('./controllers/produtos');
const verificaLogin = require('./filtros/verificaLogin');

const routes = express();

// cadastro de usuario
routes.post('/usuarios', usuarios.cadastrarUsuario);

// login
routes.post('/login', login.login);

// filtro para verificar usuario logado
routes.use(verificaLogin);

// obter e atualizar perfil do usuario logado
routes.get('/perfil', usuarios.obterPerfil);
routes.put('/perfil', usuarios.atualizarPerfil);

// crud de produtos
routes.get('/produtos', produtos.listarProdutos);
routes.get('/produtos/:id', produtos.obterProduto);
routes.post('/produtos', produtos.cadastrarProduto);
routes.put('/produtos/:id', produtos.atualizarProduto);
routes.delete('/produtos/:id', produtos.excluirProduto);

module.exports = routes;