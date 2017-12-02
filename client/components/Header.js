import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchCurrentUser } from '@/actions'

class Header extends Component {
  componentWillMount() {
    this.props.fetchCurrentUser()
  }

  render() {
    const authButton = this.props.auth ? (
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
}

const mapStateToProps = ({ auth }) => ({ auth })

export default connect(mapStateToProps, { fetchCurrentUser })(Header)