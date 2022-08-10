import React from 'react'
import PropTypes from 'prop-types'

 // child component to Employees
 function EmployeesTable(props) {
    return (
        <div>
            <table border="1px solid green">
                <thead>
                    <th>sl no</th>
                    <th>name</th>
                    <th>gender</th>
                    <th>email</th>
                    <th>department</th>
                    <th>action</th>
                </thead> 
                <tbody>
                    {props.data.map(function(ele){
                    return <tr key={ele.id}>
                                <td>{ele.id}</td>
                                <td>{ele.name}</td>
                                <td>{ele.gender}</td>
                                <td>{ele.email}</td>
                                <td>{ele.department}</td>
                                <td> <button onClick={() => {
                                    console.log(ele.id)
                                    props.removeEmployee(ele.id)
                                }}> remove </button></td>
                            </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

EmployeesTable.propTypes = {
    removeEmployee: PropTypes.func.isRequired
}


export default EmployeesTable
