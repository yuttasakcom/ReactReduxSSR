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
        Here's a big list of users:
        <ul>{this.renderUsers()}</ul>
      </Fragment>
    )
  }
}

const mapStateToProps = ({users}) => ({users})
export default connect(mapStateToProps, { fetchUsers })(UsersList)