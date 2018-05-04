import React, { Component } from 'react';
import axios from 'axios';

class PostsContainer extends Component {
  render() {
    return (
      <div>
        {this.state.posts.map((post) => {
          return(
            <div className="tile" key={post.id} >
              <p>{post.date}</p>
              <h4>{post.title}</h4>
              <p>{post.body}</p>
            </div>
          )
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
