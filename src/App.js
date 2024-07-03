import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Layout.js';
import Home from './Home';
import About from './About';
import Post from './Post';
import PostDetails from './PostDetails';
import { Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';



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

  const navigate = useNavigate();

  const handleDelete = (id) => {
    const listPosts = posts.filter((item) => item.id !== id);
    setPosts(listPosts);
    navigate(-1); // Go back to the previous page
  }

  return (
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home posts={posts}/>} />
      <Route path="post" element={<Post />} />
      <Route path="about" element={<About />} />
      <Route path="post">
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
