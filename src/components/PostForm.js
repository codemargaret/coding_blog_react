import React, { Component } from 'react';
import axios from 'axios';

class PostForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: this.props.post.date,
      title: this.props.post.title,
      body: this.props.post.body
    }
  }

  render() {
    return (
      <div>
        <form onBlur={this.handleBlur}>
          <input className='input' type="datetime" name="date" placeholder='Enter the Date'
          value={this.state.date} onChange={this.handleInput}  />
          <input className='input' type="text" name="title" placeholder='Enter a Title'
          value={this.state.title} onChange={this.handleInput}  />
          <textarea className='input' name="body" placeholder='Write your post here'
          value={this.state.body} onChange={this.handleInput} ></textarea>
        </form>
      </div>
    );
  }

  handleInput = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleBlur = () => {
    const post = {
      date: this.state.date,
      title: this.state.title,
      body: this.state.body
    }

    axios.put(
      `http://localhost:3001/posts/${this.props.post.id}`,
      {
        post: post
      })
    .then(response => {
      this.props.updatePost(response.data)
    })
    .catch(error => console.log(error))
  }
}

export default PostForm
