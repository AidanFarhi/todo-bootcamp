import React from 'react'
import TodoItem from './TodoItem'

class TodoForm extends React.Component {
    constructor(){
        super()
        this.state = {
            currentToDo: '',
            todos: [],
            idCount: 0,
        }
    }

    handleChange = (event) => {
        this.setState({
          currentToDo: event.target.value
        })
    }
    
    addItem = (event) => {
        event.preventDefault()
        this.setState(prevState => {
        const updatedTodos = prevState.todos.concat(<TodoItem key={prevState.idCount} id={prevState.idCount} text={prevState.currentToDo} onClick={this.delete}/>)
            return {
                todos: updatedTodos,
                currentToDo: '',
                idCount: prevState.idCount + 1
            }
        })
    }

    delete = (id) => {
        this.setState(prevState => {
        const updatedTds = prevState.todos.filter(td => td.props.id !== id) 
            return {
                todos: updatedTds
            }
        })
    }

    render() {
        return (
            <div className='todo-form'>
                <form onSubmit={this.addItem}>
                    <h3>- Task -</h3>
                    <input type='text' value={this.state.currentToDo} placeholder='Enter New Task' onChange={this.handleChange}/>
                    <button type='submit'>Add Task</button>
                </form>
                <div className='todo-list'>
                    {this.state.todos}
                </div>
            </div>
        )
    }  
}

export default TodoForm
