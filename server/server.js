import 'babel-polyfill'
import express from 'express'
import path from 'path'
import renderer from './helpers/renderer'
import createStore from './helpers/createStore'

const app = express()
const port = process.env.PORT || 3000

app.use(express.static('public'))
app.get('*', (req, res) => {
  const store = createStore()
  res.send(renderer(req, store))
})

app.listen(port, err => {
  if (err) throw err

  console.log(`Server running at port:${port}`)
})