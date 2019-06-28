import React from 'react';
import './App.css';
import posts from './api/posts'
import PostsList from './components/PostsList'

function App() {
  return (
    <div className="App">
      <h1>List of posts</h1>
      <PostsList posts={posts} />
    </div>
  );
}

export default App;
