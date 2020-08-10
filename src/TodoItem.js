import React from 'react'

class TodoItem extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            text: props.text,
            onClick: props.onClick,
            id: props.id,
            updatedText: '',
            editing: false,
            editClicked: false,
            dotsClicked: false
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

    edit = () => {
        if (!this.state.editClicked) {
            this.setState({
                editClicked: true
            })
        } else {
            this.setState({
                editClicked: false
            })
        }
    }

    // dotsClicked = () => {

    // }
    
    render() {
        return (
            <div className='td-item' id={this.state.id}>
                <div id='item-text-and-button'>
                    <h3 className='td-text'>{this.state.text}</h3>
                    <button id='dots' onClick={this.edit}><span id='button-dots'>...</span></button>
                </div>
                {this.state.editClicked ?
                    <div className='update-form'>
                        <span className='form-top'></span>
                        <form onSubmit={this.changeText}>   
                        <input type='text' 
                            value={this.state.updatedText} 
                            placeholder='Edit Task' 
                            onChange={this.handleChange}/>
                            <button className='btn' type='submit'>save</button>
                            <button id='delete-btn' className='btn' 
                                    onClick={() => this.state.onClick(this.state.id)}>delete</button>
                        </form>
                    </div>
                : null}
            </div>
        )
    }
}

export default TodoItem
