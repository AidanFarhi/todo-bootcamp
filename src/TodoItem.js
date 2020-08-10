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

    dotsClicked = () => {
        this.setState(prevState => {
            return {
                dotsClicked: !prevState.dotsClicked
            }
        })
    }
    
    render() {
        return (
            <div className='td-item' id={this.state.id}>
                <div id='item-text-and-button'>
                    <h3 className='td-text'>{this.state.text}</h3>
                    <button id='dots' onClick={this.dotsClicked}><span id='button-dots'>...</span></button>
                </div>
                {/* This is where the edit and delete button will go */
                this.state.dotsClicked ? 
                    <div className='edit-delete-btns'>
                        <button 
                            id='delete-btn' 
                            className='btn' 
                            onClick={() => this.state.onClick(this.state.id)}>
                            delete
                        </button>
                        <br/>
                        <button id='edit-btn' className='btn' onClick={this.edit}>edit</button>
                    </div> 
                : null}
                {this.state.editClicked ?
                    <div className='update-form'>
                            <form onSubmit={this.changeText}>   
                            <input 
                                type='text' 
                                value={this.state.updatedText} 
                                placeholder='Edit Task' 
                                onChange={this.handleChange}
                            />
                            <button id='save-btn' className='btn' type='submit'>save</button>
                        </form>
                    </div>
                : null}
            </div>
        )
    }
}

export default TodoItem
