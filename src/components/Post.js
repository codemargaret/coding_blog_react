import React from 'react'

const Post = ({post}) =>
  <div key={post.id}>
    <p>{post.date}</p>
    <h4>{post.title}</h4>
    <p>{post.body}</p>
  </div>

export default Post
