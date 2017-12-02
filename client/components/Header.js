import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <Fragment>
    <header>
      <h1><Link to="/">Header</Link></h1>
    </header>
  </Fragment>
)

export default Header