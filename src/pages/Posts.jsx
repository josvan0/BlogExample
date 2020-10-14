import React from 'react';
import axios from 'axios';

import './Posts.scss';
import Post from '../components/Post';
import { postsUrl } from '../helpers/jsonPlaceholderHelper';

class Posts extends React.Component {
    constructor() {
        super();
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        axios.get(postsUrl())
        .then(response => {
            this.setState({
                posts: response.data
            });
        })
        .catch(e => console.error(e));
    }

    render() {
        const postList = this.state.posts.map(post => <Post />);
        return (
            <div>
                <h2>Posts</h2>
                {postList}
            </div>
        );
    }
}

export default Posts;
