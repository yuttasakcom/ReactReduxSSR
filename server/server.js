import 'babel-polyfill'
import express from 'express'
import proxy from 'express-http-proxy'
import path from 'path'
import renderer from './helpers/renderer'
import createStore from './helpers/createStore'
import { matchRoutes } from 'react-router-config'
import Routes from '@/routes'

const app = express()
const port = process.env.PORT || 8000

app.use('/api',
  proxy('http://localhost:3000', {
    proxyReqOptDecorator(opts) {
      opts.headers['x-forwarded-host'] = `localhost:${port}`
      return opts
    }
  })
)

app.use(express.static('public'))
app.get('*', (req, res) => {
  const store = createStore(req)
  
  const promises = matchRoutes(Routes, req.path)
    .map(({route}) => {
      return route.loadData ? route.loadData(store) : null
    })

  Promise.all(promises)
    .then(() => {
      res.send(renderer(req, store))
    })
})

app.listen(port, err => {
  if (err) throw err

  console.log(`Server running at port:${port}`)
})