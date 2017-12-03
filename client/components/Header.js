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
      <a className="btn btn-danger" href="/api/logout">Logout</a>
    ) : (
      <a className="btn btn-success" href="/api/auth/google">Login</a>
    )
  
    return (
      <Fragment>
        <header>
          <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container">
              <Link className="navbar-brand" to="">React Redux SSR</Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
        
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/users">Users</Link>
                  </li>
                </ul>
                { authButton }
              </div>
            </div>
          </nav>
        </header>
      </Fragment>
    )
  }
}

const mapStateToProps = ({ auth }) => ({ auth })

export default connect(mapStateToProps, { fetchCurrentUser })(Header)