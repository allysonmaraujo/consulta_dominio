const express = require('express');
const consultaEmpresa = require('./controladores');

const rotas = express();
rotas.get('/empresas', consultaEmpresa)

module.exports = rotas