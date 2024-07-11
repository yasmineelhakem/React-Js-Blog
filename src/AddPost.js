import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { format } from 'date-fns';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { useNavigate } from 'react-router-dom';


function AddPost() {

  const posts = useStoreState((state) => state.posts);
  const postTitle = useStoreState((state) => state.postTitle);
  const postBody = useStoreState((state) => state.postBody);

  const savePost = useStoreActions((actions) => actions.savePost);

  const setPostTitle = useStoreActions((actions) => actions.setPostTitle);
  const setPostBody = useStoreActions((actions) => actions.setPostBody);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? (parseInt(posts[posts.length - 1].id) + 1) : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const myNewPost = { id, title:postTitle,datetime:datetime, body:postBody };
    savePost(myNewPost);
    navigate('/');
    
  }

  return (
    <main>
    <Form >
      <h2>Add a New Post:</h2>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" 
                      placeholder="Type the title of the new post" 
                      required
                      id="postTitle"
                      value={postTitle}
                      onChange={(e) => setPostTitle(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Post</Form.Label>
        <Form.Control as="textarea" 
                      rows={5}
                      id="postBody"
                      value={postBody}
                      onChange={(e) => setPostBody(e.target.value)}/>
        </Form.Group>
      <Button variant="warning" onClick={handleSubmit}>Submit</Button>
    </Form>
    </main>
  );
}

export default AddPost;