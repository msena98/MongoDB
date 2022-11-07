const mongoose = require('mongoose')

// Configurando o mongoose

    mongoose.connect('mongodb://0.0.0.0:27017/aprendendo').then(()=>{
        console.log('MongoDB conectado...')
    }).catch((erro)=>{
        console.log(`Houve um erro ao se conectar ao MongoDB: ${erro}`)
    })

// Definindo Model - Usuários

    const UsuarioSchema = mongoose.Schema({
        nome: {
            type: String,
            require: true
        },
        sobrenome: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true
        },
        idade: {
            type: Number,
            require: true
        },
        pais: {
            type: String
        }
    })

// Definindo Collection

    mongoose.model('usuarios', UsuarioSchema)

    const Matheus = mongoose.model('usuarios');

    new Matheus({
        nome: 'Matheus',
        sobrenome: 'Sena',
        email: 'dev.matheussena@gmail.com',
        idade: 24,
        pais: 'Brasil'
    }).save().then(() => {
        console.log("Usuário criado com sucesso!");
    }).catch((err) => {
        console.log(`Houve um erro ao registrar o usuário: ${err}`);
    })
