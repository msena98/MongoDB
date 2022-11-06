const mongoose = require('mongoose')

// Configurando o mongoose
    mongoose.connect('mongodb://0.0.0.0:27017/aprendendo').then(()=>{
        console.log('MongoDB conectado...')
    }).catch((erro)=>{
        console.log(`Houve um erro ao se conectar ao MongoDB: ${erro}`)
    })
