import React, { Component } from 'react';

class Post extends Component {
  handleClick = () => {
    this.props.onClick(this.props.post.id)
  }

  render () {
    return(
      <div className="post-block">
        <p onClick={this.handleClick}>
          {this.props.post.date}
        </p>
        <h4 onClick={this.handleClick}>
          {this.props.post.title}
        </h4>
        <p onClick={this.handleClick}>
          {this.props.post.body}
        </p>
      </div>
    )
  }
}

export default Post;
