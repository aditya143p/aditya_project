import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch } from 'react-redux';
import { myproductdataredux } from './Store/DetailSlice';
import { useNavigate } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
export const Product = () => {
    const [productdata, setProductData] = useState([]);
    const [searchInput, setSearchInput] = useState(localStorage.getItem('search') || ''); // User input
    const [query, setQuery] = useState(localStorage.getItem('search') || ''); // Actual search term
    const [seacrchhistory,setsearchhistrory]=useState([])
    const timestamp = new Date().toLocaleString(); // Get current date & time
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    useEffect(()=>
      {
        let histroydata=localStorage.getItem('searchhistrory')
      
        if(histroydata)
        {
          setsearchhistrory(JSON.parse(histroydata))
          console.log(seacrchhistory)
        }
      },[])
    // Handle input change while typing
    const handleSearchInput = (e) => {
        setSearchInput(e.target.value);
    };
    // Handle search button click
    const handleSearch = () => {
        const newQuery = searchInput.trim(); // Remove spaces
        setQuery(newQuery);
        localStorage.setItem('search', newQuery);
        let newSearchEntry={query:newQuery,  timestamp: new Date().toISOString() }
        let sdata=[...seacrchhistory,newSearchEntry]
        setsearchhistrory(sdata)
        localStorage.setItem('searchhistrory',JSON.stringify(sdata))
    };
    // Fetch data based on the search query
    const fetchData = async () => {
        setLoading(true);
        try {
            const url = query
                ? `https://dummyjson.com/products/search?q=${query}`
                : 'https://dummyjson.com/products';
            const response = await fetch(url);
            const data = await response.json();
            setProductData(data.products || []);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        setLoading(false);
    };
    // Fetch data when the query changes
    useEffect(() => {
        fetchData();
    }, [query]);
    // Handle "Buy Now" button click
    const onBuyNow = (element) => {
        dispatch(myproductdataredux(element));
        navigate('/detail');
    };
    return (
        <>
            {/* Search Bar Section */}
            <div className="d-flex justify-content-center align-items-center mt-4">
                <input
                    value={searchInput}
                    onChange={handleSearchInput}
                    placeholder="🔍 Search product..."
                    className="form-control w-50 p-2"
                    style={{ maxWidth: '400px', borderRadius: '20px' }}
                />
                <button className="btn btn-primary ms-2 px-4 py-2" onClick={handleSearch}>
                    Search
                </button>
            </div>
            {/* Product Grid */}
            <Row className="p-1" style={{"-bs-gutter-x": "0rem;","width":"100%"}}>
                {loading ? (
                    <div className="d-flex justify-content-center align-items-center w-100">
                        <Spinner animation="border" variant="primary" />
                    </div>
                ) : productdata.length > 0 ? (
                    productdata.map((element) => (
                        <Col className="mt-4 d-flex justify-content-center" md={4} key={element.id}>
                            <Card
                                style={{
                                    width: '20rem',
                                    borderRadius: '15px',
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                                    transition: 'transform 0.2s',
                                }}
                                className="p-2 text-center"
                                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                            >
                                <Card.Img
                                    variant="top"
                                    src={element.thumbnail}
                                    alt={element.title}
                                    style={{ height: '200px', objectFit: 'cover', borderRadius: '10px' }}
                                />
                                <Card.Body>
                                    <Card.Title className="fw-bold">{element.title}</Card.Title>
                                    <Card.Text style={{ fontSize: '0.9rem', color: '#555' }}>
                                        {element.description || 'No description available'}
                                    </Card.Text>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item><strong>💰 Price:</strong> ${element.price}</ListGroup.Item>
                                    <ListGroup.Item><strong>📦 Stock:</strong> {element.stock}</ListGroup.Item>
                                </ListGroup>
                                <Card.Body>
                                    <button
                                        className="btn btn-success w-100 py-2"
                                        onClick={() => onBuyNow(element)}
                                    >
                                        🛒 Buy Now
                                    </button>
                                </Card.Body>
                            </Card>
                        </Col>
                ))
                ) : (
                    <p className="text-center mt-4">No products found</p>
                )}
            </Row>
        </>
    );
};
