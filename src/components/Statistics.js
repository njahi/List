import { Statistic, Row, Col } from "antd";
import React from "react";
import { useAssets } from "../hooks/useAssets";

export default function Statistics() {
  const { assets, loadingAssets, error } = useAssets();

  if (loadingAssets) {
    return <h2>Loading</h2>;
  }
  if (error) {
    console.log("error fetching data");
  }
  return (
    <Row>
      <Col>
        {assets.map((product) => (
          <Statistic
            key={product.id}
            title={product.value}
          />
        ))}
      </Col>
    </Row>
  );
}
