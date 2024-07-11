import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useStoreState, useStoreActions } from 'easy-peasy';

const Search = () => {

    const searchClick = useStoreActions((actions) => actions.searchClick);

    const search = useStoreState((state) => state.search);
    const setSearch = useStoreActions((actions) => actions.setSearch);

    const handleSearchClick =  () => {
        searchClick();
    }
    
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