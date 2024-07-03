import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Badge from 'react-bootstrap/Badge';

const Post = ({ post }) => {
    return (
        <article className="modal show"
        style={{ display: 'inline', position: 'initial' }}>

            <Modal.Header  >
                <Modal.Title>{post.title}</Modal.Title>
                <Badge pill bg="secondary" >{post.datetime}</Badge>
            </Modal.Header>

            <Modal.Body>
                <p>
                    {(post.body).length <= 25
                        ? post.body
                        : `${(post.body).slice(0, 25)}...`}
                </p>
            </Modal.Body>

            <Modal.Footer>
                <Link to={`post/${post.id}`}>
                    <Button variant="warning">View More</Button>
                </Link>
            </Modal.Footer>
       
        </article>
    )
}

export default Post
