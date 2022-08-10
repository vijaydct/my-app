import React from 'react'
import axios from 'axios'

class UserShow extends React.Component {
    constructor() {
        super()
        this.state = {
            user: {},
            posts: []
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id // this.props.match.params.id which provides by ReactRouterDOM component like <Route path="/users/:id" component={UserShow} />
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => {
            const user = response.data
            this.setState({user})
        })
        // axios.get('https://jsonplaceholder.typicode.com/posts')
        // .then((response) => {
        //     const posts = response.data.filter( (post) => {
        //         console.log('userID', post.userId, this.props.match.params.id)
        //         return post.userId === this.props.match.params.id
        //     })
        //     console.log('posts', posts)
        //     this.setState({posts})
        // })
    }

    render() {
        return (
            <div>
                <h3> user details- {this.props.match.params.id}</h3>
                <p>name- {this.state.user.name}</p>
                <p>email- {this.state.user.email}</p>
            </div>
        )
    }
}

export default UserShow