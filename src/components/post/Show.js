import React from 'react'
import axios from 'axios'

class PostShow extends React.Component {
    constructor () {
        super()
        this.state = {
            user: {},
            post: {},
            comments: []
        }
    }

    render() {
        return (
            <div>
                <p>Title</p>
                <p>body</p>
                <p>Username</p>
                <p>Comments</p>
            </div>
        )
    }
}

export default PostShow