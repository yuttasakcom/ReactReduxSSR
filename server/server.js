import 'babel-polyfill'
import express from 'express'
import path from 'path'
import renderer from './helpers/renderer'
import createStore from './helpers/createStore'
import { matchRoutes } from 'react-router-config'
import Routes from '@/routes'

const app = express()
const port = process.env.PORT || 3000

app.use(express.static('public'))
app.get('*', (req, res) => {
  const store = createStore()

  matchRoutes(Routes, req.path)
    .map(({route}) => {
      return route.loadData ? route.loadData(store) : null
    })

  res.send(renderer(req, store))
})

app.listen(port, err => {
  if (err) throw err

  console.log(`Server running at port:${port}`)
})