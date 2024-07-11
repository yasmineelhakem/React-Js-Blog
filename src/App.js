import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Layout.js';
import Home from './Home';
import About from './About';
import AddPost from './AddPost';
import PostDetails from './PostDetails';
import EditPost from './EditPost';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import api from './api/posts';
import { useStoreActions } from 'easy-peasy';

function App() {

  const setPosts = useStoreActions((actions) => actions.setPosts);
  /*
  const [posts, setPosts] = useState([])
  const [search, setSearch] = useState('')
  const [postTitle, setPostTitle] = useState('')
  const [postBody, setPostBody] = useState('')
  const [editPostTitle, setEditPostTitle] = useState('')
  const [editPostBody, setEditPostBody] = useState('')
  const navigate = useNavigate();*/

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
  },[])

  return (
    <Routes>
    <Route path="/" element={<Layout  />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="post">
          <Route index element={<AddPost />} />
          <Route path=":id/edit" element={<EditPost />} />
          <Route path=":id" element={<PostDetails />}  />
        </Route>
    </Route>
  </Routes>
  );
}

export default App;
