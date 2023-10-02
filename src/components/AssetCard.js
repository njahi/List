import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import "./AssetCard.css";
import DetailButton from "./DetailButton";

function ProductCard() {
  const [assets, setAssets] = useState([]);

  // Function to fetch assets from the server
  const fetchAssets = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/asset");
      const data = await response.json();
      setAssets(data);
    } catch (error) {
      console.error("Error fetching assets:", error);
    }
  };

  useEffect(() => {
    fetchAssets();
  }, []);

  return (
    <div>
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
                <Card.Title className='product-name'>{product.name}</Card.Title>
                <Card.Text className='product-value'>
                  ${product.value}
                </Card.Text>
                <DetailButton />
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default ProductCard;
