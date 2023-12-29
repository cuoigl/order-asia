import { Row, Col } from "react-bootstrap";

import Loader from "../components/Loader";
import Message from "../components/Message";

import { Banner } from "../components/Banner";
import { Product } from "../components/Product";

import { useGetProductsQuery } from "../slices/productsApiSlice";

export const HomeScreens = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();

  return (
    <>
      <Banner />
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <h1>Latest Products</h1>
          <Row>
            {products.map((product) => (
              <Col key={product._id} xs={6} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
};
