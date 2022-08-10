import React from  'react'
import axios from 'axios'
import moment from 'moment'
import PropTypes from 'prop-types'
import { MdDelete } from 'react-icons/md'
import { AiFillEdit } from 'react-icons/ai'
import { GrUpdate } from 'react-icons/gr'


class MessageItem extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            body : this.props.body,
            toolTip : false,
            editMode : false
        }
    }

    handleRemove = () => {
        const removeConfirm = window.confirm('Are you sure?')
        if (removeConfirm) {
            axios.delete(`http://localhost:3033/messages/${this.props.id}`)
            .then((response) => {
                const message = response.data
                this.props.removeMessage(message.id)

            })
            .catch((err) => {
                alert(err.message)
            })
        }
    }

    handleEdit = () => {
        this.setState((prevState) => {
            return {
                editMode : !prevState.editMode
            }
        })
    }

    handleChangeBody = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleUpdate = (e) => {
        console.log('upadate')
        e.preventDefault()
        const formData = {
            body : this.state.body,
            createdAt : new Date()
        }
        axios.put(`http://localhost:3033/messages/${this.props.id}`, formData)
            .then((response) => {
                const message = response.data
                console.log('message', message)
                this.props.updateMessage(message)
                this.setState((prevState) => {
                    return {
                        editMode : !prevState.editMode
                    }
                })
            })
    }

    handleMouseOver = () => {
         this.setState({toolTip : true})
    }

    handleMouseOut = () => {
        this.setState({toolTip : false})
    }

    render() {
        return (
            <div>
                {
                    this.state.editMode ? (
                        <form onSubmit={this.handleSubmit}>
                            <input
                                type="text"
                                value={this.state.body}
                                onChange={this.handleChangeBody}
                                name="body"
                            />
                        </form>
                    )   : <p>{this.props.body}</p>
                }
                <small onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>{this.state.toolTip ? moment(this.props.createdAt).format('MMMM Do YYYY, h:mm:ss a') : moment(this.props.createdAt).fromNow()}</small>
                <button onClick={this.handleRemove}><MdDelete/></button>
                <button onClick={this.state.editMode ? this.handleUpdate : this.handleEdit }>{this.state.editMode ? <GrUpdate /> : <AiFillEdit />}</button>
                <hr />
            </div>
        )
    }
}

MessageItem.propTypes = {
    id : PropTypes.number.isRequired,
    body : PropTypes.string.isRequired,
    removeMessage : PropTypes.func.isRequired,
    createdAt : PropTypes.string.isRequired,
    updateMessage : PropTypes.func.isRequired
}

export default MessageItem