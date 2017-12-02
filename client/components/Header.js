import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Header = ({ auth }) => {
  console.log(auth)

  const authButton = auth ? (
    <a href="/api/logout">Logout</a>
  ) : (
    <a href="/api/auth/google">Login</a>
  )

  return (
    <Fragment>
      <header>
        <h1><Link to="/">Header</Link></h1>
        <Link to="/users">Users</Link>
        <Link to="/admins">Admins</Link>
        { authButton }
      </header>
    </Fragment>
  )
}

const mapStateToProps = ({ auth }) => ({ auth })

export default connect(mapStateToProps)(Header)