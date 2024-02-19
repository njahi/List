import { memo } from "react";
import { Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import "./AssetCard.css";
import DetailButton from "./DetailButton";
import { useAssets } from "../hooks/useAssets";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

const AssetCard = memo(function AssetCardCard({ currUser }) {
  const { assets, loadingAssets, error } = useAssets();
  console.log(assets);
  // if (loadingAssets) {
  //   return (
  //     <h2
  //       style={{
  //         justifyContent: "center",
  //         marginTop: "150px",
  //         display: "flex",
  //       }}>
  //       Loading...
  //     </h2>
  //   );
  // }
  // if (error) {
  //   return (
  //     <p>
  //       <span>⛔</span>Error Found
  //     </p>
  //   );
  // }
  return (
    <>
      {loadingAssets && (
        <h2
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "150px",
          }}>
          Loading......
        </h2>
      )}
      {!loadingAssets && !error && (
        <div>
          <Row
            xs={1}
            md={4}
            className='g-4'>
            {assets.map((product, i) => (
              <Col
                align='center'
                key={i}>
                <Card
                  key={product.id}
                  className='product-card'>
                  <Card.Img
                    src={product.image}
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
                    <div style={{ display: "flex" }}>
                      <div>
                        <DetailButton id={product?.id} />
                      </div>
                      {currUser?.isAdmin && (
                        <div
                          style={{
                            display: "flex",
                          }}>
                          <div style={{ marginLeft: "25px" }}>
                            <EditButton id={product?.id} />
                          </div>
                          <div>
                            <DeleteButton id={product?.id} />
                          </div>
                        </div>
                      )}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      )}
      {error && (
        <p>
          <span>⛔</span> Error Found
        </p>
      )}
    </>
  );
});

export default AssetCard;
