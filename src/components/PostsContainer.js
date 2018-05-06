import React, { Component } from 'react';
import Post from './Post'
import axios from 'axios';

class PostsContainer extends Component {
  render() {
    return (
      <div>
        {this.state.posts.map((post) => {
          return(<Post post={post} key={post.id} />)
        })}
      </div>
    )
  }

  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/posts.json')
    .then(response => {
      console.log(response)
      this.setState({posts: response.data})
    })
    .catch(error => console.log(error))
  }
}

export default PostsContainer;
