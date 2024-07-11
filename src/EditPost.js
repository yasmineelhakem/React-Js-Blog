import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { format } from 'date-fns';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { useNavigate } from 'react-router-dom';


const EditPost = () => {

    const { id } = useParams();
    //const post = posts.find(post => (post.id).toString() === id);

    const editPostTitle = useStoreState((state) => state.editPostTitle);
    const editPostBody = useStoreState((state) => state.editPostBody);

    const editPost = useStoreActions((actions) => actions.editPost);
    const setEditPostTitle = useStoreActions((actions) => actions.setEditPostTitle);
    const setEditPostBody = useStoreActions((actions) => actions.setEditPostBody);

    const getPostById = useStoreState((state) => state.getPostById);
    const post = getPostById(id);

    const navigate = useNavigate();

    useEffect(() => {
        if (post) {
            setEditPostTitle(post.title);
            setEditPostBody(post.body);
        }
    }, [post, setEditPostTitle, setEditPostBody])


    const handleEdit =  (id) => {
        const datetime = format(new Date(), 'MMMM dd, yyyy pp');
        const editedPost = { id, title:editPostTitle,datetime:datetime, body:editPostBody };
        editPost(editedPost);
        navigate('/');
       
    }

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