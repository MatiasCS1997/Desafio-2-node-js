const express = require('express')
const app = express()
const fs = require('fs')

app.use(express.json())

app.listen(3000, console.log('se inicio el servidor'))

app.get('/canciones', (req, res) => {
  const canciones = JSON.parse(fs.readFileSync('canciones.json'))
  res.send(canciones)
})

app.delete('/canciones/:id', (req, res) => {
  const { id } = req.params
  const canciones = JSON.parse(fs.readFileSync('canciones.json'))
  const index = canciones.findIndex((song) => song.id == id)
  canciones.splice(index, 1)
  fs.writeFileSync('canciones.json', JSON.stringify(canciones))
  res.send('cancion se elimino con exito')
})

