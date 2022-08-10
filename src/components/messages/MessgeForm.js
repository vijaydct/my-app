import React from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'


class MessageForm extends React.Component {
    constructor () {
        super()
        this.state = {
            body: ''
        }
    }


    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            body : this.state.body
        }

        axios.post('http://localhost:3033/messages', formData)
        .then((response)=>{
            const formData = response.data
            this.props.addMessage(formData)
            this.setState({body: ''})
        })
        .catch((err)=>{
            console.log(err.message)
            alert(err.message)
        })
    }

    handleChangeText = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    render() {
        return (
            <div>
                <h2>Add Message</h2>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={this.state.body}
                        onChange={this.handleChangeText}
                        name="body"
                    />
                </form>
            </div>
        )
    }
}

MessageForm.propTypes = {
    addMessage : PropTypes.func.isRequired
}

export default MessageForm

// <textarea 
// value={this.state.body}
// onChange={this.handleChangeText}
// name="body"
// >
// </textarea> <br/>
// <input type="submit" />