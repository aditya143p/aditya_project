import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { myproductdataredux } from './Store/DetailSlice';
import Spinner from 'react-bootstrap/Spinner';
export const Categorydata = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [item, setItem] = useState([]);
    const data = useSelector((state) => state.category);

    console.log("Selected Category URL:", data);

    useEffect(() => {
        if (data) {
            fetchCategoryData();
        }
    }, [data]);

    const fetchCategoryData = async () => {
        try {
            const response = await fetch(data);
            const result = await response.json();
            console.log("Fetched Products:", result.products);
            setItem(result.products || []);
        } catch (error) {
            console.error("Error fetching category data:", error);
        }
    };

    const onBuyNow = (element) => {
        dispatch(myproductdataredux(element));
        navigate('/detail');
    };

    return (
        <div className="container mt-4">
            {/* Back Button */}
            <Button variant="secondary" onClick={() => navigate('/category')} className="mb-4">
                ← Back to Categories
            </Button>

            {/* Product Listing */}
            <Row>
                {item.length > 0 ? (
                    item.map((element) => (
                        <Col md={4} className="mb-4" key={element.id}>
                            <Card className="shadow-lg h-100">
                                <Card.Img 
                                    variant="top" 
                                    src={element.thumbnail} 
                                    className="p-3 rounded"
                                    style={{ maxHeight: '250px', objectFit: 'cover' }} 
                                />
                                <Card.Body>
                                    <Card.Title className="fw-bold">{element.title}</Card.Title>
                                    <Card.Text className="text-muted">
                                        {element.description || "No description available."}
                                    </Card.Text>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item><b>Price:</b> ₹{element.price}</ListGroup.Item>
                                    <ListGroup.Item><b>Stock:</b> {element.stock}</ListGroup.Item>
                                    <ListGroup.Item>
                                        <b>Availability:</b> {element.availabilitystatus || "Unknown"}
                                    </ListGroup.Item>
                                </ListGroup>
                                <Card.Body className="text-center">
                                    <Button 
                                        variant="primary" 
                                        className="w-100"
                                        onClick={() => onBuyNow(element)}
                                    >
                                        🛍 Buy Now
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                ) : (
                  <div className="d-flex justify-content-center align-items-center w-100">
                  <Spinner animation="border" variant="primary" />
              </div>
                )}
            </Row>
        </div>
    );
};
