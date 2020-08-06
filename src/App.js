import React from 'react'

class TodoList extends React.Component {
  constructor () {
    super()
    this.state = {
      todos: [],
      currentToDo: ''
    }
  }

  render() {
    return (
      <div className='container'>
        <form>
            <label htmlFor='taskName'>Task:</label>
            <input type='text' name='taskName' placeholder='Enter New Task'/>
            <button type='submit' >Add Task</button>
        </form>
      </div>
    )
  }
}

export default TodoList
