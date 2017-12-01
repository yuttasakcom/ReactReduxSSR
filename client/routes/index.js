import React from 'react'
import Home from '@/pages/Home'
import UsersList from '@/pages/UsersList'

export default [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/users',
    component: UsersList,
  },
]