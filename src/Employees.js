import React from 'react'
import EmployeesTable from './EmployeesTable'
import EmployeeForm from './EmployeesForm'

class Employees extends React.Component{ // parent component
    constructor(){
        super()
        this.state = {
            employees: [
                        { id: 1, name: 'arjun', email: 'arjun@gmail', gender: 'male', department: 'tech'},
                        { id: 2, name: 'sruthi', email: 'sruthi@gmail', gender: 'female', department: 'tech' },
                        { id: 3, name: 'deepa', email: 'deepa@gmail', gender: 'female', department: 'hr' },
                        { id: 4, name: 'jobin', email: 'jobin@gmail', gender: 'male', department: 'facility' },
                    ]
        }
    }

    removeEmployee = (id) => {
        const confirm = window.confirm('Are you sure?')
        if(confirm){
            this.setState((prevState) => {
                return {
                    employees: prevState.employees.filter((ele) => ele.id !== id)
                }
            })
        }
    }

    handleAddEmployee = (formData) => {
        this.setState((prevState) => {
            return {
                employees: prevState.employees.concat(formData)
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Listing Employees- {this.state.employees.length} </h1>
                <EmployeesTable data={this.state.employees} removeEmployee= {this.removeEmployee}/>
                <EmployeeForm addEmployee={this.handleAddEmployee}/>
            </div>
        )
    }
}

export default Employees