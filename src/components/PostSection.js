import React, { useState } from 'react';

const PostSection = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');
  const [newComment, setNewComment] = useState('');
  const [selectedPostId, setSelectedPostId] = useState(null);

  const handlePostChange = (e) => {
    setNewPost(e.target.value);
  };

  const handlePostSubmit = () => {
    if (newPost.trim()) {
      const newPostItem = {
        id: Date.now(),
        content: newPost,
        likes: 0,
        comments: []
      };
      setPosts([newPostItem, ...posts]);
      setNewPost('');
    }
  };

  const handleLikePost = (id) => {
    setPosts(posts.map(post =>
      post.id === id ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  const handleDeletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleAddComment = (postId) => {
    if (newComment.trim() && postId !== null) {
      setPosts(posts.map(post =>
        post.id === postId
          ? { ...post, comments: [...post.comments, newComment] }
          : post
      ));
      setNewComment('');
      setSelectedPostId(null);
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <div className="mb-4">
        <textarea
          value={newPost}
          onChange={handlePostChange}
          placeholder="What's on your mind?"
          className="w-full p-2 border rounded-lg"
        />
        <button
          onClick={handlePostSubmit}
          className="mt-2 p-2 bg-blue-500 text-white rounded-lg"
        >
          Post
        </button>
      </div>
      <div>
        {posts.map(post => (
          <div key={post.id} className="mb-4 p-4 border rounded-lg bg-gray-100">
            <div className="flex justify-between items-center">
              <p className="text-lg">{post.content}</p>
              <button onClick={() => handleDeletePost(post.id)} className="text-red-500">
                Delete
              </button>
            </div>
            <div className="flex items-center mt-2">
              <button
                onClick={() => handleLikePost(post.id)}
                className="bg-blue-200 p-2 rounded-lg"
              >
                Like ({post.likes})
              </button>
              <button
                onClick={() => setSelectedPostId(selectedPostId === post.id ? null : post.id)}
                className="ml-4 bg-gray-200 p-2 rounded-lg"
              >
                {selectedPostId === post.id ? 'Hide Comments' : 'Show Comments'}
              </button>
            </div>
            {selectedPostId === post.id && (
              <div className="mt-4">
                <textarea
                  value={newComment}
                  onChange={handleCommentChange}
                  placeholder="Add a comment..."
                  className="w-full p-2 border rounded-lg mb-2"
                />
                <button
                  onClick={() => handleAddComment(post.id)}
                  className="p-2 bg-blue-700 rounded-lg text-white"
                >
                  Add Comment
                </button>
                <div className="mt-2">
                  {post.comments.map((comment, idx) => (
                    <div key={idx} className="p-2 border-b last:border-b-0">
                      {comment}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostSection;