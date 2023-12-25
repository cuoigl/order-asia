import { Row, Col } from "react-bootstrap";

import { Banner } from "../components/Banner";
import { Product } from "../components/Product";

import products from "../products";

export const HomeScreens = () => {
  return (
    <>
      <Banner />
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};
