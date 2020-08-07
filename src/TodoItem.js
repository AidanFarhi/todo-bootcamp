import React from 'react'

class TodoItem extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            text: props.text,
            onClick: props.onClick,
            id: props.id,
            updatedText: ''
        }
    }

    changeText = (event) => {
        event.preventDefault()
        this.setState({
            text: this.state.updatedText,
            updatedText: ''
        })
    }  
    
    handleChange = (event) => {
        this.setState({
            updatedText: event.target.value
        })
    }
    
    render() {
        return (
            <div className='td-item' id={this.state.id}>
                <p>{this.state.text}</p>
                <div className='update-form'>
                    <form onSubmit={this.changeText}>
                    <input type='text' 
                        value={this.state.updatedText} 
                        placeholder='Edit Task' 
                        onChange={this.handleChange}/>
                        <button type='submit'>Edit</button>
                    </form>
                </div>
                <button onClick={() => this.state.onClick(this.state.id)}>Delete</button>
            </div>
        )
    }
}

export default TodoItem
