import React from 'react'
import TodoItem from './TodoItem'

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
    const todoListElements = this.state.todos.map(td => <TodoItem key={this.state.todos.indexOf(td)} text={td} />)
    return (
      <div className='container'>
        <form onSubmit={this.addItem}>
            <label htmlFor='taskName'>Task:</label>
            <input type='text' name='taskName' value={this.state.currentToDo} placeholder='Enter New Task' onChange={this.handleChange}/>
            <button type='submit'>Add Task</button>
        </form>
        <div className='todo-list'>
          {todoListElements}
        </div>
      </div>

    )
  }
}

export default TodoList
