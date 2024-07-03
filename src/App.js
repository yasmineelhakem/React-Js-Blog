import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Layout.js';
import Home from './Home';
import About from './About';
import AddPost from './AddPost';
import PostDetails from './PostDetails';
import EditPost from './EditPost';
import { Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import api from './api/posts';

function App() {

  const [posts, setPosts] = useState([])
  const [search, setSearch] = useState('')
  const [postTitle, setPostTitle] = useState('')
  const [postBody, setPostBody] = useState('')
  const [editPostTitle, setEditPostTitle] = useState('')
  const [editPostBody, setEditPostBody] = useState('')
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get('/posts');
        setPosts(response.data);
      } catch (err) {
        if (err.response) {
          // Not in the 200 response range 
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    }

    fetchPosts();
  }, [])

  const handleDelete = async (id) => {
    try{
      await api.delete(`/posts/${id}`);
      const listPosts = posts.filter((item) => item.id !== id);
      setPosts(listPosts);
      navigate(-1);
    }catch(err){
      console.log(`Error deleting post: ${err.message}`);
    }
  }

  const handleSearchClick = async () => {
    try{
      const response = await api.get('/posts');
      const filterBySearch = response.data.filter((post) => {
          if (((post.body).toLowerCase().includes(search.toLowerCase())) || (((post.title).toLowerCase()).includes(search.toLowerCase()))) { 
            return post; }
      })
      setPosts(filterBySearch);
   }catch(err){
    console.log(`Error filtering posts: ${err.message}`);
   }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? (parseInt(posts[posts.length - 1].id) + 1) : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const myNewPost = { id, title:postTitle,datetime:datetime, body:postBody };
    try{
      const response = await api.post('/posts', myNewPost);  
      const listPosts = [...posts, response.data];
      setPosts(listPosts);
      setPostTitle('');
      setPostBody('');
      navigate('/');
    }catch(err){
      console.log(`Error adding post: ${err.message}`);
    }
  }

  const handleEdit = async (id) => {
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const editedPost = { id, title:editPostTitle,datetime:datetime, body:editPostBody };
    try{
      const response = await api.put(`/posts/${id}`, editedPost);  
      setPosts(posts.map(post => post.id === id ? { ...response.data } : post));
      setEditPostTitle('');
      setEditPostBody('');
      navigate('/');
    }catch(err){
      console.log(`Error adding post: ${err.message}`);
    }
  }

  return (
    <Routes>
    <Route path="/" element={<Layout search={search} setSearch={setSearch} handleSearchClick={handleSearchClick} />}>
      <Route index element={<Home posts={posts}/>} />
      <Route path="about" element={<About />} />
      <Route path="post">
          <Route index element={<AddPost postTitle={postTitle}
                                         setPostTitle={setPostTitle}
                                         postBody={postBody}
                                         setPostBody={setPostBody}
                                         handleSubmit={handleSubmit}/>} />
          <Route path=":id/edit" element={<EditPost
              posts={posts}
              handleEdit={handleEdit}
              editPostTitle={editPostTitle}
              setEditPostTitle={setEditPostTitle}
              editPostBody={editPostBody}
              setEditPostBody={setEditPostBody}
            />} />
          <Route path=":id" element={<PostDetails 
            posts={posts}
            handleDelete={handleDelete}
          />}  />
        </Route>
    </Route>
  </Routes>
  );
}

export default App;
