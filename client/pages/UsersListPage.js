import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '@/actions'

class UsersList extends Component {
  componentWillMount() {
    this.props.fetchUsers()
  }

  renderUsers() {
    return this.props.users.map(user => {
      return <li key={user.id}>{user.name}</li>
    })
  }

  render() {
    return (
      <Fragment>
        <div className="container">
          Here's a big list of users:
          <ul>{this.renderUsers()}</ul>
        </div>
      </Fragment>
    )
  }
}

const loadData = (store) => store.dispatch(fetchUsers())
const mapStateToProps = ({users}) => ({users})

export default {
  loadData,
  component: connect(mapStateToProps, { fetchUsers })(UsersList)
}