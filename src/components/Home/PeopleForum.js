
import React, { useState } from 'react';

const Forum = () => {
  // Sample initial data
  const [posts, setPosts] = useState([
    { id: 1, title: 'First Post', content: 'Hello, this is my first post!', author: 'User1', replies: [] },
    { id: 2, title: 'Second Post', content: 'This is another post.', author: 'User2', replies: [] }
  ]);

  return (
    <div className='py-20 text-center p-10 text-white container-ml  '>
      <h1 className='mb-10 text-lg md:text-[30px] text-primary'>People's Forum</h1>
      <div className='grid grid-cols-4 gap-4  place-content-center mx-6'>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Forum;

// Post.js


export const Post = ({ post }) => {
  return (
    <div className='bg-white border border-primary text-black rounded-lg p-5   '>
      <h2>{post.title}</h2>
      <h3>by {post.author}</h3>
      <p>{post.content}</p>
      {post.replies.map((reply) => (
        <Reply key={reply.id} reply={reply} />
      ))}
    </div>
  );
};


// Reply.js


export const Reply = ({ reply }) => {
  return (
    <div className='bg-white '>
      <h4>Reply by {reply.author}</h4>
      <p>{reply.content}</p>
    </div>
  );
};

