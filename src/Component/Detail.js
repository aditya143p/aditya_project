import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector, useDispatch } from 'react-redux';
import { addtocart } from './Store/CartSlice';
import { useNavigate } from 'react-router-dom';

export const Detail = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const data = useSelector((state) => state.detail);
       console.log(data,"data")
    const addToCart = (data) => {

         let activeuser=JSON.parse(localStorage.getItem('activeuser'))
        if(activeuser!=null )
        {
            dispatch(addtocart(data));
            navigate('/cart');
        }
        else
        {
            navigate('/login')
        }
     
    };

    return (
        <Container className="mt-4">
            {/* Back Button */}
            <Button variant="secondary" onClick={() => navigate(-1)} className="mb-3">
                ← Back
            </Button>

            {data && (
                <Row className="align-items-center">
                    {/* Product Image */}
                    <Col md={5} className="text-center">
                        <Card className="shadow-lg">
                            <Card.Img 
                                variant="top" 
                                src={data.thumbnail} 
                                className="img-fluid p-3 rounded"
                                style={{ maxHeight: '400px', objectFit: 'cover' }}
                            />
                        </Card>
                    </Col>

                    {/* Product Details */}
                    <Col md={7}>
                        <Card className="p-4 shadow-lg">
                            <Card.Body>
                                <Card.Title className="fw-bold display-6">{data.title}</Card.Title>
                                <Card.Text className="text-muted">{data.description}</Card.Text>
                                
                                <hr />

                                <Card.Text><b>Category:</b> {data.category}</Card.Text>
                                <Card.Text><b>Brand:</b> {data.brand}</Card.Text>
                                <Card.Text><b>Price:</b> ₹{data.price}</Card.Text>
                                <Card.Text><b>Stock Available:</b> {data.stock}</Card.Text>
                                <Card.Text><b>Rating:</b> ⭐ {data.rating}</Card.Text>

                                <Button 
                                    variant="success" 
                                    className="mt-3 w-100 p-2"
                                    onClick={() => addToCart(data)}
                                >
                                    🛒 Add to Cart
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            )}
            {/* // )
            // :(<p className="text-center mt-4 fs-3">No products found</p>)} */}

            {/* Additional Images */}
            {data.images && data.images.length > 0 && (
                <>
                    <h3 className="mt-5 text-center">More Images</h3>
                    <Row className="text-center mt-3">
                        {data.images.map((image, index) => (
                            <Col md={3} key={index}>
                                <Card className="p-2">
                                    <Card.Img src={image} className="img-fluid rounded" />
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </>
            )}

            {/* Reviews Section */}
            {data.reviews && data.reviews.length > 0 && (
                <>
                    <h3 className="mt-5 text-center">Customer Reviews</h3>
                    <Row className="mt-3">
                        {data.reviews.map((review, index) => (
                            <Col md={4} key={index}>
                                <Card className="p-3 shadow-sm">
                                    <Card.Text><b>⭐ Rating:</b> {review.rating}</Card.Text>
                                    <Card.Text><b>📝 Comment:</b> {review.comment}</Card.Text>
                                    <Card.Text className="text-muted"><b>📅 Date:</b> {review.date.toLocaleString()}</Card.Text>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </>
            )}
        </Container>
    );
};
