import React from 'react'
import axios from 'axios'
import MessgeForm from  './MessgeForm'
import MessageItem from './MessageItem'


class Messages extends React.Component {
    constructor () {
        super()
        this.state = {
            messages: [],
            isShowmore : false
        }
    }

    componentDidMount() {
        console.log('componentDidMount')
        axios.get('http://localhost:3033/messages')
        .then((response)=>{
            const messages = response.data
            this.setState({messages})
        })
        .catch((err)=>{
            console.log(err.message)
            alert(err.message)
        })
    }

    handleMessage = (formData) => {
        this.setState((prevState) => {
            return {
                messages : prevState.messages.concat(formData)
            }
        })
    }

    handleRemoveMessage = (id) => {
        this.setState((prevState) => {
            return {
                messages : prevState.messages.filter( msg => msg.id !== id)
            }
        })
    }

    handleUpdateMessage = (msg) => {
        this.setState((prevState) => {
            return {
                messages : prevState.messages.map((message) => {
                    if(message.id === msg.id) {
                        return Object.assign({}, message, msg)
                    } else {
                        return Object.assign({}, message)
                    }
                })
            }
        })
    }

    handleShowMore = () => {
        this.setState((prevState) => {
            return {
                isShowmore : !prevState.isShowmore
            }
        })
    }

    render() {
        return (
            <div>
                <h2>My Message Board - {this.state.messages.length}</h2>
                {
                    !this.state.isShowmore ? 
                        this.state.messages.slice(0,5).map((message) => {
                                return <MessageItem
                                            key={message.id}
                                            id={message.id} 
                                            body={message.body} 
                                            createdAt={message.createdAt}
                                            removeMessage={this.handleRemoveMessage}
                                            updateMessage={this.handleUpdateMessage}
                                        />
                        }) : this.state.messages.map((message) => {
                                    return <MessageItem
                                                key={message.id}
                                                id={message.id} 
                                                body={message.body} 
                                                createdAt={message.createdAt}
                                                removeMessage={this.handleRemoveMessage}
                                                updateMessage={this.handleUpdateMessage}
                                            />
                    })
                }
                {!this.state.isShowmore && <button onClick={this.handleShowMore}>show more</button>}
                <MessgeForm addMessage={this.handleMessage} />
            </div>
        )
    }
}

export default Messages

// NOTE: we cant use key prop inside the component. this is just for tracking the react elements