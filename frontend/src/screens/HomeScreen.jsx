import { Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useGetProductsQuery } from "../slices/productsApiSlice";
import { Link } from "react-router-dom";
import { Product } from "../components/Product";
import { Loader } from "../components/Loader";
import { Message } from "../components/Message";
import { Paginate } from "../components/Paginate";
import { Banner } from "../components/Banner";
import { Meta } from "../components/Meta";
import { Categories } from "../components/Categories";

export const HomeScreen = () => {
  const { pageNumber, keyword, category } = useParams();

  const { data, isLoading, error } = useGetProductsQuery({
    keyword,
    category,
    pageNumber,
  });

  return (
    <>
      {!keyword && !category ? (
        <Banner />
      ) : (
        <Link to="/" className="btn btn-light mb-4">
          Quay lại
        </Link>
      )}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <Meta />
          <h1 className="mt-5">Danh sách sản phẩm</h1>
          <Categories />
          <Row>
            {data.products.map((product) => (
              <Col key={product._id} xs={6} sm={6} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={data.pages}
            page={data.page}
            keyword={keyword ? keyword : ""}
            category={category ? category : ""}
          />
        </>
      )}
    </>
  );
};
