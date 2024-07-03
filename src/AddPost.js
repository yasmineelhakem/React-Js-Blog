import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function AddPost({postTitle, setPostTitle, postBody, setPostBody, handleSubmit}) {
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