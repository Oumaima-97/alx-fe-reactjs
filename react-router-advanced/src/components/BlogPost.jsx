// src/components/BlogPost.jsx
import React from "react";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams(); // Get the dynamic `id` parameter from the URL

  return (
    <div>
      <h2>Blog Post {id}</h2>
      {/* Here, you could fetch and display the blog content using the `id` */}
    </div>
  );
};

export default BlogPost;
