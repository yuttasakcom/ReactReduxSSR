import React from 'react'
import { Route } from 'react-router-dom'
import Home from '@/pages/Home'
import UsersList from '@/pages/UsersList'

export default () => {
  return (
    <div>
      <Route exact path='/' component={Home} />
      <Route exact path='/users' component={UsersList} />
    </div>
  )
}