import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const EditPost = ({posts, handleEdit, editPostBody, setEditPostBody, editPostTitle, setEditPostTitle}) => {

    const { id } = useParams();
    const post = posts.find(post => (post.id).toString() === id);

    useEffect(() => {
        if (post) {
            setEditPostTitle(post.title);
            setEditPostBody(post.body);
        }
    }, [post, setEditPostTitle, setEditPostBody])

    return (

        <main>
             {editPostTitle &&
                <>
            <Form >
            <h2>Edit This Post:</h2>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Edit Title</Form.Label>
                <Form.Control type="text" 
                            placeholder="Type the title of the new post" 
                            required
                            id="postTitle"
                            value={editPostTitle}
                            onChange={(e) => setEditPostTitle(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Edit Post</Form.Label>
                <Form.Control as="textarea" 
                            rows={5}
                            id="postBody"
                            value={editPostBody}
                            onChange={(e) => setEditPostBody(e.target.value)}/>
                </Form.Group>
            <Button variant="warning" onClick={() => handleEdit(post.id)}>Edit</Button>
            </Form>
            </>
            }
            {!editPostTitle &&
                <>
                    <h2>Post Not Found</h2>
                    <p>
                        <Link to='/'>Visit Our Homepage</Link>
                    </p>
                </>
            }

        </main>
  );
}

export default EditPost;