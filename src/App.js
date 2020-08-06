import React from 'react'

class TodoList extends React.Component {
  constructor () {
    super()
    this.state = {
      todos: [],
      currentToDo: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.addItem = this.addItem.bind(this)
  }

  handleChange(event) {
    this.setState({
      currentToDo: event.target.value
    })
  }

  addItem(event) {
    event.preventDefault()
    this.setState(prevState => {
      const updatedTodos = prevState.todos.concat(this.state.currentToDo)
      return {
        todos: updatedTodos,
        currentToDo: ''
      }
    })
  }

  render() {
    const todoListElements = this.state.todos.map(td => <li key={this.state.todos.indexOf(td)}>{td}</li>)
    return (
      <div className='container'>
        <form onSubmit={this.addItem}>
            <label htmlFor='taskName'>Task:</label>
            <input type='text' name='taskName' value={this.state.currentToDo} placeholder='Enter New Task' onChange={this.handleChange}/>
            <button type='submit'>Add Task</button>
        </form>
        <ul>
          {todoListElements}
        </ul>
      </div>

    )
  }
}

export default TodoList
