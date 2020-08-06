import React from 'react'

const TodoItem = (props) => {
    return (
        <div className='td-item'>
            <p>{props.text}</p>
            <button onClick={() => props.onClick(props.key)}>Delete</button>
            <button >Update</button>
        </div>
    )
}

export default TodoItem
