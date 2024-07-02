import './index.css';
import Layout from './Layout.js';
import Home from './Home';
import About from './About';
import Post from './Post';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="post" element={<Post />} />
      <Route path="about" element={<About />} />
    </Route>
  </Routes>
  );
}

export default App;
