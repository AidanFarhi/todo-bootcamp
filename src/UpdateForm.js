import React from 'react'

class UpdateForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            onSubmit: props.onSubmit,
            updatedText: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            updatedText: event.target.value
        })
    }

    render() {
        return (
            <div className='update-form'>
                <form onSubmit={this.state.onSubmit}>
                <input type='text' 
                       value={this.state.updatedText} 
                       placeholder='Enter New Task' 
                       onChange={this.handleChange}/>
                    <button type='submit'>Edit</button>
                </form>
            </div>
        )
    }
}

export default UpdateForm
