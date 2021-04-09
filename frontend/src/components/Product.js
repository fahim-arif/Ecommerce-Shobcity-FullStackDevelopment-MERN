import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <div>
      {/* <img src={product.image} alt='asd' /> */}
      <Card className='my-3 p-3 rounded'>
        <a href={`/product/${product._id}`}>
          <Card.Img variant='top' src={product.image} />
        </a>
        <Card.Body>
          <a href={`/product/${product._id}`}>
            <Card.Title as='div'>
              <strong>{product.name}</strong>
            </Card.Title>
          </a>
          <Card.Text as='div'>
            <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
          </Card.Text>
          <Card.Text as='h3'>${product.price}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
