import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { fetchTodos, addTodo, deleteTodo, deleteAllTodo } from '@/actions'

import Action from '@/components/Action'
import Options from '@/components/Options'
import AddOption from '@/components/AddOption'
import OptionModal from '@/components/OptionModal'

class HomePage extends Component
{
  state = {
    selectedOption: undefined
  }

  handleAddOption = (option) => {
    if (!option) {
      return 'Enter valid value to add item'
    } else if (this.props.todos.indexOf(option) > -1) {
      return 'This option already exists'
    }

    this.props.addTodo(option)
  }

  handlePick = () => {
    let randomNum = Math.floor(Math.random() * this.props.todos.length)
    let option = this.props.todos[randomNum]
    this.setState(() => ({selectedOption: option.content}))
  }

  handleDeleteOption = (optionToRemove) => {
    this.props.deleteTodo(optionToRemove)
  }

  handleDeleteOptions = () => {
    this.props.deleteAllTodo()
  }

  handleClearSelectedOption = () => {
    this.setState(() => ({selectedOption: undefined}))
  }

  render() {
    return (
      <Fragment>
        <div className="container">
          <Action 
            hasOptions={this.props.todos.length > 0}
            handlePick={this.handlePick}
          />

          <div className="widget">
            <Options
              options={this.props.todos}
              handleDeleteOption={this.handleDeleteOption}
              handleDeleteOptions={this.handleDeleteOptions}
            />

            <AddOption
              handleAddOption={this.handleAddOption}
            />
          </div>
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </Fragment>
    )
  }
}

const loadData = store => store.dispatch(fetchTodos())
const mapStateToProps = ({todos}) => ({todos})

export default {
  loadData,
  component: connect(mapStateToProps, { addTodo, deleteTodo, deleteAllTodo })(HomePage)
}