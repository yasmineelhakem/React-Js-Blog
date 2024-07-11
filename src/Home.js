import React from 'react';
import Post from './Post';
import { useStoreState } from 'easy-peasy';


const Home = () => {

  const posts = useStoreState((state) => state.posts);

  return (
    <main className="main">
      {posts.length ? (
        posts.map(post => <Post key={post.id} post={post} />)
    ):(
        <div>
            <h1>No posts yet.</h1>
            <p>Please add some posts by clicking on the 'Post' button.</p>
        </div>
      )}
    </main>
  );
};

export default Home;
