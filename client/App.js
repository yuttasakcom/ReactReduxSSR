import React, { Fragment } from 'react'
import { renderRoutes } from 'react-router-config'

import Header from '@/components/Header'

const App = ({ route }) => (
  <Fragment>
    <Header />
    { renderRoutes(route.routes) }
  </Fragment>
)

export default {
  component: App
}