import React from 'react'
import axios from 'axios'

class PostList extends React.Component {

    constructor () {
        super()
        this.state = {
            posts: []
        }
    }

    render() {
        return (
            <div>
                <h3>Listing posts - {this.state.posts.length}</h3>
            </div>
        )
    }
}

export default PostList