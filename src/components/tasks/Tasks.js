import React from 'react'
import Table from './Table'
import Form from './Form'

class Tasks extends React.Component {
    constructor() {
        super()
        this.state = {
            tasks: []
        }
    }

    handleRemove = (id) => {
        const confirmRemove = window.confirm("Are you sure?")
        if (confirmRemove) {
            this.setState((prevState) => {
                return {
                    tasks: prevState.tasks.filter(task => task.id !== id)
                }
            })
        }
    }

    handleShow = (task) => {

            alert(`id-${task.id}, title- ${task.title}, status- ${task.status}, completed- ${task.completedDate}`)
    }

    handleAddTask = (formdata) => {
        this.setState((prevState)=>{
            return{
                tasks: prevState.tasks.concat(formdata)
            }
        })
    }

    render() {
        return (
            <div>
                <h1> Listing Tasks - {this.state.tasks.length} </h1>
                <Table tasks={this.state.tasks} handleRemove={this.handleRemove} handleShow={this.handleShow}/>

                <h2>Add Task</h2> 
                <Form handleAddTask={this.handleAddTask}/>
            </div>
        )
    }
}

export default Tasks