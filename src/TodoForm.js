import React from 'react'

const TodoForm = (props) => {
    return (
        <div className='todo-form'>
            <form onSubmit={()=> props.onSubmit}>
                <label htmlFor='taskName'>Task:</label>
                <input type='text' name='taskName' value={props.currentToDo} placeholder='Enter New Task' onChange={() => props.onChange}/>
                <button type='submit'>Add Task</button>
            </form>
        </div>
    )
}

export default TodoForm
