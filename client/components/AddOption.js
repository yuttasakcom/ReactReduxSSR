import React, { Component, Fragment } from 'react'

class AddOption extends Component {
  constructor(props) {
    super(props)

    this.state = {
      error: undefined
    }
  }

  handleAddOption = (e) => {
    e.preventDefault()
    
    const option = e.target.elements.option.value.trim()
    const error = this.props.handleAddOption(option)
    
    this.setState(() => ({error}))

    if (!error) {
      e.target.elements.option.value = ''
    }
  }
  
  render() {
    return (
      <Fragment>
        {this.state.error && <p className="add-option-error">{this.state.error}</p>}
        <form className="add-option" onSubmit={this.handleAddOption}>
          <input className="add-option__input" type="text" name="option" />
          <button className="button" type="submit">Add Option</button>
        </form>
      </Fragment>
    )
  }
}

export default AddOption