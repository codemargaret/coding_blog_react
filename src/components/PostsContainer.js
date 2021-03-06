import React, { Component } from 'react';
import Post from './Post';
import PostForm from './PostForm';
import axios from 'axios';
import update from 'immutability-helper';

class PostsContainer extends Component {
  render() {
    return (
      <div>
        <button className="newPostButton"
          onClick={this.addNewPost}>
          New Post
        </button>
        <span className="notification">
          {this.state.notification}
        </span>
        {this.state.posts.map((post) => {
          if (this.state.editingPostId === post.id) {
            return(<PostForm post={post} key={post.id}
              updatePost={this.updatePost}
              resetNotification={this.resetNotification} />)
          } else {
            return(<Post post={post} key={post.id}
              onClick={this.enableEditing}
              onDelete={this.deletePost} />)
          }
        })}
      </div>
    )
  }

  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      editingPostId: null,
      notification: ''
    }
  }

  componentDidMount() {
    axios.get('https://code-blog-rails.herokuapp.com/posts.json')
    .then(response => {
      this.setState({posts: response.data})
    })
    .catch(error => console.log(error))
  }

  addNewPost = () => {
    axios.post(
      'https://code-blog-rails.herokuapp.com/posts',
      { post:
        {
          title: '',
          body: ''
        }
      }
    )
    .then(response => {
      const posts = update(this.state.posts, {
        $splice: [[0, 0, response.data]]
      })
      this.setState({
        posts: posts,
        editingPostId: response.data.id
      })
    })
    .catch(error => console.log(error))
  }

  updatePost = (post) => {
    const postIndex = this.state.posts.findIndex(x => x.id === post.id)
    const posts = update(this.state.posts, {
      [postIndex]: { $set: post }
    })
      this.setState({posts: posts,
      notification: 'Your changes have been saved.'
    })
  }

  resetNotification = () => {
    this.setState({notification: ''})
  }

  enableEditing = (id) => {
    this.setState({editingPostId: id})
  }

  deletePost = (id) => {
    axios.delete(`https://code-blog-rails.herokuapp.com/posts/${id}`)
    .then(response => {
      const postIndex = this.state.posts.findIndex(x => x.id === id)
      const posts = update(this.state.posts, { $splice: [[postIndex, 1]]})
      this.setState({posts: posts})
    })
    .catch(error => console.log(error))
  }
}

export default PostsContainer;
