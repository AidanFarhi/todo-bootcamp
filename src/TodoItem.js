import React from 'react'

const TodoItem = (props) => {
    return (
        <div className='td-item' id={props.id}>
            <p>{props.text}</p>
            <button onClick={() => props.onClick(props.id)}>Delete</button>
            <button >Update</button>
        </div>
    )
}

export default TodoItem
