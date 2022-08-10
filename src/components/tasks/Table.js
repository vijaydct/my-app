import React from 'react'
// npm install prop-types
import PropTypes from 'prop-types'

function Table(props) {
    console.log('props', props)
    return(
        <div>
            <table border="1">
                <thead>
                    <tr>
                        <th>sl no</th>
                        <th> title </th>
                        <th> status </th>
                        <th>completed date</th>
                        <th> action </th>
                    </tr>
                </thead>
                <tbody>
                    {props.tasks.map((task, i) => {
                        return (
                            <tr key={task.id}>
                                <td> {i + 1}</td>
                                <td> {task.title}</td>
                                <td> {task.status ? 'completed' : "ongoing"}</td>
                                <td>{task.status ? task.completedDate : '-'}</td>
                                <td>
                                    <button onClick={() => {
                                        props.handleRemove(task.id)
                                    }}>
                                        remove
                                    </button>
                                    <button onClick={() => {
                                        props.handleShow(task)
                                    }}>
                                        show
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

// Table -> component, propTypes is the property of Table
// Type checking with prop-types is most important for debugging in React. what type of data we are recieving in component from other component via props. we will get to know
Table.propTypes = {
    // PropTypes is the imported component from prop-types
    tasks: PropTypes.array.isRequired,
    handleRemove: PropTypes.func.isRequired,
    handleShow: PropTypes.func.isRequired

}

export default Table