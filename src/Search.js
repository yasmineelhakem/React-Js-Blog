import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const Search = ({ search, setSearch ,handleSearchClick }) => {
    return (

        <Form className="d-flex searchForm">
            <Form.Control
                id='search'
                type="search"
                placeholder="Search Posts"
                className="me-2"
                aria-label="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <Button variant="outline-light" onClick={handleSearchClick}>Search</Button>
        </Form>
    )
}


export default Search