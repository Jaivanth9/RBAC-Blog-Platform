import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { getUser } from '../auth';

const SinglePost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const token = localStorage.getItem('token');
  const user = getUser();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`/api/posts/${id}`);
        setPost(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchPost();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/posts/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert('Post deleted');
      navigate('/');
    } catch (err) {
      alert('Deletion failed');
    }
  };

  if (!post) return <p className="text-center mt-5">Loading post...</p>;

  const isAdmin = user?.role === 'admin';

  return (
    <div className="container mt-4">
      <h2>{post.title}</h2>
      <p><strong>By:</strong> {post.author?.name || 'Unknown'}</p>
      <p><strong>Posted:</strong> {new Date(post.createdAt).toLocaleString()}</p>
      <hr />
      <p>{post.content}</p>

      {isAdmin && (
        <div className="mt-3">
          <Link to={`/edit/${post._id}`} className="btn btn-warning me-2">Edit</Link>
          <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default SinglePost;
