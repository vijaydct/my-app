import React from 'react'
import axios from 'axios' // npm install axios
import { Link } from 'react-router-dom'


class UsersList extends React.Component {
    constructor() {
        super()
        this.state = {
            users: [],
            loading: true
        }
    }

    componentDidMount() { 
        // axios takes only one parameter that is URL. which returns Promise object
        // axios has two attached methods. 1) for handling the success object if responce get success. 2) for handling the error object if responce get failed
        // each method should takes arrow function otherwise if we pass normal function we have to pass bind method also. that is why we are using arr function for simple syntanx.
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{
            const users = response.data
            this.setState({users, loading: false})
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }

    render() {
        // dynamic link concept we apply here
        return (
           <div>
            {
                this.state.loading ? 'loading...' : (
                    <div>
                        <h1>Listing users- {this.state.users.length}</h1>
                        <ul>
                            {
                                this.state.users.map((user)=>{
                                    return (
                                        <li key={user.id}><Link to={`/users/${user.id}`}>{user.name}</Link></li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                )
            }
           </div>
        )
    }
}

export default UsersList