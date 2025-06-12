import React from 'react';
import { Link } from 'react-router-dom';
import { deletePost } from '../authapi/ApiService';


interface Post {
  id: number;
  title: string;
  description: string;
  author: string;
  category: string;
  image?: string;
  publishDate: string;
}

interface UserPostsProps {
  posts: Post[];
  onPostDeleted: () => void;
}

const UserPosts: React.FC<UserPostsProps> = ({ posts, onPostDeleted }) => {

 const handleDelete = async (postId: number) => {
  try {
    await deletePost(postId); // if this fails, it will throw and jump to catch
    alert('Post deleted successfully');
    onPostDeleted(); // refresh the posts
  } catch (error) {
    console.error('Delete error:', error);
    alert('Error deleting post');
  }
};

  return (
    <div className="blog-list">
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id} className="blog-card" style={{ marginBottom: '1.5rem' }}>
            <img
              src={post.image || 'images/default-post.webp'}
              alt={post.title}
              className="blog-image"
              style={{ maxHeight: '200px', width: '100%', objectFit: 'cover', borderRadius: '0.3rem' }}
            />
            <div className="blog-content" style={{ padding: '1rem' }}>
              <h2>{post.title}</h2>
              <p>{post.description ? post.description.substring(0, 100) : 'No description available'}...</p>
              <p><strong>Category:</strong> {post.category}</p>
              <p><strong>Author:</strong> {post.author}</p>
              <p><strong>Published:</strong> {post.publishDate}</p>

              <div className="d-flex gap-2 mt-3">
                <Link to={`/updatepost/${post.id}`} className="btn btn-primary btn-sm">
                  Update
                </Link>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => {
                    if (window.confirm('Are you sure you want to delete this post?')) {
                      handleDelete(post.id);
                    }
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No posts available.</p>
      )}
    </div>
  );
};

export default UserPosts;
