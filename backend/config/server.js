const port = 3003
const bodyParser = require('body-parser')
const express = require('express')
const server = express()

//faz com que o body parse interprete a submissao do formulario
//ele se torna responsavel pela interpretação de todos os dados.
//para toda requisicao que chegar no servidor, ela sera passada por esse middleware
server.use(bodyParser.urlencoded({ extended: true })) 
server.use(bodyParser.json())

server.listen(port, function(){
    console.log(`BACKEND is runnig on port ${port}.`)
})

module.exports = server