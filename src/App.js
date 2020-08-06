import React from 'react'
import TodoItem from './TodoItem'

class TodoList extends React.Component {
  constructor () {
    super()
    this.state = {
      todos: [],
      currentToDo: '',
      idCount: 0
    }
    this.handleChange = this.handleChange.bind(this)
    this.addItem = this.addItem.bind(this)
    this.delete = this.delete.bind(this)
  }

  handleChange(event) {
    this.setState({
      currentToDo: event.target.value
    })
  }

  addItem(event) {
    event.preventDefault()
    this.setState(prevState => {
      const updatedTodos = prevState.todos.concat(<TodoItem key={prevState.idCount} id={prevState.idCount} text={prevState.currentToDo} onClick={this.delete} />)
      return {
        todos: updatedTodos,
        currentToDo: '',
        idCount: prevState.idCount + 1
      }
    })
  }

  delete(id) {
    console.log(id)
    this.setState(prevState => {
      const updatedTds = prevState.todos.filter(td => td.props.id !== id) 
      return {
        todos: updatedTds
      }
    })
  }

  render() {
    return (
      <div className='container'>
        <form onSubmit={this.addItem}>
            <label htmlFor='taskName'>Task:</label>
            <input type='text' name='taskName' value={this.state.currentToDo} placeholder='Enter New Task' onChange={this.handleChange}/>
            <button type='submit'>Add Task</button>
        </form>
        <div className='todo-list'>
          {this.state.todos}
        </div>
      </div>

    )
  }
}

export default TodoList
