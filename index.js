const express = require('express')

const app = express()
const path = require('path')
const hbs = require('hbs')

//Definimos el port
const puerto = 8082

//Servidor del directorio estático
app.use(express.static('public'))

//Configuración del directorio de las vistas hbs
app.set('views', path.join(__dirname+'/public/views'))
app.set('view engine', 'hbs')

app.get('/',(req, res) => {
    res.render('disponibilidad')
})

app.listen(puerto, () =>
console.log(`Escuchando por el puerto ${puerto}`))