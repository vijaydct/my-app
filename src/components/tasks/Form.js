import React from 'react'
import PropTypes from 'prop-types'

class Form extends React.Component {
    constructor() {
        super()
        this.state = {
            id: '',
            title: '',
            completedDate: '',
            status: false
        }
    }

    handleChange= (e) =>{
        console.log(e.target.name, e.target.value)
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    // for in- when a prop is inside a var we use []

    handleStatusChange = (e) => {
        const status= e.target.checked
        this.setState({status})
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        const formData = {
            id: this.state.id,
            title: this.state.title,
            status: this.state.status,
            completedDate: this.state.completedDate
        }

        this.props.handleAddTask(formData)
        this.setState({id: '', title: '', status: false, completedDate: ''})
    }

    render(){
        // one event handler for all events, for that, we need to introduce 'name' prop. then we need to assign the state value to the 'name' prop.
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Id</label>
                    <input 
                        type="number"
                        name="id" 
                        value={this.state.id} 
                        onChange={this.handleChange}  
                    /> <br/>

                    <label>title</label>
                    <input 
                        type="text" 
                        name="title"
                        value={this.state.title} 
                        onChange={this.handleChange} 
                        required={true} 
                    /> <br/>

                    <label>status</label>
                    <input 
                        type="checkbox" 
                        checked={this.state.status} 
                        onChange={this.handleStatusChange}
                    /> <br/>
                    {
                        this.state.status && (
                            <div>
                                <label>completed date</label>
                                <input 
                                    type="date"
                                    name="completedDate"
                                    value={this.state.completedDate} 
                                    onChange={this.handleChange}
                                /> <br/>
                            </div>
                            )
                    }

                    <input type="submit" value="add task"/>
                </form>
            </div>
        )
    }
}

Form.propTypes = {
    handleAddTask: PropTypes.func.isRequired
}

export default Form