import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AllPosts = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const res = await axios.get('/api/posts');
      setPosts(res.data);
    } catch (err) {
      console.error('Error fetching posts:', err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="container mt-4">
      <h2>All Blog Posts</h2>
      <div className="list-group">
        {posts.map((post) => (
          <Link
            key={post._id}
            to={`/post/${post._id}`}
            className="list-group-item list-group-item-action"
          >
            <h5>{post.title}</h5>
            <p>By {post.author?.name || 'Unknown'} - {new Date(post.createdAt).toLocaleString()}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllPosts;
