import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import "./AssetCard.css";
import DetailButton from "./DetailButton";
import Loader from "./Loader";

function ProductCard() {
  const [assets, setAssets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // Function to fetch assets from the server
  const fetchAssets = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/asset");
      if (!response.ok)
        throw new Error("Something went wrong with fetching assets");
      const data = await response.json();
      setAssets(data);
    } catch (error) {
      console.error(error.message);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAssets();
  }, []);

  return (
    <div>
      {isLoading && !error ? (
        <Loader />
      ) : (
        <Row
          xs={1}
          md={4}
          className='g-4'>
          {assets.map((product) => (
            <Col align='center'>
              <Card
                key={product.id}
                className='product-card'>
                <Card.Img
                  src={product.imageUrl}
                  alt={product.name}
                  className='product-image'
                />
                <Card.Body className='product-details'>
                  <Card.Title className='product-name'>
                    {product.name}
                  </Card.Title>
                  <Card.Text className='product-value'>
                    ${product.value}
                  </Card.Text>
                  <DetailButton id={product?.id} />
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}

export default ProductCard;
