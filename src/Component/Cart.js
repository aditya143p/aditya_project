import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Cart = () => {
  const cart = useSelector(state => state.cart);

  // Update localStorage only when cart changes
  useEffect(() => {
    localStorage.setItem('cartitems', JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">🛒 Your Shopping Cart</h2>

      {cart.length > 0 ? (
        <div className="row">
          {cart.map((item, index) => (
            <div className="col-lg-6 col-md-12 mb-4" key={index}>
              <Card className="shadow border-0 rounded">
                <div className="text-center p-3">
                  <Card.Img 
                    variant="top" 
                    src={item.thumbnail} 
                    className="rounded"
                    style={{ width: '200px', height: '200px', objectFit: 'cover' }} 
                  />
                </div>
                
                <Card.Body>
                  <Card.Title className="fw-bold">{item.title}</Card.Title>
                  <Card.Text className="text-muted">{item.description}</Card.Text>

                  <Card.Text><b>Category:</b> {item.category}</Card.Text>
                  <Card.Text><b>Brand:</b> {item.brand}</Card.Text>
                  <Card.Text><b>Price:</b> ₹{item.price}</Card.Text>
                  <Card.Text><b>Rating:</b> ⭐ {item.rating}</Card.Text>

                  <div className="text-center">
                    <Button variant="danger" className="mt-2 w-100">
                      Remove from Cart
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      ) : (
        <h5 className="text-center text-muted mt-5">🛍️ Your cart is empty.</h5>
      )}
    </div>
  );
};
