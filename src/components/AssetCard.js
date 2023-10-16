import { Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import "./AssetCard.css";
import DetailButton from "./DetailButton";
import { useAssets } from "../hooks/useAssets";

function ProductCard() {
  const { assets, loadingAssets, error } = useAssets();
  if (loadingAssets) {
    return (
      <h2
        style={{
          justifyContent: "center",
          marginTop: "150px",
          display: "flex",
        }}>
        Loading...
      </h2>
    );
  }
  if (error) {
    console.log("error fetching data");
  }
  return (
    <>
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
      </div>
    </>
  );
}

export default ProductCard;
