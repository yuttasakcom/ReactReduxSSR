import React from 'react'
import HomePage from '@/pages/HomePage'
import TodoPage from '@/pages/TodoPage'
import App from '@/App'

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true
      },
      {
        ...TodoPage,
        path: '/todos',
      }
    ]
  }
]