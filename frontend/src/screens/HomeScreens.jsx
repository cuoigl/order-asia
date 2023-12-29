import { useEffect, useState } from "react";
import axios from "axios";

import { Row, Col } from "react-bootstrap";

import { Banner } from "../components/Banner";
import { Product } from "../components/Product";

export const HomeScreens = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };

    fetchProducts();
  }, []);
  return (
    <>
      <Banner />
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} xs={6} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};
