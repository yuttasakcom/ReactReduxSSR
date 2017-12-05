import React from 'react'
import TodoPage from '@/pages/TodoPage'
import App from '@/App'

export default [
  {
    ...App,
    routes: [
      {
        ...TodoPage,
        path: '/',
      }
    ]
  }
]