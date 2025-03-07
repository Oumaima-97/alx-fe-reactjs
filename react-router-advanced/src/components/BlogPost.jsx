// src/components/BlogPost.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams(); // Get the id from the URL

  // Simulate fetching blog post data using the `id`
  // In a real-world scenario, you would fetch this from an API or state management
  const blogPostData = {
    1: { title: "First Post", content: "This is the first blog post." },
    2: { title: "Second Post", content: "This is the second blog post." },
    // Add more posts as needed
  };

  const post = blogPostData[id];

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default BlogPost;
