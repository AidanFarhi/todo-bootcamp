import React from 'react'

class TodoItem extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            text: props.text,
            onClick: props.onClick,
            id: props.id,
        }
    }
    
    logSelf = () => {
        console.log(this.state.text, this.state.id)
    }

    render() {
        return (
            <div className='td-item' id={this.state.id}>
                <p>{this.state.text}</p>
                <button onClick={() => this.state.onClick(this.state.id)}>Delete</button>
                <button >Update</button>
            </div>
        )
    }

    
}

export default TodoItem
