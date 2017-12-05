import React, { Fragment } from 'react'
import { renderRoutes } from 'react-router-config'


import Header from '@/components/Header'
import Action from '@/components/Action'
import Options from '@/components/Options'
import AddOption from '@/components/AddOption'
import OptionModal from '@/components/OptionModal'

const App = ({ route }) => (
  <Fragment>
    <Header />
    { renderRoutes(route.routes) }
  </Fragment>
)

export default {
  component: App
}