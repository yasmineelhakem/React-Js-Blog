import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Layout.js';
import Home from './Home';
import About from './About';
import AddPost from './AddPost';
import PostDetails from './PostDetails';
import { Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { format } from 'date-fns';

function App() {

  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "My First Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },
    {
      id: 2,
      title: "My 2nd Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },
    {
      id: 3,
      title: "My 3rd Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },
    {
      id: 4,
      title: "My Fourth Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    }
  ])

  const [search, setSearch] = useState('')
  const [postTitle, setPostTitle] = useState('')
  const [postBody, setPostBody] = useState('')

  const navigate = useNavigate();

  const handleDelete = (id) => {
    const listPosts = posts.filter((item) => item.id !== id);
    setPosts(listPosts);
    navigate(-1); // Go back to the previous page
  }

  const handleSearchClick =() => {
    const filterBySearch = posts.filter((post) => {
        if (((post.body).toLowerCase().includes(search.toLowerCase())) || (((post.title).toLowerCase()).includes(search.toLowerCase()))) { 
          return post; }
    })
    setPosts(filterBySearch);
  }

  const handleSubmit =(e) => {
    e.preventDefault();
    const id = posts.length ? (parseInt(posts[posts.length - 1].id) + 1) : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const myNewPost = { id, title:postTitle,datetime:datetime, body:postBody };
    const listPosts = [...posts, myNewPost];
    setPosts(listPosts);
    setPostTitle('');
    setPostBody('');
    navigate('/');
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
