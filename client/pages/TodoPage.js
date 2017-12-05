import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { fetchTodos } from '@/actions'

class TodoPage extends Component {
  componentDidMount() {
    this.props.fetchTodos()
  }

  renderTodos() {
    return this.props.todos.map(todo => {
      return <li key={todo.id}>{todo.content}</li>
    })
  }

  render() {
    return (
      <Fragment>
        <div className="container">
          Here's a big list of todos:
          <ul>{this.renderTodos()}</ul>
        </div>
      </Fragment>
    )
  }
}

const loadData = store => store.dispatch(fetchTodos())

const mapStateToProps = ({todos}) => ({todos})

export default {
  loadData,
  component: connect(mapStateToProps, { fetchTodos })(TodoPage)
}