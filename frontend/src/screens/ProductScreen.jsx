import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

import { useGetProductDetailsQuery } from "../slices/productsApiSlice";

import { Loader } from "../components/Loader";
import { Message } from "../components/Message";
import { Meta } from "../components/Meta";

export const ProductScreen = () => {
  const { id: productId } = useParams();

  const [modalShow, setModalShow] = useState(false);

  const {
    data: product,
    isLoading,

    error,
  } = useGetProductDetailsQuery(productId);

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Thông tin liên hệ
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Địa chỉ văn phòng: 110 Ngũ Hành Sơn, Phường Mỹ An, Quận Ngũ Hành
            Sơn, Thành phố Đà Nẵng, Vietnam. Sơn, Thành phố Đà Nẵng, Vietnam.{" "}
            <br />
            Hotline: 0796 690 609 <br />
            Giám đốc: 0933 244 852 (Ms.Thoan)
            <br /> Gmail: asiabuy.logistics01@gmail.com.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Đóng</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Quay lại
      </Link>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <Meta title={product.name} description={product.description} />
          <Row>
            <Col md={6}>
              <Image src={product.image} alt={product.name} fluid />
            </Col>
            <Col md={3}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>{product.name}</h3>
                </ListGroup.Item>

                <ListGroup.Item>
                  <h5>Mô tả:</h5>
                  <div
                    dangerouslySetInnerHTML={{ __html: product.description }}
                  />
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3}>
              <Card style={{ backgroundColor: "#fae4d0" }}>
                <Card.Body>
                  {/* <strong>${product.price}</strong> */}
                  <strong>Bạn cần báo giá sản phẩm vui lòng liên hệ</strong>
                  <p
                    style={{
                      fontSize: "30px",
                      color: "#ff914d",
                      fontWeight: "700",
                      textAlign: "center",
                    }}
                    className="pt-2 text-align"
                  >
                    0796690690
                  </p>
                  <div class="d-grid gap-2 col-6 mx-auto">
                    <Button
                      className="btn-block"
                      type="button"
                      onClick={() => setModalShow(true)}
                    >
                      Liên hệ
                    </Button>
                  </div>
                </Card.Body>
                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </Card>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};
