// importando depedências
const express = require('express')
const path = require('path')
const pages = require('./pages.js')

// iniciando o express
const server = express()

server
    // utilizar body do req
    .use(express.urlencoded({ extended: true })) 

    // usando arquivos estaticos
    .use(express.static('public'))

    // configurar template engine
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')

    // criando uma rota
    .get('/', pages.index)
    // criando as demais rotas
    .get('/orphanages', pages.orphanages)
    .get('/orphanage', pages.orphanage)
    .get('/create-orphanage', pages.createOrphanage)
    .post('/save-orphanage', pages.saveOrphanage)

// ligando o servidor
server.listen(8800)
