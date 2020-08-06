import React from 'react'
import TodoForm from './TodoForm'

class TodoList extends React.Component {

  render() {
    return (
      <div className='container'>
          <TodoForm />
      </div>
    )
  }
}

export default TodoList
