import { useParams, Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Badge from 'react-bootstrap/Badge';

const PostDetails = ({ posts, handleDelete }) => {
    const { id } = useParams();
    const post = posts.find(post => (post.id).toString() === id);
    return (
        <main >
            <article className="modal show"
            style={{ display: 'inline', position: 'initial' }}>
            {post &&
                <>
                    <Modal.Header  >
                        <Modal.Title>{post.title}</Modal.Title>
                        
                    </Modal.Header>

                    <Modal.Body>
                        <Badge pill bg="secondary" >{post.datetime}</Badge>
                        <p>
                            {post.body}
                        </p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Link to={`post/${post.id}`}>
                            <Button variant="warning">Edit Post</Button>
                        </Link>
                        <Button variant="danger" onClick={() => handleDelete(post.id)}>
                            Delete Post
                        </Button>
                    </Modal.Footer>
                </>
            }     
                
            {!post &&
                <>
                    <h2>Post Not Found</h2>
                    <p>
                        <Link to='/'>Visit Our Homepage</Link>
                    </p>
                </>
            }
            </article>
        </main>
    )
}

export default PostDetails